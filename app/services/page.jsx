"use client";

import ServiceSlider from "@/components/ServiceSlider";
import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

function Services() {
  return (
    <div className="h-full py-36 flex items-center">
      <Circles />
      <div className="mx-auto container"></div>
      <Bulb />
    </div>
  );
}

export default Services;
