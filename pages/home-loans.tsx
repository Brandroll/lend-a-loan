import AlternateGrid from "@/components/Common/AlternateGrid";
import Testinominal from "@/components/Common/Testinominal";
import Advantage from "@/components/HomeLoan/Advantage";
import Info from "@/components/HomeLoan/Info";
import Pannel from "@/components/HomeLoan/Pannel";
import React from "react";
import { HomePage } from "@/types";
import Help from "@/components/HomeLoan/Help";
import HomeLoanVideoHero from "@/components/HomeLoan/HomeLoanVideoHero";
import YoastNextSeo from "@/components/UI/YoastNextSeo";

interface Props {
  homePageData: HomePage;
}
export default function Homeloans(props: Props) {
  const { homePageData } = props;

  return (
    <>
      <YoastNextSeo {...homePageData.yoast_head_json} />

      <HomeLoanVideoHero
        heading={
          homePageData.acf.heading
            ? homePageData.acf.heading
            : homePageData.title.rendered
        }
        video={homePageData.acf.video}
      />
      <Testinominal />

      <div className="max-w-site-full mx-auto my-12   text-center">
        <Info />
        <Pannel />
      </div>
      <Advantage />
      <div className="my-12">
        <AlternateGrid content={homePageData.acf.content} />
      </div>
      <Help />
      <AlternateGrid content={homePageData.acf.content} />
    </>
  );
}

export const getStaticProps = async () => {
  const homepage_url = process.env.NEXT_WP_API_URL + `/custom-page/74`;

  const homePageData = await fetch(homepage_url).then((r) => r.json());

  return {
    props: {
      homePageData,
    },
  };
};
