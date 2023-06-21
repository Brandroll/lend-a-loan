import { NextSeo } from "next-seo";
import RefinanceForm from "../components/Forms/Refinance-form";

import SimpleHero from "@/components/Common/SimpleHero";
import Link from "next/link";
import { useState } from "react";

export default function Applynow() {
  const [form, setForm] = useState(0);
  const [isSelected, setIsSelected] = useState(false);
  const selectForm = (number: number) => {
    setForm(number);
    setIsSelected(true);
  };
  return (
    <>
      <SimpleHero
        heading="Apply For Home Loan Refinance "
        subHeading="We are more than just a broker."
      />
      <div className="max-w-site-full mx-auto">
        <div className="my-12 bg-[#fff]    md:py-24 px-4 ">
          <NextSeo title="Apply For Home Loan  " />
          {isSelected && (
            <p
              onClick={() => {
                setIsSelected(false);
              }}
              className="text-xl mb-8 cursor-pointer font-semibold flex gap-2 items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
              Back
            </p>
          )}
          <section className="grid lg:grid-cols-12 gap-8">
            <section className="col-span-8">
              <RefinanceForm />
            </section>
            <section className="max-w-site-full mx-auto   md:col-span-3  ">
              <div className="py-8 px-8 rounded-md bg-blue-800 ">
                <p className="font-isidorasans_semi_bold text-3xl mb-4 text-brand-blue">
                  Need help finding the right loan?
                </p>
                <p className="text-white font-isidorasans_semi_bold">
                  <p className="text-15px "> Phone us on 1300 993 095</p>
                  <p className="text-15px font-isidorasans_medium">
                    Our team are happy to help put you in touch with a broker
                    local to your area.
                  </p>
                  <p className=" mt-4 ">
                    Online enquiry{" "}
                    <p className="font-isidorasans_regular">
                      Complete our online form and we’ll give you a call to
                      connect you with one of our brokers .
                    </p>{" "}
                  </p>
                </p>

                <Link href="/contact">
                  <div className="flex gap-2 mt-2 font-isidorasans_semi_bold text-white items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={0.5}
                      stroke="currentColor"
                      className="w-12 md:w-12 h-12 md:h-12  text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Get in touch
                  </div>
                </Link>
              </div>
            </section>
          </section>
        </div>
      </div>
    </>
  );
}
