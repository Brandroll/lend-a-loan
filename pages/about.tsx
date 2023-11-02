import AlternateGrid from "@/components/Common/AlternateGrid";
import SimpleHero from "@/components/Common/SimpleHero";
import HomeLoanVideoHero from "@/components/HomeLoan/HomeLoanVideoHero";
import WPHTMLContent from "@/components/UI/WPHTMLContent";
import YoastNextSeo from "@/components/UI/YoastNextSeo";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";
import Link from "next/link";

import React from "react";

export default function About(props: any) {
  const { pageData } = props;
  console.log("🚀 ~ file: about.tsx:14 ~ About ~ pageData:", pageData)

  const content = [
    {
      information: {
        heading: "Who are we.",
        info: `Founded in 2018 Lend a Loan Pty Ltd is a brokerage for those who require all their lending solutions under one roof. Our brokers have extensive experience and can provide loans to all types of clients including, both small business lending and consumer loans and mortgages.

    We take servicing our clients seriously and pride ourselves on providing excellent customer service. Our goal at Lend A Loan is to provide our client with integrity and honesty. For us our relationship begins at the settlement of your loan, our brokers will keep in touch with you regularly to ensure your are happy with your loan and to ensure that the loan we provide you is still right for your unique requirements.`,
      },
      image: `https://lendaloan.au/wp-content/uploads/2022/03/about-img-1.jpg`,
    },
  ];
  const peoples = [
    {
      name: "Shahrooz Safanejad",
      designation: " FINANCE AND MORTGAGE BROKER  ",
      info: `Shahrooz career spans over 20 years in finance and property markets. With wealth of knowledge in home improvement real estate and finance industry, Shahrooz is the founder of Lend A Loan Pty Ltd, before starting lend a loan Shahrooz worked on building up his commercial coating maintenance company which served major clients such as Toyota Australia, A & L Windows, ITW Australia, CDK Stone and Event Hospitality and Entertainment just to name a few. 

      `,
    },
    {
      name: "Mehria Durani",
      designation: " BROKER ADMIN",
      info: `Mehria has over 15 years experience in the finance and banking industry. Her number one goal is to source the best solutions for her clients and provide her client’s with good outcome. She is renowned for being a fast operator, possessing a wealth of knowledge and for her honesty and integrity; making her the perfect representative for any one sourcing any type of home, investment or private finance. Her relationship with Banks and Non-Bank Lenders is second to none.


        `,
    },
  ];
  function oddOrEven(num: number) {
    if (num % 2 == 0) return "even";
    return "odd";
  }
  const calc = (i: number) => {
    return oddOrEven(i + 1);
  };
  return (
    <div>

      <HomeLoanVideoHero
        heading={pageData?.acf?.heading}
        video={pageData?.acf?.video}
      />
      <YoastNextSeo {...pageData.yoast_head_json} />
      <div className="my-8">
        <section className="grid lg:mt-8   md:my-10 alternate-grid md:gap-4 lg:gap-8 px-4   max-w-site-full mx-auto ">

        
            <section className="grid lg:grid-cols-2  my-4 gap-16">
              <div
                className=" mt-4  lg:mt-0 md:justify-center lg:justify-start"
              >
                <Image
                  className="lg:shadow-2xl "
                  src={pageData?.acf?.company_info?.image?.url}
                  alt=""
                  width={1000}
                  height={900}
                />
              </div>

              <div
                className=" lg:mr-12  "
              >
                <div className="flex flex-col font-isidorasans_regular justify-center -mb-4 lg:mb-0 ">
                  <h4 className="text-dark lg:mb-4 text-28px lg:text-2xl font-isidorasans_semi_bold  font-medium" >

                    {pageData?.acf?.company_info?.title}

                  </h4>
                  <WPHTMLContent html={pageData?.acf.company_info?.details} />
                </div>
              </div>
            </section>
       

        </section>
      </div>
      <section className="bg-gray-bg  ">
        <div className="max-w-site-full  py-8 lg:py-12 mx-auto">
          <h3 className="text-30px font-isidorasans_semi_bold  lg:mb-4    text-center">
            Meet Our People
          </h3>
          <div className="grid md:grid-cols-2 gap-8 px-4 py-4">
            {pageData?.acf?.team_members.map((p: any) => (
              <div className="" key={Math.random()}>
                <div className="mb-4">
                  <div className="my-4">
                    <Image src={p.profile_photo} width={450} height={373} alt="" className=" lg:shadow-2xl h-[373px] object-cover " />

                  </div>
                  <p className="text-30px font-isidorasans_semi_bold">
                    {p.name}
                  </p>
                  <p className="uppercase text-sm font-isidorasans_semi_bold">
                    {p.designation}
                  </p>
                </div>
                <div className="lg:pr-16 text-16px md:text-18px text-dark font-isidorasans_regular">
                  <div dangerouslySetInnerHTML={{ __html: p.info }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export const getStaticProps = async () => {
  const homepage_url = process.env.NEXT_WP_API_URL + `/custom-page/120`;

  const homePageData = await fetch(homepage_url).then((r) => r.json());

  return {
    props: {
      pageData: homePageData,

    },
  };
};
