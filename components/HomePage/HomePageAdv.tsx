import Link from "next/link";
import WPHTMLContent from "../UI/WPHTMLContent";
import { motion } from "framer-motion";
import { useModalAction } from "../UI/modal/modal.context";
const Section = ({ heading, info }: { heading: string; info: string }) => {
  return (
    <div>
      <div
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

export default function HomePageAdv({
  heading,
  info,
}: {
  heading?: string;
  info?: string;
}) {
  const { openModal } = useModalAction();
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
          <Section heading={heading ? heading : ""} info={info ? info : ""} />
        </section>
        <section className="grid md:grid-cols-2 lg:grid-cols-4 py-4 lg:py-0   md:gap-8">
          {adv.map((d) => (
            <Adv {...d} />
          ))}
        </section>

        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              openModal("CONTACT_FORM");
            }}
            className="md:px-8 px-4 hover:bg-brand-blue hover:text-white border-2 border-brand-blue py-3 rounded-l-full font-isidorasans_regular text-16px text-brand-blue"
          >
            Request a callback
          </motion.button>
          <Link href={"/book-consultation"}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="md:px-8 px-4 border-2 border-brand-blue py-3 bg-brand-blue rounded-r-full font-isidorasans_regular text-16px text-white hover:scale-125 delay-200"
            >
              Book appointment
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}
