"use client";
import { motion } from "framer-motion";
import { useMotionValueEvent, useMotionValue } from "framer-motion"
import { useMediaQuery } from 'react-responsive';

const transitionVariantsXL = {
  initial: {
    x: "200%",
    width: "100%",
  },
  animate: {
    x: "-100%",
    width: "100%",
  },
  exit: {
    x: "-100%",
    width: "100%",
  },
};

const transitionVariantsMD = {
    initial: {
              x: "200%",
              width: "0%",
            },
            animate: {
              x: "-100%",
              width: "300%",
            },
            exit: {
              x: "0%",
              width: "0%",
            },
  };
 
function Transition({onMotionEvent}) { 
    const isLaptop = useMediaQuery({ query: '(min-width: 1440px)' })
    const duration = isLaptop ? 2 : 1.5;
    const x = useMotionValue(0)
    
      useMotionValueEvent(x, "change", (latest) => {
        onMotionEvent(latest);
      })

  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full h-screen w-screen z-30 bg-[url('/asteroid_mob.png')] xl:bg-[url('/spaceship.png')] bg-no-repeat bg-contain xl:bg-cover bg-top xl:bg-left"
        style={{ x }}
        variants={isLaptop ? transitionVariantsXL : transitionVariantsMD}
        initial="initial"
        animate="animate"
        exit="exit" 
        transition={{delay: 0.2, duration: duration, ease: "circIn", type: "tween"}}
      >
      </motion.div> 
    </>
  );
}

export default Transition;

// const transitionVariants = {
//     initial: {
//       x: "100%",
//       width: "0",
//     },
//     animate: {
//       x: "0%",
//       width: "500%",
//     },
//     exit: {
//       x: "100%",
//       width: "0",
//     },
//   };
