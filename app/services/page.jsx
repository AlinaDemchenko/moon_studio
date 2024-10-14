"use client";

import ServiceSlider from "@/components/ServiceSlider";
import Asteroid from "@/components/Asteroid";
import Galaxy from "@/components/Galaxy";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

function Services() {
  return (
    <main className="h-full py-28 md:py-32 flex overflow-hidden pb-16 items-center md:page-container max-md:px-3">
      <Galaxy />
       <div className="overflow-x-hidden h-full mx-auto flex flex-col max-xl:justify-center xl:pt-20">
        <div className="mx-auto container overflow-y-scroll h-fit">
          <div className="flex flex-col xl:flex-row gap-x-8">
            <div className="text-center flex flex-col xl:w-[30vw] xl:text-left mb-4 xl:mb-0">
              <motion.h1
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden "
                className="secondary-title mt-8"
              >
                Our Services <span className="text-amber-300">.</span>
              </motion.h1>
              <motion.p
                className="mb-4 max-w-[400px] mx-auto xl:mx-0"
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden "
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </motion.p>
            </div>
            <motion.div
              className="w-full xl:max-w-[60%]"
              variants={fadeIn("down ", 0.6 )}
              initial="hidden"
              animate="show"
              exit="hidden "
            >
              <ServiceSlider className="relative z-20"/>
            </motion.div>
          </div>
        </div>
      </div>
      <Asteroid />
    </main>
  );
}

export default Services;
