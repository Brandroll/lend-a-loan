import SimpleHero from "@/components/Common/SimpleHero";
import ContactGrid from "@/components/Contact/ContactGrid";
import ContactForm from "@/components/Contact/Form";
import YoastNextSeo from "@/components/UI/YoastNextSeo";
import Image from "next/image";
import React from "react";

export default function ContactUsPage(props: any) {
  const { pageData } = props;

  return (
    <>
      <YoastNextSeo {...pageData.yoast_head_json} />
      <SimpleHero heading="Contact Us" subHeading=" " />
      <div className="my-2">
        <div className="max-w-site-full mx-auto">
          <ContactGrid contact_address={pageData.acf.contact_address} />
        </div>
      </div>
      <div className="max-w-site-full mx-auto">
        <div className="bg-white px-4 md:px-10">
          <div className="text-center mb-8">
            <h2 className="text-36px mb-5 font-isidorasans_semi_bold">
              How can we help?
            </h2>
            <p className="text-18px font-isidorasans_regular">
              Fill up the form and our team we’ll get back to you shortly.
            </p>
          </div>
          <ContactForm />
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
