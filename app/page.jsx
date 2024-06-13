"use client";

// import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import ParticlesContainer from "@/components/ParticlesContainer";
import ProjectsBtn from "@/components/ProjectsBtn";
import { useMediaQuery } from "react-responsive";

export default function Home() {
  const isMobile = useMediaQuery({ query: '(max-width:767px)' })
  const btnMotionDuration = isMobile ? 1.1 : 1.4;
  const textMotionDuration = isMobile ? 1 : 1.3;
  const headerMotionDuration = isMobile ? 0.9 : 1.2;

  return (
    <main className="h-full xl:pl-[150px]">
      <div className="w-full h-full bg-gradient-to-l from-stone-800 to-black">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn("down", headerMotionDuration)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Crafting <span className="text-amber-300 z-50">Digital</span> <br />
            <span className="text-amber-300  z-50">Dreams</span> into Reality
          </motion.h1>
          <motion.p
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
            variants={fadeIn("down", textMotionDuration)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Welcome to the MoonStudio, where we are crafting beautiful,
            responsive websites that drive measurable results. Let&apos;s embark on a journey to elevate
            your online presence together.
          </motion.p>
          <motion.div
            variants={fadeIn("down", btnMotionDuration)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="xl:opacity-60 flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[900px] h-full absolute right-[-10%] bottom-0">
        <div className="xl:bg-[url('/moon_dust.png')] xl:bg-contain top-60 -left-[40%] xl:bg-bottom xl:bg-no-repeat w-full h-full absolute -translate-z-10 mix-blend-luminosity"></div>
        <div className="xl:bg-[url('/home-bg.png')] xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute translate-z-0"></div>
        <ParticlesContainer />
      </div>
    </main>
  );
}
