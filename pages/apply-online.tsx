import { NextSeo } from "next-seo";
import PurchaseForm from "../components/Forms/Purchase-form";
import AssetfinanceForm from "../components/Forms/Assetfinance-form";

import BusinessForm from "../components/Forms/Business-form";
import SimpleHero from "@/components/Common/SimpleHero";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Applynow2() {
  const [form, setForm] = useState(0);
  const router = useRouter();
  const [isSelected, setIsSelected] = useState(false);
  const selectForm = (number: number) => {
    if (number === 0) {
      return router.push("/home-loan");
    }
    if (number === 1) {
      return router.push("/business-loan");
    }
    if (number === 2) {
      return router.push("/asset-finance");
    }
    setForm(number);
    setIsSelected(true);
  };
  return (
    <>
      <SimpleHero
        heading="Apply Now"
        subHeading="We are more than just a broker."
      />
      <div className="max-w-site-full mx-auto overflow-hidden">
        <div className="my-12 bg-[#fff]    md:py-24  ">
          <NextSeo title="Apply Now " />
          {isSelected && (
            <p
              onClick={() => {
                setIsSelected(false);
              }}
              className="text-xl mb-4  cursor-pointer font-semibold flex gap-2 items-center"
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
          <div className="   md:px-0">
            <section className="grid lg:grid-cols-12 px-4  gap-16">
              <section className=" lg:col-span-8 ">
                {!isSelected && (
                  <div>
                    <p className="text-2xl">
                      Q. What is the purpose of the loan?
                    </p>
                    <div className="grid  grid-cols-1 lg:grid-cols-3  gap-8 justify-center my-16">
                      <SingleOption
                        selectForm={selectForm}
                        option={0}
                        title="Home Loan"
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
                      </SingleOption>

                      <SingleOption
                        selectForm={selectForm}
                        option={1}
                        title="Business Loan"
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
                            d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                          />
                        </svg>
                      </SingleOption>
                      <SingleOption
                        selectForm={selectForm}
                        option={2}
                        title="Asset Finance"
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
                            d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                          />
                        </svg>
                      </SingleOption>
                    </div>
                  </div>
                )}
                {isSelected && (
                  <div className=" ">
                    {form === 0 && <PurchaseForm />}
                    {form === 1 && <BusinessForm />}
                    {form === 2 && <AssetfinanceForm />}
                  </div>
                )}
              </section>
              <section className="lg:col-span-4  ">
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
      </div>
    </>
  );
}
interface Props {
  selectForm: (number: number) => void;
  title: string;

  option: number;
  children: any;
}
const SingleOption = ({ selectForm, title, option, children }: Props) => {
  return (
    <div
      onClick={() => selectForm(option)}
      className="flex flex-wrap flex-col border  p-8 rounded-xl shadow-xl  hover:-translate-y-2 transition-all delay-300 gap-4 items-center cursor-pointer"
    >
      {children}

      <p>{title}</p>
    </div>
  );
};
