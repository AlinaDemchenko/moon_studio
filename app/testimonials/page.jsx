"use client"

import TestimonialSlider from "@/components/TestimonialSlider";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

function Testimonials() {
  return (
    <main className="h-full py-28 md:py-32 text-center overflow-hidden">
      <div className="page-container pt-0 mx-auto h-full md:flex flex-col justify-center max-xl:overflow-y-scroll">
        <motion.h1 className="secondary-title xl:mb-0" variants={fadeIn("up", 0.2)} initial="hidden" animate="show" exit="hidden">
          What Clients<span className="text-amber-300"> Say.</span>
        </motion.h1>
        <motion.div initial="hidden" animate="show" exit="hidden" variants={fadeIn("up", 0.4)} >
          <TestimonialSlider />  
        </motion.div>
      </div>
    </main>
  ); 
} 

export default Testimonials;
 