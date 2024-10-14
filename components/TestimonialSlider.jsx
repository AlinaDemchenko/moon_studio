"use client";

const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Anne Smith",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/t-avt-2.png",
    name: "Jane Doe",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/t-avt-3.png",
    name: "Jhon Doe",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
];

import { ImQuotesLeft } from "react-icons/im";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation = {true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
      className=" xl:h-[400px]"
    >
      {testimonialData.map((person, idx) => {
        return (
          <SwiperSlide key={idx}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  <div className="mb-2 mx-auto"> 
                    <Image src={person.image} width={100} height={100} alt="author's avatar" className="grayscale"/>
                  </div>
                  <div className="text-lg">{person.name}</div> 
                  <div className="uppercase text-[12px] font-extralight tracking-widest">{person.position}</div>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/40 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                <div className="mb-4">
                  <ImQuotesLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                <div className="xl:text-lg text-center md:text-left mb-12">
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;