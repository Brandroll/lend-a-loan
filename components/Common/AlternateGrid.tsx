import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";
import WPHTMLContent from "../UI/WPHTMLContent";
import { useEffect, useState } from "react";
import Link from "next/link";
interface Content {
  information: {
    heading: string;
    info: string;
  };
  image:{
    mediaItemUrl: string;
  }
  cta: {
    label: string;
    value: string;
  };
}
export default function AlternateGrid({
  content,
}: {
  content: {
    information: {
      heading: string;
      info: string;
    };
    image:{
      mediaItemUrl: string;
    }
    cta?: {
      label: string;
      value: string;
    };
  }[];
}) {
  const [contentData, setContentData] = useState<Content | any>([]);
  useEffect(() => {
    setContentData(content);
  }, [content]);
  function oddOrEven(num: number) {
    if (num % 2 == 0) return "even";
    return "odd";
  }
  const calc = (i: number) => {
    return oddOrEven(i + 1);
  };
  if (!content) {
    return null;
  }

  return (
    <section className="grid lg:mt-8 mt-10 md:my-10 alternate-grid md:gap-4 lg:gap-8 px-4   max-w-site-full mx-auto ">
      {contentData.map((content: Content, i: number) => (
        <>
          <section className="grid lg:grid-cols-2 lg:gap-4  my-4 ">
            <div
              className={`${
                calc(i) === "even"
                  ? "lg:order-2 mt-4  lg:mt-0 md:justify-center lg:justify-end"
                  : "md:justify-center lg:justify-start"
              }  flex  items-center   `}
            >
              <Image
                className="  lg:rounded-tl-[128px] lg:rounded-br-[128px] lg:shadow-2xl "
                src={content?.image?.mediaItemUrl}
                alt=""
                width={1000}
                height={900}
              />
            </div>

            <div
              className={`${
                calc(i) === "even" ? "md:order-1 lg:mr-12 " : "lg:ml-16"
              }  mt-8 lg:mt-0  flex`}
            >
              <div className="flex flex-col font-isidorasans_regular justify-center -mb-4 lg:mb-0 ">
                <h4
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(content.information.heading),
                  }}
                  className="text-dark  text-28px lg:text-2xl font-isidorasans_semi_bold  font-medium  "
                />
                <WPHTMLContent html={content.information.info} />
                {content.cta && (
                  <Link legacyBehavior href={content.cta.value} className="">
                    <a className="flex md:my-[30px]     lg:-mt-8 transition-all hover:translate-x-3 delay-200   hover:text-brand-blue items-center gap-4">
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
                          d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <span className=" text-brand-blue font-isidorasans_semi_bold">
                        {content.cta.label}
                      </span>
                    </a>
                  </Link>
                )}
              </div>
            </div>
          </section>
        </>
      ))}
    </section>
  );
}
