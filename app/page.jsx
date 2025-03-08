"use client";

// import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { useMediaQuery } from "react-responsive";
import TopLeftImg from "@/components/TopLeftImg";
import ParticlesContainer from "@/components/ParticlesContainer";
import ProjectsBtn from "@/components/ProjectsBtn";

export default function Home() {
  const isMobile = useMediaQuery({ query: "(max-width:767px)" });
  const btnMotionDuration = isMobile ? 1.1 : 1.4;
  const textMotionDuration = isMobile ? 1 : 1.3;
  const headerMotionDuration = isMobile ? 0.9 : 1.2;

  return (
    <main className="h-full bg-gradient-to-l from-stone-800 to-black">
      <TopLeftImg />
        <div className="w-full h-full">
          <div className="text-center flex flex-col justify-center xl:text-left h-full page-container overflow-y-auto mx-auto max-md:pb-16">
            <div className="lg:overflow-y-auto h-full w-full max-lg:flex max-lg:flex-col max-lg:justify-center">
              <motion.h1
                variants={fadeIn("down", headerMotionDuration)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="drop-shadow-2xl relative z-20"
              >
                Crafting{" "}
                <span className="text-amber-300">
                  Digital
                  <br />
                  Dreams{" "}
                </span>
                into Reality
              </motion.h1>
              <motion.p
                className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
                variants={fadeIn("down", textMotionDuration)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                Welcome to the Moon Studio, where we launch beautiful, responsive
                websites that drive measurable results. Join us on a journey to
                elevate your online presence to new heights.
              </motion.p>
              <motion.div
                variants={fadeIn("down", btnMotionDuration)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="flex md:mb-20 xl:mb-[85px]"
              >
                <ProjectsBtn />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="w-[900px] h-full absolute right-[-10%] bottom-0">
          <div className="xl:bg-[url('/moon_dust.png')] xl:bg-contain top-60 -left-[40%] xl:bg-bottom xl:bg-no-repeat w-full h-full absolute -translate-z-10 mix-blend-luminosity opacity-60"></div>
          <div className="xl:bg-[url('/home-bg.png')] xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute z-0"></div>
          <ParticlesContainer />
        </div>
    </main>
  );
}
