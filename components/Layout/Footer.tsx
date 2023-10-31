import Image from "next/image";
import React from "react";
import { nav1, nav2 } from "@/seed/footerLinks";
import Link from "next/link";
import FooterForm from "./Footer-form";
import { useQuery } from "@apollo/client";
import { Footer1, Footer2 } from "@/config/queries";

export default function Footer() {

  const { loading, error, data } = useQuery(Footer1);
  const footer2 = useQuery(Footer2);
  return (
    <footer className="bg-footer">
      <div className="max-w-site-full mx-auto   text-18px font-isidorasans_regular text-footer-link px-4    py-16 md:py-20  ">
        <div className="flex justify-center md:justify-start ">
          <Image
            src={"/imgs/footer_logo.png"}
            loading="lazy"
            width={160}
            height={10}
            alt="logo"
          />
        </div>

        <div className="grid gap-4 justify-center text-center  md:text-justify md:grid-cols-2 lg:grid-cols-4 my-7 md:my-4">
          <div className="flex flex-col gap-2">
            {data?.menuItems?.nodes?.map((s: any, idx: number) => (
              <Link
                className="text-footer-link text-18px hover:text-white font-isidorasans_regular"
                key={Math.random()}
                href={s.label.replace(' ', '-').toLowerCase()}
              >
                {s.label}
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
              href="tel:1300 993 095"
            >
              1300 993 095
            </a>
            <div className="flex   items-center justify-center md:justify-start gap-2 lg:gap-4">
              <a
                target={"_blank"}
                href="https://twitter.com/lend_loan"
                className="max-w-fit rounded-full bg-white"
              >
                <svg
                  viewBox="0 0 896 896"
                  fill="none"
                  className="h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M448 0C200.6 0 0 200.6 0 448C0 695.4 200.6 896 448 896C695.4 896 896 695.4 896 448C896 200.6 695.4 0 448 0ZM663.3 337.7C663.6 342.4 663.6 347.3 663.6 352.1C663.6 498.9 551.8 668 347.5 668C284.5 668 226.1 649.7 176.9 618.2C185.9 619.2 194.5 619.6 203.7 619.6C255.7 619.6 303.5 602 341.6 572.2C292.8 571.2 251.8 539.2 237.8 495.2C254.9 497.7 270.3 497.7 287.9 493.2C262.773 488.095 240.188 474.448 223.982 454.578C207.776 434.708 198.949 409.841 199 384.2V382.8C213.7 391.1 231 396.2 249.1 396.9C233.884 386.759 221.406 373.021 212.771 356.903C204.136 340.785 199.612 322.785 199.6 304.5C199.6 283.8 205 264.9 214.7 248.5C242.59 282.834 277.393 310.914 316.846 330.917C356.3 350.919 399.521 362.395 443.7 364.6C428 289.1 484.4 228 552.2 228C584.2 228 613 241.4 633.3 263C658.4 258.3 682.4 248.9 703.8 236.3C695.5 262 678.1 283.7 655 297.4C677.4 295 699 288.8 719 280.1C703.9 302.3 685 322 663.3 337.7Z"
                    fill="#1DA1F2"
                  />
                </svg>
              </a>

              <a
                target={"_blank"}
                className="  rounded-full    "
                href="https://www.linkedin.com/company/lend-a-loan/"
              >
                <svg
                  className=" h-8 w-8 bg-[#0A66C2] rounded-full"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 11.1285V14.8255H12.857V11.3755C12.857 10.5095 12.547 9.91853 11.771 9.91853C11.179 9.91853 10.826 10.3165 10.671 10.7025C10.615 10.8405 10.6 11.0325 10.6 11.2245V14.8255H8.456C8.456 14.8255 8.485 8.98353 8.456 8.37853H10.6V9.29153L10.586 9.31253H10.6V9.29153C10.885 8.85153 11.393 8.22653 12.532 8.22653C13.942 8.22653 15 9.14853 15 11.1285ZM6.213 5.26953C5.48 5.26953 5 5.75153 5 6.38353C5 7.00353 5.466 7.49853 6.185 7.49853H6.199C6.947 7.49853 7.412 7.00253 7.412 6.38353C7.398 5.75153 6.947 5.26953 6.213 5.26953ZM5.127 14.8255H7.271V8.37853H5.127V14.8255Z"
                    fill="white"
                  />
                  <path
                    d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20Z"
                    fill="#0A66C2"
                  />
                </svg>
              </a>

              <a
                target={"_blank"}
                href="https://www.instagram.com/lend_a_loan/"
                className="  rounded-full p-1  bg-[#F305E2]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="  h-6 w-6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 16V8C3 6.67392 3.52678 5.40215 4.46447 4.46447C5.40215 3.52678 6.67392 3 8 3H16C17.3261 3 18.5979 3.52678 19.5355 4.46447C20.4732 5.40215 21 6.67392 21 8V16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21H8C6.67392 21 5.40215 20.4732 4.46447 19.5355C3.52678 18.5979 3 17.3261 3 16Z"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M17.5 6.511L17.51 6.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                target={"_blank"}
                href="https://www.facebook.com/lendaloan.com.au/"
                className="rounded-full p-1 bg-[#3B5998]"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 256 255"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.307 0 128C0 191.888 46.808 244.843 108 254.445V165H75.5V128H108V99.8C108 67.72 127.11 50 156.347 50C170.352 50 185 52.5 185 52.5V84H168.86C152.958 84 148 93.867 148 103.99V128H183.5L177.825 165H148V254.445C209.192 244.843 256 191.889 256 128Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="  text-white text-18px font-isidorasans_regular">
              {" "}
              Get updates in your inbox!
            </p>

            <FooterForm />
          </div>
        </div>
        <div className="my-8   md:px-0">
          <div className="flex gap-1 text-footer-link">
            <Link className="hover:text-gray-200" href="/terms-and-conditions">
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
