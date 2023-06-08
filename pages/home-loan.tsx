import { NextSeo } from "next-seo";
import RefinanceForm from "../components/Forms/Refinance-form";
import PurchaseForm from "../components/Forms/Purchase-form";
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
        heading="Apply For Home Loan "
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
              {!isSelected && (
                <div>
                  <p className="text-2xl">
                    Q. What is the purpose of the loan?
                  </p>
                  <div className="grid  lg:grid-cols-2 gap-8  justify-center my-16">
                    <div
                      onClick={() => selectForm(0)}
                      className="flex flex-wrap flex-col border  p-8 rounded-xl shadow-xl  hover:-translate-y-2 transition-all delay-300 gap-4 items-center cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                        className="w-16 h-16"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                      </svg>
                      <p>I am buying a home</p>
                    </div>
                    <div
                      onClick={() => selectForm(1)}
                      className="flex flex-wrap flex-col border  p-8 rounded-xl shadow-xl  hover:-translate-y-2 transition-all delay-300 gap-4 items-center cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                        className="w-16 h-16"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p>I want to refinance </p>
                    </div>
                  </div>
                </div>
              )}

              {isSelected ? (
                form === 0 ? (
                  <PurchaseForm />
                ) : (
                  <RefinanceForm />
                )
              ) : null}
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
