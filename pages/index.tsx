import AboveFooter from "@/components/Common/AboveFooter";
import Testinominal from "@/components/Common/Testinominal";
import Info from "@/components/HomeLoan/Info";
import Pannel from "@/components/HomeLoan/Pannel";
import { HomePage } from "@/types";
import AlternateGrid from "@/components/Common/AlternateGrid";
import HomePageAdv from "@/components/HomePage/HomePageAdv";
import YoastNextSeo from "@/components/UI/YoastNextSeo";
import HomeLoanVideoHero from "@/components/HomeLoan/HomeLoanVideoHero";

interface Props {
  homePageData: HomePage;
}
export default function Home(props: Props) {
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
      <div className=" ">
        <div className="max-w-site-full mx-auto my-12 text-center">
          <Info {...homePageData.acf.header} />
          <Pannel />
        </div>
        <HomePageAdv {...homePageData.acf.comparison} />
        <div className="my-4 mb-8">
          <AlternateGrid content={homePageData.acf.content} />
        </div>

        <AboveFooter {...homePageData.acf.above_footer} />
      </div>
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
