import Fade from "react-reveal/Fade";
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
  image: string;
}
export default function AlternateGrid({
  content,
}: {
  content: {
    information: {
      heading: string;
      info: string;
    };
    image: string;
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
  const t = `<svg  width="500" height="500" viewBox="0 0 1426 950" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

 <path d="M917.749 90.3549H520.251C475.166 90.3549 433.506 110.021 410.964 141.945L212.214 423.41C189.672 455.335 189.672 494.666 212.214 526.59L410.964 808.055C433.506 839.98 475.166 859.645 520.251 859.645H917.749C962.835 859.645 1004.49 839.98 1027.04 808.055L1225.79 526.59C1248.33 494.666 1248.33 455.335 1225.79 423.41L1027.04 141.945C1004.49 110.021 962.835 90.3549 917.749 90.3549Z" fill="#433292"/>
 <path d="M1077.06 6.23145H657.555C609.974 6.23145 566.007 30.1978 542.216 69.1043L332.462 412.127C308.672 451.034 308.672 498.967 332.462 537.873L542.216 880.896C566.007 919.803 609.974 943.769 657.555 943.769H1077.06C1124.65 943.769 1168.61 919.803 1192.4 880.896L1402.16 537.873C1425.95 498.967 1425.95 451.034 1402.16 412.127L1192.4 69.1043C1168.61 30.1978 1124.65 6.23145 1077.06 6.23145Z" fill="#BDBDBD"/>
  <rect x="-0.000976562" y="-13.3453" width="1629.88" height="963.345" fill="url(#pattern0)"/>
<g style="mix-blend-mode:multiply">
<path d="M519.579 139.673H237C204.95 139.673 175.334 156.817 159.308 184.648L18.0187 430.025C1.99375 457.856 1.99375 492.144 18.0187 519.975L159.308 765.352C175.334 793.184 204.95 810.327 237 810.327H519.579C551.63 810.327 581.246 793.184 597.272 765.352L738.561 519.975C754.586 492.144 754.586 457.856 738.561 430.025L597.272 184.648C581.246 156.817 551.63 139.673 519.579 139.673Z" fill="#61C0CD"/>
</g>  
 






</svg>
`;
  return (
    <section className="grid my-16 lg:my-16 alternate-grid lg:gap-16 px-4 max-w-site-full mx-auto ">
      {contentData.map((content: Content, i: number) => (
        <>
          <section className="grid lg:grid-cols-2 gap-4   ">
            <div
              className={`${
                calc(i) === "even" ? "lg:order-2 mt-4  lg:mt-0" : ""
              } flex justify-center items-center `}
            >
              {calc(i) === "even" ? (
                <Fade right>
                  <Image src={content.image} alt="" width={900} height={900} />
                </Fade>
              ) : (
                <Fade left>
                  <Image src={content.image} alt="" width={900} height={900} />
                </Fade>
              )}
            </div>
            <div
              className={`${
                calc(i) === "even" ? "md:order-1 lg:mr-12 " : "lg:ml-16"
              }  mt-8 lg:mt-0  flex`}
            >
              <div className="flex flex-col font-isidorasans_regular justify-center  ">
                <h4
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(content.information.heading),
                  }}
                  className="text-dark  text-28px lg:text-2xl font-isidorasans_semi_bold  font-medium md:mb-2"
                />
                <WPHTMLContent html={content.information.info} />
                <Link legacyBehavior href={"#"}>
                  <a className="flex transition-all hover:translate-x-3 delay-200 mb-4 hover:text-brand-blue items-center gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={0.5}
                      stroke="currentColor"
                      className="w-16 md:w-16 h-16 md:h-16  text-brand-blue"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <span className=" text-brand-blue font-isidorasans_semi_bold">
                      Learn more about service
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </section>
        </>
      ))}
    </section>
  );
}
