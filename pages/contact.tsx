import ContactGrid from "@/components/Contact/ContactGrid";
import ContactForm from "@/components/Contact/Form";
import YoastNextSeo from "@/components/UI/YoastNextSeo";

import React from "react";

export default function ContactUsPage(props: any) {
  const { pageData } = props;

  return (
    <div className="bg-gray-100">
      <YoastNextSeo {...pageData.yoast_head_json} />
      <div
        className="py-12 md:py-24 px-4 lg:px-12 border-b-[7px] border-[#61C0CD] "
        style={{ backgroundColor: "#171719" }}
      >
        <div className="max-w-site-full h-[280px] mx-auto">
          <h1 className="text-2xl text-brand-blue font-isidorasans_semi_bold">
            Contact Us
          </h1>
          <p className="text-white text-2xl md:text-4xl mt-6 font-extralight">We're here to help, Let’s talk.</p>
        </div>
      </div>
      <div className="mb-8 -mt-[200px] lg:-mt-[250px]">
        <div className="lg:py-12 -m-[2px] ">
          <div className="max-w-site-full mx-auto  p-4 lg:p-0 bg-g">
            <div className="relative z-10">
              <ContactGrid contact_address={pageData.acf.contact_address} />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-site-full mx-auto md:px-0 px-4">
        <div className=" ">
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
    </div>
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
