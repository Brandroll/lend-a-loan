const Pagragraph = ({ info }: { info: string }) => {
  return (
    <>
      <div
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
    <>
      {heading && (
        <div className="my-6 mt-6 text-24px font-isidorasans_semi_bold">
          <div className="my-6 mt-6 text-24px font-isidorasans_semi_bold" dangerouslySetInnerHTML={{ __html: heading }}></div>
        </div>
      )}
      {content && <Pagragraph info={content ? content : ""} />}
    </>
  );
}
