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
import { GET_SERVICE } from "@/config/queries";
import Head from "next/head";
import parse from "html-react-parser";

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
      <Head>
        <title>{singleService.title}</title>
        {fullHead}
      </Head>
      <SimpleHero heading={singleService.title} subHeading="" />
      <Testinominal />
      <div className="max-w-site-full mx-auto text-center">
        <Info />
      </div>
      <MainTextGrid grid={singleService?.services?.grid}/>
      <div className="mb-8 md:mb-0">
        <AlternateGrid content={singleService?.services?.content} />
      </div>
      <Help /> 
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

  const singleService = response?.data.service;
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
