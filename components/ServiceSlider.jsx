"use client";

import {
  MdAddTask,
  MdCode,
  MdFormatColorFill,
  MdAutoStories,
  MdDvr,
  MdNorthEast,
} from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    icon: <MdAddTask />,
    title: "Branding",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <MdFormatColorFill />,
    title: "Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: < MdCode />,
    title: "Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <MdAutoStories />,
    title: "Copywriting",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <MdDvr />,
    title: "SEO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[250px] md:h-[380px] lg:h-[340px] z-20"
    >
      {serviceData.map((item, idx) => {
        return (
          <SwiperSlide key={idx}>
            <div className="h-max rounded-lg bg-white/20 px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-white/30 transition-all duration-300 z-20">
              <div className="text-4xl mb-4 text-amber-300">{item.icon}</div>
              <div className="mb-8">
                <div className="mb-2 text-lg font-semibold">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              <div className="text-3xl">
                <MdNorthEast className="group-hover:rotate-45 group-hover:text-amber-300 transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
