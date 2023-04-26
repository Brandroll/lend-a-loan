import WPHTMLContent from "../UI/WPHTMLContent";
import { motion } from "framer-motion";
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

const Adv = ({
  num,
  heading,
  info,
}: {
  num: Number;
  heading: string;
  info: string;
}) => {
  return (
    <div className="flex md:block my-4  flex-col items-center justify-center">
      <div className="border-brand-blue  w-12 h-12 mb-4 lg:mb-4 md:mb-0  flex  justify-center items-center text-24px adv-num   text-brand-blue  font-isidorasans_semi_bold border-2    rounded-full">
        {num.toString()}
      </div>
      <h2
        className="text-22px font-isidorasans_semi_bold mb-4"
        dangerouslySetInnerHTML={{ __html: heading }}
      />
      <div className="font-isidorasans_regular">
        <WPHTMLContent html={info} />
      </div>
    </div>
  );
};
export default function Advantage() {
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
  const adv = [
    {
      num: 1,
      heading: "Fact-finding Interview",
      info: `One of the first steps we take is to learn about you and any other entity involved, your requirements and objectives in order to make sure we find a product that meets your requirements.

      `,
    },
    {
      num: 2,

      heading: "Product Selection",
      info: `Once we complete a preliminary assessment we then compare loan products and provide you with a credit proposal showing what lending product we considered and our recommendation.

      `,
    },
    {
      num: 3,

      heading: "Lodgement",
      info: `Once all of the your documents are provided to us. We will submit your application to the selected bank or lender. We will regularly update you on your application progress through to settlement.

      `,
    },
    {
      num: 4,

      heading: "Post Settlement",
      info: `Once your loan has settled your broker will contact you and explain all you need to know about your loan. We will regularly get in touch with you to review your loan and interest-rate.

      `,
    },
  ];
  return (
    <div className="bg-gray-bg p-4   py-8 md:py-12">
      <div className="max-w-site-full mx-auto">
        <section className={`grid lg:grid-cols-1 gap-8`}>
          {data.map((d) => (
            <Section {...d} />
          ))}
        </section>
        <section className="grid md:grid-cols-2 lg:grid-cols-4 lg:my-16 md:gap-8">
          {adv.map((d) => (
            <Adv {...d} />
          ))}
        </section>

        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="md:px-8 px-4 hover:bg-brand-blue hover:text-white border-2 border-brand-blue py-3 rounded-l-full font-isidorasans_regular text-16px text-brand-blue"
          >
            Request a callback
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="md:px-8 px-4 border-2 border-brand-blue py-3 bg-brand-blue rounded-r-full font-isidorasans_regular text-16px text-white hover:scale-125 delay-200"
          >
            Book appointment
          </motion.button>
        </div>
      </div>
    </div>
  );
}
