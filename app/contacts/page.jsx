"use client";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Galaxy from "@/components/Galaxy";

function Contacts() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    mode: "onSubmit",
  });

  return (
    <main className="page-padding-y pt-28 pb-[70px] md:py-32 h-full lg:pt-36 lg:pb-28">
            <Galaxy />
      <div className="page-padding-x mx-auto max-sm:px-3 text-center xl:text-left md:flex items-center justify-center h-full overflow-y-auto">
        <div className="flex flex-col w-full h-full max-w-[700px]">
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="secondary-title text-center mb-12"
          >
            Let&apos;s get in<span className="text-amber-300"> Touch!</span>
          </motion.h1>
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-1 flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit((data) => {
              console.log(data);
              reset();
            })}
          >
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="name"
                id="name"
                name="name"
                {...register("name", {
                  required: true,
                  minLength: { value: 2 },
                  maxLength: { value: 60 },
                })}
                className={errors.name ? "border-[#FF5757] focus:ring-[#FF5757]" : ""}
              />
              <input
                placeholder="email"
                type="email"
                id="email"
                name="email"
                {...register("email", {
                  required: true,
                  maxLength: { value: 60},
                  pattern: {
                    value: /^\S+@\S+$/i,
                  },
                })}
                className={errors.email ? "border-[#FF5757] focus:ring-[#FF5757]" : ""}
              />
            </div>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="subject"
              {...register("message", { maxLength: { value: 60 } })}
            />
            <textarea
              name="message"
              id="message"
              placeholder="message"
              rows="5"
              maxLength="600"
              {...register("message")}
            ></textarea>
            <button type="submit" className="rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-amber-300 group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Contact us
              </span>
              <IoIosArrowRoundForward className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 transition-all group-hover:opacity-100 duration-300 absolute text-4xl" />
            </button>
          </motion.form>
        </div>
      </div>
    </main>
  );
}

export default Contacts;
