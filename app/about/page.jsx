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
  const [index, setIndex] = useState(0);

  return (
    <main className="h-full py-32 text-center xl:text-left">
      <Galaxy />
      <motion.div
        variants={fadeIn("right", 1.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute -bottom-[200px] -left-[100px] h-full w-full"
      >
        <div className="xl:bg-[url('/about-bg.png')] xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute z-0 opacity-60"></div>
      </motion.div>
      <div className="container h-full flex flex-col mx-auto items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex-col flex justify-center"></div>
        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
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
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex} className="flex flex-1 flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                  <div className="font-light mb-2 md:mb-0 ">{item.title}</div>
                  <div className="hidden xl:flex">- </div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div key={itemIndex} className="text-2xl text-white">{React.createElement(icon)}</div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
