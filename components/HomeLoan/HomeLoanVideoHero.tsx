import { motion } from "framer-motion";

export default function HomeLoanVideoHero() {
  return (
    <div className="  video-container border-b-8 border-brand-blue  ">
      <video autoPlay muted loop>
        <source
          src="http://lendaloan.au/wp-content/uploads/2022/06/aerial-birds-eye-view-of-homes-brisbane-queensla-2021-11-11-04-23-25-utc.mp4"
          type="video/mp4"
        />
      </video>
      <div className="caption flex flex-col justify-end md:block">
        <div className="md:cp-center px-4 md:text-left lg:text-center lg:px-0">
          <p className="text-24px  md:text-30px    font-isidorasans_semi_bold text-white">
            Start your home loan journey, with an expert lend a loan mortgage
            broker
          </p>
          <div className="hidden md:flex my-8 justify-center  ">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="px-8 hover:bg-brand-blue hover:text-white border-2 border-brand-blue py-3 rounded-l-full font-isidorasans_regular text-16px text-brand-blue"
            >
              Request a callback
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="px-8 border-2 border-brand-blue py-3 bg-brand-blue rounded-r-full font-isidorasans_regular text-16px text-white hover:scale-125 delay-200"
            >
              Book appointment
            </motion.button>
          </div>
        </div>
        <div className=" flex justify-center  md:hidden my-8  ">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-8 hover:bg-brand-blue hover:text-white border-2 border-brand-blue py-3 rounded-l-full font-isidorasans_regular text-16px text-brand-blue"
          >
            Request a callback
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-8 border-2 border-brand-blue py-3 bg-brand-blue rounded-r-full font-isidorasans_regular text-16px text-white hover:scale-125 delay-200"
          >
            Book appointment
          </motion.button>
        </div>
      </div>
    </div>
  );
}
