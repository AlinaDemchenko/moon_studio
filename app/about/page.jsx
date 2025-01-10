"use client";

import Galaxy from "@/components/Galaxy";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";
import CountUp from "react-countup";
import { useMediaQuery } from "react-responsive";

const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          FaHtml5,
          FaCss3,
          FaJs,
          FaReact,
          SiNextdotjs,
          SiFramer,
          FaWordpress,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [FaFigma, SiAdobexd, SiAdobephotoshop],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
      },
    ],
  },
];

function About() {
  const isMobile = useMediaQuery({ query: "(max-width:767px)" });
  const [index, setIndex] = useState(0);

  return (
    <main className="h-full text-center xl:text-left">
      <Galaxy />
      {/* <motion.div */}
      {!isMobile && (
        <motion.div
          variants={fadeIn("right", 1.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden xl:flex absolute -bottom-[400px] -left-[150px] h-full w-full z-0"
        >
          <div className="xl:bg-[url('/about-bg.png')] xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute z-0 opacity-60"></div>
        </motion.div>
      )}
      <div className="page-padding-y xl:pt-36 overflow-hidden pb-16 md:pb-20 h-full w-full">
        <div className="page-padding-x max-xl:overflow-y-scroll overflow-x-hidden h-full flex flex-col mx-auto items-center xl:flex-row xl:items-start gap-x-6">
          <div className="flex-1 flex-col flex justify-center xl:justify-start xl:h-[480px]">
            {/* <motion.h1 */}
            <motion.h1
              variants={fadeIn("right", 1.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="secondary-title relative z-20"
            >
              Moon Studio: <span className="text-amber-300">Your Vision, </span>
              Our Craft
            </motion.h1>
            {/* <motion.p */}
            <motion.p
              variants={fadeIn("right", 1.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
            >
              The best developers, designers, and SEO managers came together to
              bring your digital visions to life. Our team excels in creating
              innovative and effective web solutions tailored to your needs.
            </motion.p>
            {/* <motion.div */}
            <motion.div
              variants={fadeIn("right", 1.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden md:flex md:max-w-[1200px] mx-auto mb-8 xl:mx-0 mb-8 xl:relative xl:z-20"
            >
              <div className="flex flex-1 xl:gap-x-6">
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/40 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-amber-300 mb-2">
                    <CountUp start={0} end={2} duration={5} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Years of experience
                  </div>
                </div>
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/40 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-amber-300 mb-2">
                    <CountUp start={0} end={200} duration={5} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Satisfied clients
                  </div>
                </div>
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/40 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-amber-300 mb-2">
                    <CountUp start={0} end={200} duration={5} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Finished projects
                  </div>
                </div>
                <div className="relative flex-1">
                  <div className="text-2xl xl:text-4xl font-extrabold text-amber-300 mb-2">
                    <CountUp start={0} end={6} duration={5} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Team members
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          {/* <motion.div */}
          <motion.div
            variants={fadeIn("left", 1.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
          >
            <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
              {aboutData.map((item, itemIndex) => {
                return (
                  <div
                    onClick={() => {
                      setIndex(itemIndex);
                    }}
                    key={itemIndex}
                    className={`cursor-pointer capitalize xl:text-lg relative z-10 after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 ${
                      itemIndex === index &&
                      "text-amber-300 after:w-[100%] after:!bg-amber-300 after:transition-all after:duration-300"
                    }`}
                  >
                    {item.title}
                  </div>
                );
              })}
            </div>
            <div className="py-2 max-md:pb-6 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
              {aboutData[index].info.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className="flex flex-1 flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                  >
                    <div className="font-light mb-2 md:mb-0 ">{item.title}</div>
                    <div className="hidden xl:flex">- </div>
                    <div>{item.stage}</div>
                    <div className="flex gap-x-4">
                      {item.icons?.map((icon, itemIndex) => {
                        return (
                          <div key={itemIndex} className="text-2xl text-white">
                            {React.createElement(icon)}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

export default About;
