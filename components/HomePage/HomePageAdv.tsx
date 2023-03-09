import WPHTMLContent from "../UI/WPHTMLContent";
import { motion } from "framer-motion";
const Section = ({ heading, info }: { heading: string; info: string }) => {
  return (
    <div>
      <h2
        className="text-24px text-center font-isidorasans_semi_bold mb-4"
        dangerouslySetInnerHTML={{ __html: heading }}
      />
      <div className="font-isidorasans_regular text-center">
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
    <div>
      <div className="border-brand-blue mb-4  adv-num flex justify-center items-center  text-brand-blue text-35px font-isidorasans_semi_bold border-2    rounded-full">
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
export default function HomePageAdv() {
  const data = [
    {
      heading: `Compare with a Finance and Mortgage Broker
      `,
      info: `Going through a Finance and Mortgage Broker for your loans and mortgages has many benefits. At Lend A Loan our brokers have access to many lenders and can compare loans that meet your requirements. Our brokers will explain through each products using simple and easy to understand language. 

      At Lend A Loan we are all about your needs and goals, ensuring we find a loan products that is the right for you. We are required by law to work in the best interest of our clients and only recommend products that are in our customers best interest. Which is why comparing with brokers is better than any comparison sites or going directly to the bank. 
      
      Finding a loan product with a Lend A Loan broker is simple and straight forward. Book an appointment today or request a callback and one of our Melbourne based Mortgage Brokers will be able to assist you with as simply as 1 2 3.  `,
    },
  ];
  const adv = [
    {
      num: 1,
      heading: "Fact-finding Interview",
      info: "One of the first steps we take is to learn about you and any other entity involved, your requirements and objectives in order to make sure we find a product that meets your requirements.",
    },
    {
      num: 2,

      heading: "Product Selection",
      info: "Once we complete a preliminary assessment we then compare loan products and provide you with a credit proposal showing what lending product we considered and our recommendation.",
    },
    {
      num: 3,

      heading: "Lodgement",
      info: "Once all of the your documents are provided to us. We will submit your application to the selected bank or lender. We will regularly update you on your application progress through to settlement.",
    },
    {
      num: 4,

      heading: "Product Selection",
      info: "Once your loan has settled your broker will contact you and explain all you need to know about your loan. We will regularly get in touch with you to review your loan and interest-rate.        ",
    },
  ];
  return (
    <div className="bg-gray-bg p-6 lg:p-12">
      <div className="max-w-site-full mx-auto">
        <section className={`grid lg:grid-cols-${data.length} gap-8`}>
          {data.map((d) => (
            <Section {...d} />
          ))}
        </section>
        <section className="grid md:grid-cols-4 md:my-16 md:gap-8">
          {adv.map((d) => (
            <Adv {...d} />
          ))}
        </section>

        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-4 md:px-8 hover:bg-brand-blue hover:text-white border-2 border-brand-blue py-3 rounded-l-full font-isidorasans_regular text-16px text-brand-blue"
          >
            Request a callback
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-4 md:px-8 border-2 border-brand-blue py-3 bg-brand-blue rounded-r-full font-isidorasans_regular text-16px text-white hover:scale-125 delay-200"
          >
            Book appointment
          </motion.button>
        </div>
      </div>
    </div>
  );
}
