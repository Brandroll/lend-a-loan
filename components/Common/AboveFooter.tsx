import React, { useEffect, useState } from "react";
import WPHTMLContent from "../UI/WPHTMLContent";

export default function AboveFooter({
  grid_1,
  grid_2,
  header,
}: {
  header: {
    header: string;
    info: string;
  };
  grid_1: { heading: string; info: string };
  grid_2: { heading: string; info: string };
}) {
  const [contentData, setContentData] = useState<
    { heading: string; info: string } | any
  >([grid_1, grid_2]);
  useEffect(() => {
    console.log(grid_1);
    setContentData([grid_1, grid_2]);
  }, [grid_1, grid_2]);
  return (
    <div className=" bg-gray-bg text-18px py-5 font-isidorasans_regular px-4">
      <div className="max-w-site-full mx-auto">
        <p className=" lg:text-center text-[23px] md:text-30px  my-4 font-isidorasans_semi_bold">
          {header.header ? header.header : ""}
        </p>

        <p
          className="lg:text-center text-15px lg:px-32 md:mt-4  md:mb-4  leading-8"
          dangerouslySetInnerHTML={{ __html: header.info }}
        />

        <div className="grid gap-4 md:grid-cols-2 mt-4 lg:mt-0  ">
          {contentData.map((grid: { heading: string; info: string }) => (
            <div className="text-15px" key={Math.random()}>
              <h4
                className="text-[23px] md:mb-2 font-isidorasans_semi_bold"
                dangerouslySetInnerHTML={{ __html: grid.heading }}
              />

              <div className="text-footer-link">
                <WPHTMLContent html={grid.info} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const Box = () => {
  return <></>;
};
