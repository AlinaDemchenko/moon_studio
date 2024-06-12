"use client";
import { useState } from 'react';
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Transition from "./Transition";
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import TopLeftImg from "@/components/TopLeftImg";

function MotionWrapper({ children }) {
  const path = usePathname();
  const [motionState, setMotionState] = useState('');

  const handleMotionEvent = (state) => {
    setMotionState(state);
  };

  return (
    <AnimatePresence mode="wait ">
      <motion.div key={path} className="h-full">
        <Transition onMotionEvent={handleMotionEvent}/>
        <TopLeftImg />
        <Nav motionState={motionState}/>
        <Header />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default MotionWrapper;
