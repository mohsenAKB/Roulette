import Image from "next/image";
import Link from "next/link";
import { FC, ReactNode } from "react";
import EmailInput from "./EmailInput/EmailInput";

const Footer: FC = (): ReactNode => {
  return (
    <footer className="w-full bg-gray-900 p-[70px] flex justify-between">
      <div className="flex flex-col ">
        <Link href="/" className=" mb-[30px]">
          <Image alt="Logo" src="/logo/Logo.svg" width={133} height={44} />
        </Link>

        <p className="max-w-[400px] mb-[65px] text-[14px] font-normal text-body-gray-900">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type
        </p>

        <div className="flex gap-1.5">
          <Link href="/">
            <Image
              alt="LinkedIn"
              src="/icons/linkedin.svg"
              width={44}
              height={44}
            />
          </Link>

          <Link href="/">
            <Image
              alt="Instagram"
              src="/icons/instagram.svg"
              width={44}
              height={44}
            />
          </Link>

          <Link href="/">
            <Image
              alt="Facebook"
              src="/icons/facebook.svg"
              width={44}
              height={44}
            />
          </Link>

          <Link href="/">
            <Image
              alt="Youtube"
              src="/icons/youtube.svg"
              width={44}
              height={44}
            />
          </Link>

          <Link href="/">
            <Image alt="X" src="/icons/x.svg" width={44} height={44} />
          </Link>
        </div>
      </div>

      <div className="flex gap-5">
        <div className="flex flex-col gap-10 w-[247px]">
          <h2 className="text-title-gray text-[22px] font-semibold">Browse</h2>

          <ul>
            <li className="text-body-gray-900 text-[14px] font-semibold mb-[22px]">
              <Link href="#">All Skins</Link>
            </li>

            <li className="text-body-gray-900 text-[14px] font-semibold mb-[22px]">
              <Link href="#">Blog posts</Link>
            </li>

            <li className="text-body-gray-900 text-[14px] font-semibold mb-[22px]">
              <Link href="#">Price</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-10 w-[247px]">
          <h2 className="text-title-gray text-[22px] font-semibold">Company</h2>

          <ul>
            <li className="text-body-gray-900 text-[14px] font-semibold mb-[22px]">
              <Link href="#">Terms and conditions</Link>
            </li>

            <li className="text-body-gray-900 text-[14px] font-semibold mb-[22px]">
              <Link href="#">Privacy Policy</Link>
            </li>

            <li className="text-body-gray-900 text-[14px] font-semibold mb-[22px]">
              <Link href="#">Help / FAQ</Link>
            </li>

            <li className="text-body-gray-900 text-[14px] font-semibold mb-[22px]">
              <Link href="#">About us</Link>
            </li>

            <li className="text-body-gray-900 text-[14px] font-semibold mb-[22px]">
              <Link href="#">Contact us</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-10 ">
          <h2 className="text-title-gray text-[22px] font-semibold">
            Subscribe to get offers
          </h2>

          <EmailInput />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
