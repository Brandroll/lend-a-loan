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
export default function Homeloans(props: any) {
  const { homePageData } = props;

  return (
    <>
      {/* <YoastNextSeo {...homePageData.yoast_head_json} /> */}
     
      <HomeLoanVideoHero
        heading={``}
        video={homePageData?.acf?.video || homePageData?.header?.video}
      />
       <Testinominal />
      <div className="max-w-site-full mx-auto lg:my-12   text-center">
        <Info />
        <Pannel />
      </div>
      <Advantage />
      <div className="my-8 md:my-10">
        <AlternateGrid content={homePageData?.services?.content} />
      </div>
      <Help />
      {/* <div className="my-9 mb-6 md:my-12">
        <AlternateGrid content={homePageData?.advanceServices?.content} />
      </div> */}
    </>
  );
}

