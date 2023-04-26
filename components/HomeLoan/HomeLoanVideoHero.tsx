import { motion } from "framer-motion";
import SimpleHero from "../Common/SimpleHero";
interface Props {
  heading: string;
  video?: string;
}
export default function HomeLoanVideoHero(props: Props) {
  if (props.video) {
    return (
      <div className="  video-container border-b-8 border-brand-blue  ">
        <video autoPlay muted loop>
          <source src={props.video} type="video/mp4" />
        </video>
        <div className="caption flex flex-col justify-end md:block">
          <div className="valign md:cp-center px-4 md:text-left lg:text-center lg:px-0">
            <p
              className="text-24px  md:text-30px   text-center font-isidorasans_semi_bold text-white"
              dangerouslySetInnerHTML={{ __html: props.heading }}
            />

            <div className="hidden   md:flex my-8 justify-center  ">
              {/* <motion.button
                whileHover={{ scale: 1.1 }}
                className="px-8 hover:bg-brand-blue hover:text-white border-2 border-brand-blue py-3 rounded-l-full font-isidorasans_regular text-16px text-brand-blue"
              >
                Request a callback
              </motion.button> */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="md:px-8 px-8 border-2 border-brand-blue py-3 bg-brand-blue rounded-full font-isidorasans_regular text-16px text-white hover:scale-125 delay-200"
              >
                Book Appointment
              </motion.button>
            </div>
          </div>
          <div className=" flex here justify-center  md:hidden my-8  ">
            {/* <motion.button
              whileHover={{ scale: 1.1 }}
              className="md:px-8 px-2 hover:bg-brand-blue hover:text-white border-2 border-brand-blue py-3 rounded-l-full font-isidorasans_regular text-16px text-brand-blue"
            >
              Request a callback
            </motion.button> */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="md:px-8 px-8 border-2 border-brand-blue py-3 bg-brand-blue rounded-full font-isidorasans_regular text-16px text-white hover:scale-125 delay-200"
            >
              Book Appointment
            </motion.button>
          </div>
        </div>
      </div>
    );
  }
  return <SimpleHero heading={props.heading} subHeading="" />;
}
