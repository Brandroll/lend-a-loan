import Image from "next/image";
import React from "react";
import { nav1, nav2 } from "@/seed/footerLinks";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-footer">
      <div className="max-w-site-full mx-auto text-18px font-isidorasans_regular text-footer-link  py-16 md:py-20 md:px-12">
        <div className="flex justify-center md:justify-start ">
          <Image
            src={
              "https://lendaloan.au/wp-content/uploads/2022/03/LEND-A-LOAN-LOGOWHITE-AND-AQUA.svg"
            }
            width={200}
            height={10}
            alt="logo"
          />
        </div>

        <div className="grid gap-4 justify-center text-center md:text-justify md:grid-cols-4 my-7 md:my-4">
          <div className="flex flex-col gap-2">
            {nav1.map((l: any) => (
              <Link
                className="text-footer-link text-18px hover:text-white font-isidorasans_regular"
                key={Math.random()}
                href={l.slug}
              >
                {l.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            {nav2.map((l: any) => (
              <Link
                className="text-footer-link text-18px hover:text-white font-isidorasans_regular"
                key={Math.random()}
                href={l.slug}
              >
                {l.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <a
              className="text-footer-link text-18px hover:text-white font-isidorasans_regular"
              href="emailto:admin@lendaloan.com.au"
            >
              admin@lendaloan.com.au
            </a>
            <a
              className="text-footer-link text-18px hover:text-white font-isidorasans_regular"
              href="tel:1300 861 336"
            >
              1300 861 336
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <p className="  text-white text-18px font-isidorasans_regular">
              {" "}
              Get updates in your inbox!
            </p>
            <input
              className="border  px-4 py-3 bg-footer text-white outline-none border-footer-link"
              placeholder="EMAIL ADDRESS"
            />
            {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 top-4 text-footer-link  "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg> */}
          </div>
        </div>
        <div className="my-8 px-4 md:px-0">
          <div className="flex gap-1 text-footer-link">
            <Link className="hover:text-gray-200" href="/terms-conditions">
              Terms & Conditions{" "}
            </Link>{" "}
            |{" "}
            <Link className="hover:text-gray-200" href="/privacy-policy/">
              Privacy Policy{" "}
            </Link>
          </div>

          <p>
            LEND A LOAN PTY LTD Credit Representative 514358 is authorised under
            Australian Credit License of Australian Finance Group Ltd ACN 066
            385 822 (AFG) Australian Credit Licence 389087 *We do not charge you
            a fee to discuss your loan options with one of our LEND A LOAN
            Brokers, more information on any charges are provided in our credit
            guide which your LEND A LOAN broker will provide you.
          </p>

          <p className="mt-8">
            Copyright © 2022 www.lendaloan.com.au. Site by Brandroll – Digital
            Agency
          </p>
        </div>
      </div>
    </footer>
  );
}
