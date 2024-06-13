"use client";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const transitionVariants = {
    animate: {
      x: ["0", "100%", "0"],
      width: [0, "110%", 0],
    },
  };

function Transition({ children }) {

  const path = usePathname();

  return (
    <AnimatePresence mode="wait ">
      <motion.div key={path} className="h-full">
        <motion.div
          className="fixed top-0 bottom-0 right-full h-screen w-screen z-30 bg-amber-300"
          variants={transitionVariants}
          animate="animate"
          transition={{
            delay: 0.2,
            duration: 1.1,
            ease: "easeInOut",
          }}
        ></motion.div>
         <motion.div
          className="fixed top-0 bottom-0 right-full h-screen w-screen z-20 bg-amber-400"
          variants={transitionVariants}
          animate="animate"
          transition={{
            delay: 0.4,
            duration: 1.1,
            ease: "easeInOut",
          }}
        ></motion.div>
         <motion.div
          className="fixed top-0 bottom-0 right-full h-screen w-screen z-10 bg-amber-500"
          variants={transitionVariants}
          animate="animate" 
          transition={{
            delay: 0.6,
            duration: 1.1,
            ease: "easeInOut",
          }}
        ></motion.div>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default Transition;


// const transitionVariantsXL = {
//   initial: {
//     x: "0%",
//   },
//   animate: {
//     x: "200%",

//   },
//   exit: {
//     x: "200%",
//   },
// };

// const transitionVariantsMD = {
//   initial: {
//     x: "200%",
//     width: "0%",
//   },
//   animate: {
//     x: "-100%",
//     width: "300%",
//   },
//   exit: {
//     x: "0%",
//     width: "0%",
//   },
// };

// className="fixed top-0 bottom-0 right-full h-screen w-screen z-30 bg-[url('/motion_bg.png')] bg-no-repeat bg-contain bg-top xl:bg-left opacity-90"

