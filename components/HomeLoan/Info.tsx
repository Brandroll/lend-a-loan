import React from "react";
const Pagragraph = ({ info }: { info: string }) => {
  return (
    <>
      <p className="font-isidorasans_regular my-4 text-13px lg:text-15px px-4 lg:px-95px leading-7">
        {info}
      </p>
    </>
  );
};
export default function Info() {
  const content = [
    `Whether you are someone who wants to own a home or you own a home and want to own lots of homes, maybe even a business owner looking to expand your business or buy your first commercial property, no matter what your goal is. You can rest assured that we at lend a loan will make it our goal to find solutions for you to achieve yours. `,
    `Are you ready to take the next step in achieving your goal?

  `,
  ];
  return (
    <div>
      <h2 className="my-4 mt-6 text-24px font-isidorasans_semi_bold">
        Let us find you right loan
      </h2>
      {content.map((data) => (
        <Pagragraph info={data} />
      ))}
    </div>
  );
}
