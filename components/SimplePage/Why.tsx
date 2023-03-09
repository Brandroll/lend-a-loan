import Image from "next/image";
import React from "react";

export default function Why() {
  return (
    <div className="bg-gray-bg px-4 md:px-16 py-16">
      <div className="max-w-site-full mx-auto">
        <p className="text-25px md:text-40px text-center font-isidorasans_semi_bold">
          Why work with loans direct?
        </p>

        <div className="grid md:grid-cols-4 gap-6 text-dark font-isidorasans_semi_bold my-10  ">
          <Box />
          <Box />
          <Box />
          <Box />
        </div>
      </div>
    </div>
  );
}

const Box = () => {
  return (
    <div className=" ">
      <div className=" flex justify-center">
        <Image
          src="https://lendaloan.au/wp-content/uploads/2022/03/hl-icon-1-1.png"
          width={100}
          height={100}
          alt="why"
        />
      </div>

      <div className="text-20px md:text-24px px-16 md:px-8 text-center">
        We have a more than 90% Loan Approval Rate
      </div>
    </div>
  );
};
