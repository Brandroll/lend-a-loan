
const Section = ({ heading, content }: { heading: string; content: string }) => {
  return (
    <div>
      <div
        className="text-24px font-isidorasans_semi_bold mb-4"
        dangerouslySetInnerHTML={{ __html: heading }}
      />
      <div className="font-isidorasans_regular"
        dangerouslySetInnerHTML={{ __html: content }}
      >
      </div>
    </div>
  );
};
export default function MainTextGrid({ grid }: any) {
  return (
    <div className="mt-12 lg:px-12">
      <div className="max-w-site-full mx-auto">
        <section
          className={`grid px-4 lg:px-0 lg:grid-cols-${grid.length} gap-8`}
        >
          {grid.map((d: any) => (
            <Section {...d} />
          ))}
        </section>
      </div>
    </div>
  );
}
