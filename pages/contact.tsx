import ContactGrid from "@/components/Contact/ContactGrid";
import ContactForm from "@/components/Contact/Form";
import YoastNextSeo from "@/components/UI/YoastNextSeo";

import React from "react";

export default function ContactUsPage(props: any) {
  const { pageData } = props;

  return (
    <>
      <YoastNextSeo {...pageData.yoast_head_json} />
      <div
        className="py-12    md:py-24 px-4 lg:px-12"
        style={{ backgroundColor: "#171719" }}
      >
        <div className="max-w-site-full mx-auto">
          <h1 className="text-36px text-center text-brand-blue font-isidorasans_semi_bold">
            Contact Us
          </h1>
        </div>
      </div>
      <div className="mb-8 s ">
        <div className="test-bg lg:py-12 -m-[2px] ">
          <div className="w-full  bg-brand-blue absolute   blue-line"></div>
          <div className="max-w-site-full   mx-auto  p-4 lg:p-0 bg-g">
            <div className="relative z-10  px-4">
              <ContactGrid contact_address={pageData.acf.contact_address} />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-site-full mx-auto">
        <div className="bg-white px-4 ">
          <div className="text-center  ">
            <h2 className="text-36px  my-4 font-isidorasans_semi_bold">
              How can we help?
            </h2>
            <p className="text-18px font-isidorasans_regular">
              Fill up the form and our team we’ll get back to you shortly.
            </p>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const homepage_url = process.env.NEXT_WP_API_URL + `/custom-page/75`;

  const homePageData = await fetch(homepage_url).then((r) => r.json());

  return {
    props: {
      pageData: homePageData,
    },
  };
};
