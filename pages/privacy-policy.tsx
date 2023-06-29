import SimpleHero from "@/components/Common/SimpleHero";
import WPHTMLContent from "@/components/UI/WPHTMLContent";
import YoastNextSeo from "@/components/UI/YoastNextSeo";
import React from "react";

export default function ProvacyPolicyPage(props: any) {
  const { data } = props;
  return (
    <div>
      <YoastNextSeo {...data.yoast_head_json} />
      <SimpleHero
        heading={data.title.rendered}
        subHeading="We are more than just a broker."
      />
      <div className="max-w-site-full mx-auto lg:my-12  font-isidorasans_regular ">
        <WPHTMLContent html={data.content.rendered} />
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const url = process.env.NEXT_PUBLIC_WP_API_URL + `/custom-page/227`;
  const res = await fetch(url).then((r) => r.json());
  return {
    props: {
      data: res,
    },
  };
};
