"use client";

import ServiceSlider from "@/components/ServiceSlider";
import Asteroid from "@/components/Asteroid";
import Galaxy from "@/components/Galaxy";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

function Services() {
  return (
    <main className="h-full py-36 flex items-center md:page-container max-md:px-3">
      <Galaxy />
      <div className="mx-auto container">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex flex-col xl:w-[30vw] xl:text-left mb-4 xl:mb-0 relative z-20">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden "
              className="mt-8"
            >
              Our Services <span className="text-amber-300">.</span>
            </motion.h2>
            <motion.p
              className="mb-4 max-w-[400px] mx-auto lg n:mx-0"
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
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Asteroid />
    </main>
  );
}

export default Services;
