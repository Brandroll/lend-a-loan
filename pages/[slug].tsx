import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { Service } from "@/types";
import dynamic from "next/dynamic";
import SimpleHero from "@/components/Common/SimpleHero";
import Testinominal from "@/components/Common/Testinominal";
import Info from "@/components/HomeLoan/Info";
import MainTextGrid from "@/components/SimplePage/MainTextGrid";
import AlternateGrid from "@/components/Common/AlternateGrid";
import Help from "@/components/HomeLoan/Help";

interface Props {
  service: Service;
}
const YoastNextSeo = dynamic(() => import("@/components/UI/YoastNextSeo"));

export default function ServicePage(props: Props) {
  const { service } = props;
  if (!service) {
    return null;
  }
  return (
    <>
      <YoastNextSeo slug={service.slug} {...service.yoast_head_json} />
      <SimpleHero heading={service.title.rendered} subHeading="" />
      <Testinominal />
      <div className="max-w-site-full mx-auto    text-center">
        <Info />
      </div>
      <MainTextGrid />
      <div className="-mt-8 ">
        <AlternateGrid content={service.acf.content} />
      </div>
      <Help />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const { slug } = params!;
  const url = process.env.NEXT_WP_API_URL + `/service?slug=${slug}`;

  const services = await fetch(url).then((r) => r.json());
  console.log({ url });
  const t = services.length > 0 ? services[0] : null;

  return {
    props: {
      service: t,
    },
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  const services = await fetch(process.env.NEXT_WP_API_URL + "/service").then(
    (r) => r.json()
  );
  const services_path = services.map((service: any) => {
    return {
      params: { slug: service.slug.toString() },
    };
  });

  const paths = services_path;
  return {
    paths,
    fallback: "blocking",
  };
};
