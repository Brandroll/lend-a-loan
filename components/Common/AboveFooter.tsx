import React, { useEffect, useState } from "react";
import WPHTMLContent from "../UI/WPHTMLContent";
interface Content {
  heading: string;
  content: string;
}
export default function AboveFooter({ content }: { content: Content[] }) {
  const [contentData, setContentData] = useState<Content | any>(content);
  useEffect(() => {
    setContentData(contentData);
  }, [content]);
  return (
    <div className=" bg-gray-bg text-18px py-5 font-isidorasans_regular px-4">
      <div className="max-w-site-full mx-auto">
        <p className=" text-center text-30px md:mt-16 md:pt-12 font-isidorasans_semi_bold">
          With Our Melbourne Mortgage Brokers, it is possible!
        </p>

        <p className="text-center text-15px md:px-32 my-4 md:my-8 leading-8">
          Get the best terms on your loans from top lenders with Melbourne
          leading mortgage broking agency. We study your financial situation and
          advise you of the most competitive loan for you. As a bridge between
          you and the top lenders, we compare their interest rates and other
          specifics to get the deal thats right for you.
        </p>

        <div className="grid gap-4 md:grid-cols-2 md:px-16">
          {contentData.map((grid: Content) => (
            <div className="text-15px" key={Math.random()}>
              <h4
                className="text-24px mb-4 font-isidorasans_semi_bold"
                dangerouslySetInnerHTML={{ __html: grid.heading }}
              />

              <div className="text-footer-link">
                <WPHTMLContent html={grid.content} />
              </div>
            </div>
          ))}

          {/* <div className="text-15px">
            <h4 className="text-24px mb-4 font-isidorasans_semi_bold">
              The advantage of using a mortgage brokers
            </h4>

            <div className="text-footer-link">
              <p className="my-4">
                Whether you are refinancing your existing property or purchasing
                a new home, you are making a significant financial decision. We
                have seen many times, home buyers visit their local bank branch
                and accept the first home loan option that the loan manager
                offers them.
              </p>
              <p className="my-4">
                At Lend a Loan – Mortgage Broker Melbourne, we can allowing you
                to explore all your options and have a choice in choosing a loan
                product that suits your individual need. Our experienced
                mortgage and finance brokers will listen to your needs and
                objectives and ensure to help you choose the perfect lender and
                the ideal lending product.
              </p>
            </div>
          </div> */}
        </div>

        <div className="grid md:grid-cols-3 py-8 md:pb-0 md:pt-16 md:px-16">
          <Box />
          <Box />
          <Box />
        </div>
      </div>
    </div>
  );
}

const Box = () => {
  return <></>;
};
