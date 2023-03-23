import React from "react";
const Pagragraph = ({ info }: { info: string }) => {
  return (
    <>
      <p
        dangerouslySetInnerHTML={{ __html: info }}
        className="font-isidorasans_regular my-4 text-13px lg:text-15px px-4 lg:px-95px leading-7"
      />
    </>
  );
};
export default function Info({
  heading,
  content,
}: {
  heading?: string;
  content?: string;
}) {
  return (
    <div>
      <h2 className="my-4 mt-6 text-24px font-isidorasans_semi_bold">
        {heading ? heading : ""}
      </h2>

      <Pagragraph info={content ? content : ""} />
    </div>
  );
}
