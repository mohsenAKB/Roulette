"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

/** tiny helper so you don't need extra imports */
function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function InfiniteSlider_TripleCopy_EqualGap_StopOnReach() {
  // 👉 Replace with your custom slide nodes
  const items = ["⭐", "⚔️", "🛡️", "🎯", "🔥", "💎", "🍀"];

  const speed = 160; // px/sec
  const gap = 16;    // px between ALL cards (uniform)
  const autoPlay = true;

  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const [playing, setPlaying] = useState(autoPlay);
  const [ready, setReady] = useState(false);

  // Measurements based on the FIRST set (first n items in the track)
  const setWidthRef = useRef(0);                 // loop distance (includes seam gap)
  const itemCentersRef = useRef<number[]>([]);   // center X (px) of each item within the first set
  const avgItemWidthRef = useRef(100);           // for shaping the vertical offset falloff

  // Animation state
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);
  const offsetRef = useRef(0); // translateX in px, kept in [-setW, 0)

  // Stop-on-item state
  const armedIndexRef = useRef<number | null>(null);
  const armedRef = useRef(false);

  const n = items.length;

  // Render a flat array of 3 copies so neighbors are always visible
  const flat = React.useMemo(() => [...items, ...items, ...items], [items]);

  // Normalize offset into [-setW, 0)
  const normOffset = (x: number, setW: number) => {
    let v = ((x % setW) + setW) % setW; // [0, setW)
    v -= setW;                           // [-setW, 0)
    return v;
  };

  // Measure one set (first n children) and compute centers
  const measure = () => {
    const track = trackRef.current;
    if (!track) return;

    const kids = Array.from(track.children) as HTMLElement[];
    if (kids.length < n) return;

    // widths of first set's items
    const widths = kids.slice(0, n).map((el) => Math.round(el.getBoundingClientRect().width));
    const sumW = widths.reduce((a, b) => a + b, 0);
    avgItemWidthRef.current = Math.max(1, Math.round(sumW / Math.max(1, n)));

    // setW = sum(widths) + n * gap  (includes seam gap between last and first)
    const setW = Math.max(1, sumW + n * gap);
    setWidthRef.current = setW;

    // centers within the first set:
    // center(i) = sum(widths[0..i-1]) + i*gap + widths[i]/2
    const centers: number[] = [];
    let acc = 0;
    for (let i = 0; i < n; i++) {
      centers.push(acc + i * gap + widths[i] / 2);
      acc += widths[i];
    }
    itemCentersRef.current = centers;

    setReady(true);
  };

  // Measure after layout settles (fonts/images)
  useLayoutEffect(() => {
    requestAnimationFrame(() => requestAnimationFrame(measure));
  }, [n, gap]);

  // Re-measure on resize (throttled to rAF)
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
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", onResize);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Arm a one-time stop when item index reaches the center line
  const armStopOn = (index: number) => {
    if (n === 0) return;
    armedIndexRef.current = ((index % n) + n) % n;
    armedRef.current = true;
    setPlaying(true);
  };

  // ✨ vertical offset effect parameters
  const AMP_PX = 14; // max translateY in px (downward)
  // distance at which we hit ~max offset; roughly one card width + gap
  const INFLUENCE_PX = () => avgItemWidthRef.current + gap;

  // Main rAF loop
  useEffect(() => {
    const track = trackRef.current;
    const viewport = viewportRef.current;
    if (!track || !viewport || !ready) return;

    const children = Array.from(track.children) as HTMLElement[];

    const step = (ts: number) => {
      const last = lastTsRef.current ?? ts;
      const dt = Math.min(100, ts - last); // clamp for tab switches
      lastTsRef.current = ts;

      const setW = setWidthRef.current;

      // advance if playing
      if (playing && setW > 0) {
        const dx = (speed * dt) / 1000;
        offsetRef.current = normOffset(offsetRef.current - dx, setW);
        track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      }

      // stop-on-reach check
      if (armedRef.current && armedIndexRef.current !== null && setW > 0) {
        const idx = armedIndexRef.current;
        const centerX = itemCentersRef.current[idx] ?? 0;
        let screenX = (centerX + offsetRef.current) % setW;
        if (screenX < 0) screenX += setW;

        const viewportCenter = Math.round(viewport.getBoundingClientRect().width / 2);
        const tolerance = Math.max(1, (speed * dt) / 1000 + 0.5);

        if (Math.abs(screenX - viewportCenter) <= tolerance) {
          const exactOffset = normOffset(viewportCenter - centerX, setW);
          offsetRef.current = exactOffset;
          track.style.transform = `translate3d(${exactOffset}px, 0, 0)`;
          setPlaying(false);
          armedRef.current = false;
          armedIndexRef.current = null;
        }
      }

      // ✨ vertical offset effect: center item at y=0, neighbors slightly lower
      // We compute each child's visual X and set translateY based on distance to center.
      if (setW > 0) {
        const viewportCenter = Math.round(viewport.getBoundingClientRect().width / 2);
        const infl = INFLUENCE_PX();
        for (let j = 0; j < children.length; j++) {
          // base center of this child using its copy index and original index
          const origIndex = j % n;
          const copyIndex = Math.floor(j / n);         // 0,1,2
          const baseCenter = itemCentersRef.current[origIndex] + copyIndex * setW;

          // fold into current cycle [0, setW)
          let screenX = (baseCenter + offsetRef.current) % setW;
          if (screenX < 0) screenX += setW;

          const dx = screenX - viewportCenter; // distance from viewport center
          const p = Math.min(1, Math.abs(dx) / Math.max(1, infl)); // 0..1
          // easeOutQuad: noticeable near center but gentle
          const y = AMP_PX * (1 - (1 - p) * (1 - p));
          // move DOWN (positive) except exactly at center (y≈0)
          children[j].style.transform = `translateY(${y}px) translateZ(0)`;
          children[j].style.willChange = "transform";
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
  }, [playing, speed, ready, n, gap]);

  return (
    <div className="w-full flex flex-col items-center gap-4 p-6">
      <div
        ref={viewportRef}
        className="relative w-full h-36 overflow-hidden rounded-2xl bg-black/80"
      >
        {/* center marker (optional) */}
        <div className="pointer-events-none absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-24 border-x border-pink-400/50" />

        {/* TRACK: one flat list, 3× copies, uniform gap everywhere */}
        <div
          ref={trackRef}
          className={cn("absolute top-0 left-0", "flex will-change-transform select-none")}
          style={{
            transform: "translate3d(0, 0, 0)",
            backfaceVisibility: "hidden",
            perspective: "1000px",
            columnGap: `${gap}px`,
          }}
        >
          {flat.map((node, i) => (
            <div
              key={i}
              className="flex-none w-24 h-28 flex items-center justify-center text-3xl rounded-xl bg-gradient-to-b from-purple-800 to-purple-500 text-white shadow-lg"
            // child transform is set per-frame in rAF (translateY)
            >
              {typeof node === "string" ? node : node}
            </div>
          ))}
        </div>
      </div>

      {/* test controls */}
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
        {items.map((emoji, i) => (
          <button
            key={i}
            onClick={() => armStopOn(i)}
            className="px-3 py-2 rounded-lg bg-indigo-600 text-white shadow"
          >
            Stop on {emoji}
          </button>
        ))}
      </div>
    </div>
  );
}
