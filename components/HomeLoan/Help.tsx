import { motion } from "framer-motion";
import ClockIcon from "../UI/Icons/Clock";
import MailIcon from "../UI/Icons/Mail";
import PhoneIcon from "../UI/Icons/Phone";
import { MapPin } from "../icons/map-pin";
import Link from "next/link";

const Box = ({ svgName, heading, content, cta, href }: any) => {
  return (
    <div
      className={`lg:hover:box my-2  cursor-pointer transition-all lg:hover:-translate-y-3 delay-200 lg:rounded-xl lg:py-2 lg:hover:shadow-2xl text-dark lg:px-8`}
    >
      <div className="flex mb-4 justify-center   ">
        {svgName === "phone" && <PhoneIcon />}
        {svgName === "email" && (
          <MapPin className="w-12 h-12 text-brand-blue" />
        )}
        {svgName === "clock" && <ClockIcon />}
      </div>

      <h4 className="text-22px mb-4 lg:my-4 font-isidorasans_semi_bold text-center  ">
        <p>{heading}</p>
      </h4>
      <p className="text-15px text-center  font-isidorasans_regular  mb-6 md:mb-0 sm:h-16 lg:h-32">
        {content}
      </p>
      <div className="flex justify-center lg:mt-4">
        {" "}
        <Link href={href}>
          <motion.button className="px-8 w-72 py-2  lg:my-2 hover:bg-brand-blue hover:text-white border-2 border-brand-blue  rounded-full font-isidorasans_regular text-16px text-brand-blue">
            {cta}
          </motion.button>
        </Link>
      </div>
    </div>
  );
};
export default function Help() {
  return (
    <div className="bg-gray-bg py-8 lg:py-12 lg:pb-6 px-4 lg:px-8">
      <div className="max-w-site-full mx-auto">
        <h2 className="text-25px mb-8 font-isidorasans_semi_bold text-center">
          We’re Here to help
        </h2>
        <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 lg:my-8">
          <Box
            svgName={"phone"}
            heading="Give us a call"
            href={`tel:1300 993 095`}
            cta="Give us a call "
            content={`Would you  
            like to discuss your home loan with one of our brokers. Our brokers can help you with your enquiry 7 days a week between our working hours. `}
          />
          <Box
            svgName={"clock"}
            heading={`Book an appointment`}
            cta="Book appointment"
            content={`Once we complete a preliminary assessment we then compare loan products and provide you with a credit proposal showing what lending product we considered and our recommendation.

`}
            href={`/book-consultation`}
          />
          <Box
            svgName={"email"}
            cta="Find a broker"
            heading={`Find a broker near you`}
            content={`Once all of the your documents are provided to us. We will submit your application to the selected bank or lender. We will regularly update you on your application progress through to settlement.

`}
            href={"/contact"}
          />
        </div>
        {/* <div className="  flex justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-8 py-3 hover:bg-brand-blue hover:text-white border-2 border-brand-blue  rounded-full font-isidorasans_regular text-16px text-brand-blue"
          >
            Request a callback
          </motion.button>
        </div> */}
      </div>
    </div>
  );
}
