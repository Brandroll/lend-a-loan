import { GetStaticPaths } from "next";
import { Service } from "@/types";
// import dynamic from "next/dynamic";
import SimpleHero from "@/components/Common/SimpleHero";
import Testinominal from "@/components/Common/Testinominal";
import Info from "@/components/HomeLoan/Info";
import MainTextGrid from "@/components/SimplePage/MainTextGrid";
import AlternateGrid from "@/components/Common/AlternateGrid";
import Help from "@/components/HomeLoan/Help";
import apolloClient from "@/config/client";
import { GET_SERVICE, advanceService } from "@/config/queries";
import Head from "next/head";
import parse from "html-react-parser";
import Homeloans from "./home-loans";
import HomeLoanVideoHero from "@/components/HomeLoan/HomeLoanVideoHero";
import TopGrid from "@/components/Content/Topgrid";

interface Props {
  service: Service;
}
// const YoastNextSeo = dynamic(() => import("@/components/UI/YoastNextSeo"));

export default function ServicePage(props: any) {
  const { service, singleService } = props;


  if (!singleService) {
    return null;
  }
  const fullHead = parse(singleService?.seo?.fullHead);

  return (
    <>
      {
        singleService?.uri?.includes("advance_services") ? <Homeloans homePageData={singleService} /> :
          <>
            <Head>
              <title>{singleService.title}</title>
              {fullHead}
            </Head>
            {/* <SimpleHero heading={singleService.title} subHeading="" /> */}
            <HomeLoanVideoHero
              heading={singleService?.header?.heading}
              video={singleService?.acf?.video || singleService?.header?.video}
            />
             <Testinominal />
             <TopGrid grid={singleService?.services?.topSection?.grid} />
             <div className="mt-12">
             <Help  />
             </div>
            {/* <div className="max-w-site-full mx-auto text-center">
              <Info />
            </div> */}
            {/* <MainTextGrid grid={singleService?.services?.grid} /> */}            
           
            <div className="mb-8 md:mb-0">
              <AlternateGrid content={singleService?.services.topSection?.content} />
            </div>
            
            {/* <TopGrid grid={singleService?.services.bottomSection?.grid} /> */}
            {/* <div className="mb-8 md:mb-0">
              <AlternateGrid content={singleService?.services.bottomSection?.content} />
            </div> */}


          </>
      }
    </>
  );
}




export async function getStaticProps({ params }: any) {
  const slug = params.slug
  const response = await apolloClient.query({
    query: GET_SERVICE,
    variables: {
      id: slug,
    },
  });

  const advanceServicesResponse = await apolloClient.query({
    query: advanceService,
    variables: {
      id: slug,
    },
  });

  const singleService = response?.data.service;
  const singleAdvanceService = advanceServicesResponse?.data.advanceService;
  if (singleAdvanceService?.uri?.includes("advance_services")) {
    return {
      props: {
        singleService: singleAdvanceService,
      },
    };
  }

  return {
    props: {
      singleService,
    },
  };
}


export const getStaticPaths: GetStaticPaths = async () => {
  const paths: any = [];
  return {
    paths,
    fallback: 'blocking',
  };
}
