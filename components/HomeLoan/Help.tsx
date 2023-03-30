import { motion } from "framer-motion";
import ClockIcon from "../UI/Icons/Clock";
import MailIcon from "../UI/Icons/Mail";
import PhoneIcon from "../UI/Icons/Phone";

const Box = ({ svgName, heading, content }: any) => {
  const svgs = [
    {
      name: "phone",
      html: `     <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  className="w-12 h-12 text-brand-blue"
>
  <path
    fillRule="evenodd"
    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
    clipRule="evenodd"
  />
</svg>`,
    },
    {
      name: "clock",
      html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-brand-blue">
      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
    </svg>
    `,
    },
    {
      name: "mail",
      html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-brand-blue">
      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
    </svg>
    `,
    },
  ];
  return (
    <div className="hover:box transition-all hover:-translate-y-3 delay-200 rounded-xl lg:py-8 hover:shadow-2xl text-dark lg:px-8">
      {svgName === "phone" && <PhoneIcon />}
      {svgName === "email" && <MailIcon />}
      {svgName === "clock" && <ClockIcon />}
      <h4 className="text-22px my-4 font-isidorasans_semi_bold">
        <p>{heading}</p>
      </h4>
      <p className="text-15px  font-isidorasans_regular">{content}</p>
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
            content={`Would you like to discuss your home loan with one of our brokers. Our brokers can help you with your enquiry 7 days a week between our working hours. `}
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
        <div className="mt-16 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-8 py-3 hover:bg-brand-blue hover:text-white border-2 border-brand-blue  rounded-full font-isidorasans_regular text-16px text-brand-blue"
          >
            Request a callback
          </motion.button>
        </div>
      </div>
    </div>
  );
}
