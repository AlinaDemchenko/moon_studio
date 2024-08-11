"use client";

import ServiceSlider from "@/components/ServiceSlider";
import Asteroid from "@/components/Asteroid";
import Galaxy from "@/components/Galaxy";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants"; 

function Services() {
  return (
    <main className="h-full py-36 flex items-center page-container">
      <Galaxy />  
      <div className="mx-auto container">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex flex-col xl:w-[30vw] lg:text-left mb-4 xl:mb-0 relative z-20">
            <h2 className="mt-8">
              Our Services <span className="text-amber-300">.</span>
            </h2>
            <p className="mb-4 max-w-[400px] mx-auto lg n:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <ServiceSlider />
        </div>
      </div>
      <Asteroid />
    </main>
  );
}

export default Services;
