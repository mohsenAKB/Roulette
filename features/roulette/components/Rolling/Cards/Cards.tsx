"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

/** tiny helper so you don't need extra imports */
function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

/**
 * TestInfiniteSlider_StopOnReach
 * - Infinite marquee slider (rAF + modulo; no keyframes)
 * - Half-gap seam (uniform spacing, no double-gap)
 * - Stop-on-item-when-it-reaches-center via arming function
 * - Replace emoji slides with your custom elements
 */
export default function TestInfiniteSlider_StopOnReach() {
  // 👉 Replace these with your custom nodes (cards/images/etc.)
  const items = ["⭐", "⚔️", "🛡️", "🎯", "🔥", "💎", "🍀"];

  const speed = 160; // px/sec
  const gap = 16;    // px spacing (Tailwind gap-4 ~= 16)

  const autoPlay = true;

  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const setRef = useRef<HTMLDivElement | null>(null);

  const [playing, setPlaying] = useState(autoPlay);
  const [ready, setReady] = useState(false);

  // measurements
  const setWidthRef = useRef(0);      // px width of ONE set (incl. half-gap spacer)
  const itemWidthsRef = useRef<number[]>([]); // each item width + trailing gap (except last)
  const itemCentersRef = useRef<number[]>([]); // cumulative centers (within the set)

  // animation state
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);
  const offsetRef = useRef(0);        // translateX in px (we keep it in [-setW, 0))

  // stop-on-item state
  const armedIndexRef = useRef<number | null>(null); // which item to stop on (one-time)
  const armedRef = useRef(false);

  /** Helper: normalize offset into [-setW, 0) for our transform range */
  const normOffset = (x: number, setW: number) => {
    let n = ((x % setW) + setW) % setW; // [0, setW)
    n -= setW;                           // [-setW, 0)
    return n;
  };

  /** Measure set width & each item's center position (within that set). */
  const measure = () => {
    const setEl = setRef.current;
    if (!setEl) return;

    // children: [item, item, ..., half-gap-spacer]
    const children = Array.from(setEl.children) as HTMLElement[];
    if (children.length === 0) return;

    // last child is the half-gap spacer — exclude it from item widths
    const itemEls = children.slice(0, -1);

    // widths (rounded) and cumulative positions
    const widths = itemEls.map((el) => Math.round(el.getBoundingClientRect().width));

    // add gap after each item except the last (CSS columnGap handles it visually)
    const widthsPlusGap = widths.map((w, i) => (i < widths.length - 1 ? w + gap : w));

    itemWidthsRef.current = widthsPlusGap;

    // cumulative centers: centerX of each item within the set's local space
    const centers: number[] = [];
    let x = 0;
    for (let i = 0; i < widths.length; i++) {
      const w = widths[i];
      const center = x + w / 2;
      centers.push(Math.round(center));
      x += widthsPlusGap[i];
    }
    itemCentersRef.current = centers;

    // set width: total width + HALF spacer (already in DOM)
    const setW = Math.max(1, Math.round(setEl.getBoundingClientRect().width));
    setWidthRef.current = setW;
    setReady(true);
  };

  // Measure after layout settles (fonts, etc.)
  useLayoutEffect(() => {
    requestAnimationFrame(() => requestAnimationFrame(measure));
  }, []);

  // Re-measure on resize / content changes (throttled via rAF)
  useEffect(() => {
    let ticking = false;
    const onResize = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        measure();
      });
    };
    const ro = new ResizeObserver(onResize);
    if (viewportRef.current) ro.observe(viewportRef.current);
    if (setRef.current) ro.observe(setRef.current);
    window.addEventListener("resize", onResize);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  /** Arm a one-time stop when the given item index reaches the center line */
  const armStopOn = (index: number) => {
    armedIndexRef.current = ((index % items.length) + items.length) % items.length;
    armedRef.current = true;
    // ensure we are playing so it can reach the marker
    setPlaying(true);
  };

  /** Main rAF loop */
  useEffect(() => {
    const track = trackRef.current;
    const viewport = viewportRef.current;
    if (!track || !viewport || !ready) return;

    const step = (ts: number) => {
      const last = lastTsRef.current ?? ts;
      const dt = Math.min(100, ts - last); // clamp for background tab jumps
      lastTsRef.current = ts;

      const setW = setWidthRef.current;

      // advance if playing
      if (playing && setW > 0) {
        const dx = (speed * dt) / 1000;
        offsetRef.current = normOffset(offsetRef.current - dx, setW);
        track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      }

      // handle armed stop: check if target item center crosses the center marker
      if (armedRef.current && armedIndexRef.current !== null && setW > 0) {
        const idx = armedIndexRef.current;
        const centerX = itemCentersRef.current[idx] ?? 0;

        // current screen position of that item's center:
        // screenX = (center within set) + current offset
        // We wrap it into [0, setW) to compare against viewport center mod the cycle.
        let screenX = (centerX + offsetRef.current) % setW;
        if (screenX < 0) screenX += setW; // [0, setW)

        const viewportCenter = Math.round((viewport.getBoundingClientRect().width) / 2);

        // dynamic tolerance: distance moved this frame + 1px
        const tolerance = Math.max(1, (speed * dt) / 1000 + 0.5);

        if (Math.abs(screenX - viewportCenter) <= tolerance) {
          // Snap exactly to center and stop
          const exactOffset = normOffset(viewportCenter - centerX, setW);
          offsetRef.current = exactOffset;
          track.style.transform = `translate3d(${exactOffset}px, 0, 0)`;
          setPlaying(false);
          armedRef.current = false;
          armedIndexRef.current = null;
        }
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTsRef.current = null;
    };
  }, [playing, speed, ready]);

  return (
    <div className="w-full flex flex-col items-center gap-4 p-6">
      <div
        ref={viewportRef}
        className="relative w-full max-w-3xl h-36 overflow-hidden rounded-2xl bg-black/80"
      >
        {/* visual markers */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black via-transparent to-black opacity-70" />
        <div className="pointer-events-none absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-24 border-x border-pink-400/50" />

        {/* TRACK (no outer gap) */}
        <div
          ref={trackRef}
          className={cn(
            "absolute left-0 top-1/2 -translate-y-1/2",
            "flex will-change-transform select-none"
          )}
          style={{
            transform: "translate3d(0, -50%, 0)",
            backfaceVisibility: "hidden",
            perspective: "1000px",
            contain: "paint layout style",
          }}
        >
          {/* Set A (measured) — inner columnGap + trailing HALF spacer */}
          <div className="flex" style={{ columnGap: `${gap}px` }} ref={setRef}>
            {items.map((emoji, i) => (
              <div
                key={`a-${i}`}
                className="flex-none w-24 h-28 flex items-center justify-center text-3xl rounded-xl bg-gradient-to-b from-purple-800 to-purple-500 text-white shadow-lg"
              >
                {emoji}
              </div>
            ))}
            {/* Half-gap spacer to ensure seam equals one full gap when A meets B */}
            <div style={{ width: gap / 2, height: 1 }} />
          </div>

          {/* Set B (identical) — also ends with HALF spacer */}
          <div className="flex" style={{ columnGap: `${gap}px` }}>
            {items.map((emoji, i) => (
              <div
                key={`b-${i}`}
                className="flex-none w-24 h-28 flex items-center justify-center text-3xl rounded-xl bg-gradient-to-b from-purple-800 to-purple-500 text-white shadow-lg"
              >
                {emoji}
              </div>
            ))}
            <div style={{ width: gap / 2, height: 1 }} />
          </div>
        </div>
      </div>

      {/* Demo controls */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => setPlaying(true)}
          className="px-4 py-2 rounded-xl bg-emerald-600 text-white shadow"
        >
          Play
        </button>
        <button
          onClick={() => setPlaying(false)}
          className="px-4 py-2 rounded-xl bg-rose-600 text-white shadow"
        >
          Pause
        </button>

        {/* Arm stop-on-item buttons (for testing) */}
        {items.map((emoji, i) => (
          <button
            key={i}
            onClick={() => armStopOn(i)}
            className="px-3 py-2 rounded-lg bg-indigo-600 text-white shadow"
            title={`Stop when ${emoji} reaches center`}
          >
            Stop on {emoji}
          </button>
        ))}
      </div>
    </div>
  );
}
