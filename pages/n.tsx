import React from "react";
import { HomePage } from "@/types";

import AlternateGrid12 from "@/components/Common/AlternateGrid12";
import SimpleHero from "@/components/Common/SimpleHero";
import Advantage from "@/components/HomeLoan/Advantage";
import AlternateGrid from "@/components/Common/AlternateGrid";
import MainTextGrid from "@/components/SimplePage/MainTextGrid";
import Help from "@/components/HomeLoan/Help";
import Testinominal from "@/components/Common/Testinominal";
import Info from "@/components/HomeLoan/Info";
import Pannel from "@/components/HomeLoan/Pannel";

interface Props {
  homePageData: HomePage;
}
export default function SinglePage(props: Props) {
  const { homePageData } = props;

  return (
    <>
      <SimpleHero heading="Commercial & Property Finance " subHeading=" " />
      <Testinominal />
      <div className="max-w-site-full mx-auto mt-16 text-center">
        <Info />
        {/* <Pannel /> */}
      </div>
      <MainTextGrid />
      <AlternateGrid content={homePageData.acf.content} />
      <Help />
    </>
  );
}

export const getStaticProps = async () => {
  const homepage_url = process.env.NEXT_WP_API_URL + `/custom-page/671`;

  const homePageData = await fetch(homepage_url).then((r) => r.json());

  return {
    props: {
      homePageData,
    },
  };
};
