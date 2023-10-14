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
      <div className="md:-mt-8 mb-8 md:mb-0">
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

  const service = services.length > 0 ? services[0] : null;
  if (service) {
    return {
      props: {
        service: service,
        advanceService: null,
      },
    };
  } else {
    const advUrl =
      process.env.NEXT_WP_API_URL + `/advance_services?slug=${slug}`;
    const Advservices = await fetch(advUrl).then((r) => r.json());
    const advanceService = Advservices.length > 0 ? Advservices[0] : null;
    if (advanceService) {
      return {
        props: {
          service: null,
          advanceService: advanceService,
        },
      };
    } else {
      return {
        props: {},
        notFound: true,
      };
    }
  }
};
export const getStaticPaths: GetStaticPaths = async () => {
  // advance_services
  const services = await fetch(process.env.NEXT_WP_API_URL + "/service").then(
    (r) => r.json()
  );
  const advanceServices = await fetch(
    process.env.NEXT_WP_API_URL + "/advance_services"
  ).then((r) => r.json());
  const services_path = services.map((service: any) => {
    return {
      params: { slug: service.slug.toString() },
    };
  });
  const advance_services_path = advanceServices.map((adv: any) => {
    return {
      params: { slug: adv.slug.toString() },
    };
  });

  const paths = services_path.concat(advance_services_path);
  return {
    paths,
    fallback: "blocking",
  };
};
