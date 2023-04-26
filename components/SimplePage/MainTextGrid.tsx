import WPHTMLContent from "../UI/WPHTMLContent";

const Section = ({ heading, info }: { heading: string; info: string }) => {
  return (
    <div>
      <h2
        className="text-24px font-isidorasans_semi_bold mb-4"
        dangerouslySetInnerHTML={{ __html: heading }}
      />
      <div className="font-isidorasans_regular">
        <WPHTMLContent html={info} />
      </div>
    </div>
  );
};
export default function MainTextGrid() {
  const data = [
    {
      heading: `Buying a home is a time to be excited,let our home loan experts do the hard work`,
      info: `Our Melbourne Home Loan Brokers service, makes it easy and stress-free to get the best interest rate on for you whether its your first home, second home loan or if you are looking for a development home loan.We’ll assist you in finding the right home loan for your requirement.  The Home Loan Specialist at Lend A Loan work for you and they are legally required to act in your best interest.  Your mortgage broker will always put you first to ensure that you get the best deal on your home loan.Our Melbourne Home Loan team can meet at your home, work or any place that suits you to discuss and discuss your home loan requirements.`,
    },
    {
      heading: `The advantage of using a mortgage broker for your home loan
          `,
      info: `Using our undestanding of your financial position, your objective, requirements and knowledge of the current market we review and discuss your current options and the most suitible lenders or banks for you. Once we narrow down our lenders we use our state of the art home loan comparison software to find a home loan product with best true interest rate then we provide your with three of the best lenders.
    
          From there you can further discuss home loans products and provide your with a quote and information of the home loans from there your can get further financial advice from a financial advisor or we can help in starting loan application process with the lender of your choice.`,
    },
  ];
  return (
    <div className="  mt-8  lg:px-12  ">
      <div className="max-w-site-full mx-auto">
        <section
          className={`grid px-4 lg:px-0 lg:grid-cols-${data.length} gap-8`}
        >
          {data.map((d) => (
            <Section {...d} />
          ))}
        </section>
      </div>
    </div>
  );
}
