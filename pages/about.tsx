import AlternateGrid from "@/components/Common/AlternateGrid";
import SimpleHero from "@/components/Common/SimpleHero";
import YoastNextSeo from "@/components/UI/YoastNextSeo";

import React from "react";

export default function About(props: any) {
  const { pageData } = props;

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
  return (
    <div>
      <SimpleHero
        heading="About Lend A Loan"
        subHeading="We are more than just a broker."
      />
      <YoastNextSeo {...pageData.yoast_head_json} />

      <AlternateGrid content={content} />
      <section className="bg-gray-bg  ">
        <div className="max-w-site-full  md:py-20 mx-auto">
          <h3 className="text-30px font-isidorasans_semi_bold py-5   md:mb-8 text-center">
            Meet Our People
          </h3>
          <div className="grid md:grid-cols-2 gap-8 px-4 py-4">
            {peoples.map((p) => (
              <div className="" key={Math.random()}>
                <div className="mb-4">
                  <p className="text-30px font-isidorasans_semi_bold">
                    {p.name}
                  </p>
                  <p className="uppercase text-sm font-isidorasans_semi_bold">
                    {p.designation}
                  </p>
                </div>
                <div className="lg:pr-16 text-16px md:text-18px text-dark font-isidorasans_regular">
                  <p>{p.info}</p>
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
