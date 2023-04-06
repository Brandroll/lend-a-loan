import { motion } from "framer-motion";
import ClockIcon from "../UI/Icons/Clock";
import MailIcon from "../UI/Icons/Mail";
import PhoneIcon from "../UI/Icons/Phone";

const Box = ({ svgName, heading, content }: any) => {
  return (
    <div className="lg:hover:box cursor-pointer transition-all lg:hover:-translate-y-3 delay-200 rounded-xl lg:py-2 lg:hover:shadow-2xl text-dark lg:px-8">
      <div className="flex justify-center md:justify-start ">
        {svgName === "phone" && <PhoneIcon />}
        {svgName === "email" && <MailIcon />}
        {svgName === "clock" && <ClockIcon />}
      </div>

      <h4 className="text-22px my-4 font-isidorasans_semi_bold">
        <p>{heading}</p>
      </h4>
      <p className="text-15px  font-isidorasans_regular">{content}</p>
      <motion.button className="px-8  py-2 my-2 hover:bg-brand-blue hover:text-white border-2 border-brand-blue  rounded-full font-isidorasans_regular text-16px text-brand-blue">
        CTA
      </motion.button>
    </div>
  );
};
export default function Help() {
  return (
    <div className="bg-gray-bg py-8 lg:py-16 px-4 lg:px-8">
      <div className="max-w-site-full mx-auto">
        <h2 className="text-25px mb-8 font-isidorasans_semi_bold text-center">
          We’re Here to help
        </h2>
        <div className="grid md:grid-cols-3 gap-2 my-8">
          <Box
            svgName={"phone"}
            heading="Give us a call"
            content={`Would you  
            like to discuss your home loan with one of our brokers. Our brokers can help you with your enquiry 7 days a week between our working hours. `}
          />
          <Box
            svgName={"clock"}
            heading={`Book an appointment`}
            content={`Once we complete a preliminary assessment we then compare loan products and provide you with a credit proposal showing what lending product we considered and our recommendation.

`}
          />
          <Box
            svgName={"email"}
            heading={`Send an email`}
            content={`Once all of the your documents are provided to us. We will submit your application to the selected bank or lender. We will regularly update you on your application progress through to settlement.

`}
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
