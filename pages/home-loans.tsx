import AlternateGrid from "@/components/Common/AlternateGrid";
import Testinominal from "@/components/Common/Testinominal";
import Advantage from "@/components/HomeLoan/Advantage";
import Info from "@/components/HomeLoan/Info";
import Pannel from "@/components/HomeLoan/Pannel";
import React from "react";
import { HomePage, Project, Service } from "@/types";
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

      <HomeLoanVideoHero />
      <Testinominal />

      <div className="max-w-site-full mx-auto mt-16 text-center">
        <Info />
        <Pannel />
      </div>
      <Advantage />
      <AlternateGrid content={homePageData.acf.content} />
      <Help />
      <AlternateGrid content={homePageData.acf.content} />
    </>
  );
}

export const getStaticProps = async () => {
  const homepage_url = process.env.NEXT_WP_API_URL + `/custom-page/71`;

  const homePageData = await fetch(homepage_url).then((r) => r.json());

  return {
    props: {
      homePageData,
    },
  };
};
