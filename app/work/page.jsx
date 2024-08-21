"use client";

import WorkSlider from "@/components/WorkSlider";
import Asteroid from "@/components/Asteroid";
import Galaxy from "@/components/Galaxy";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

function Work() {
  return (
    <main className="h-full py-36 flex overflow-hidden pb-16 items-center md:page-container max-md:px-3">
      <Galaxy />
       <div className="overflow-x-hidden h-full mx-auto">
        <div className="mx-auto container overflow-y-scroll">
          <div className="flex flex-col xl:flex-row gap-x-8 md:pb-5 xl:pb-0">
            <div className="text-center flex flex-col xl:w-[30vw] xl:text-left mb-4 xl:mb-0">
              <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden "
                className="xl:mt-12"
              >
                Our Works  <span className="text-amber-300">.</span>
              </motion.h2>
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
              <WorkSlider  className="relative z-20"/>
            </motion.div>
          </div>
        </div>
      </div>
      <Asteroid />
    </main>
  );
}

export default Work; 