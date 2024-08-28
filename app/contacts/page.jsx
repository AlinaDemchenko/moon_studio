"use client";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

function Contacts() {
  return (
    <main className="h-full">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <h2 className="text-center mb-1 2">
            Get<span className="text-amber-300"> in Touch</span> with Us Today!
          </h2>
          <form className="flex flex-1 flex-col gap-6 w-full mx-auto">
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="name" />
              <input type="text" placeholder="email" />
            </div>
            <input type="text" placeholder="subject" />
            <textarea name="" id="" placeholder="message"></textarea> 
            <button className="rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-amber-300 group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Contact us
              </span>
              <IoIosArrowRoundForward className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 transition-all group-hover:opacity-100 duration-300 absolute text-xl" />
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Contacts;
