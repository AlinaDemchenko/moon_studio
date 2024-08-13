"use client"

import TestimonialSlider from "@/components/TestimonialSlider";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

function Testimonials() {
  return (
    <main className="h-full py-32 md:pb-32 md:pt-60 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        <motion.h2 className="xl:mb-0" variants={fadeIn("up", 0.2)} initial="hidden" animate="show" exit="hidden">
          What Clients<span className="text-amber-300"> Say.</span>
        </motion.h2>
        <motion.div initial="hidden" animate="show" exit="hidden" variants={fadeIn("up", 0.4)} >
          <TestimonialSlider />  
        </motion.div>
      </div>
    </main>
  ); 
} 

export default Testimonials;
 