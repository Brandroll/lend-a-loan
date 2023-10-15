export default function SimpleHero({
  heading,
  subHeading,
}: {
  heading: string;
  subHeading: string;
}) {
  console.log("🚀 ~ file: SimpleHero.tsx:8 ~ heading:", heading)
  return (
    <div
      className=" py-16 lg:py-20 px-4 lg:px-12"
      style={{ backgroundColor: "#171719" }}
    >
      <div className="max-w-site-full mx-auto">
        <h1 className="text-36px text-center text-brand-blue font-isidorasans_semi_bold">
          {heading}
        </h1>
      </div>
    </div>
  );
}
