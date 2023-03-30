import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";

import calculators from "../../seed/calculators";
export default function SingleCalc(props: any) {
  return (
    <div>
      <div className="max-w-site-full mx-auto">
        <div className="mt-8 px-5 p-1 text-brand-blue md:mt-32 font-isidorasans_semi_bold flex items-center gap-4 text-20px cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={0.5}
            stroke="currentColor"
            className="w-12 h-12 text-brand-blue"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>{" "}
          <Link href={"/calculator"}>Back to all calculators</Link>
        </div>
        <div className="my-8 px-5 md:px-0">
          <section className="grid lg:grid-cols-12">
            <section className="col-span-9">
              <iframe
                className="w-full "
                height={1000}
                src={props.calculators.url}
              ></iframe>
            </section>
            <section className="max-w-site-full mx-auto mt-12 md:col-span-3  ">
              <div className="py-8 px-8 rounded-md bg-blue-800 ">
                <p className="font-isidorasans_semi_bold text-3xl mb-4 text-brand-blue">
                  Need help finding the right loan?
                </p>
                <p className="text-white font-isidorasans_semi_bold">
                  <p className="text-15px "> Phone us on 1300 993 095</p>
                  <p className="text-15px font-isidorasans_medium">
                    Our team are happy to help put you in touch with a broker
                    local to your area.
                  </p>
                  <p className=" mt-4 ">
                    Online enquiry{" "}
                    <p className="font-isidorasans_regular">
                      Complete our online form and we’ll give you a call to
                      connect you with one of our brokers .
                    </p>{" "}
                  </p>
                </p>

                <Link href="/contact">
                  <div className="flex gap-2 mt-2 font-isidorasans_semi_bold text-white items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={0.5}
                      stroke="currentColor"
                      className="w-12 md:w-12 h-12 md:h-12  text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Get in touch
                  </div>
                </Link>
              </div>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const { slug } = params!;
  const calc = calculators.find((t) => t.slug === slug);

  return {
    props: {
      calculators: calc,
    },
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  const services_path = calculators.map((service: any) => {
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
