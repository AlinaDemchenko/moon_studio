"use client";

import { IoArrowForward } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.jpg",
          alt: "",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
          alt: "",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
          alt: "",
        },
        {
          title: "title",
          path: "/thumb4.jpg",
          alt: "",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
          alt: "",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
          alt: "",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
          alt: "",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
          alt: "",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]  z-20"
    >
      {workSlides.slides.map((slide, idx) => {
        return (
          <SwiperSlide key={idx}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      <Image
                        src={image.path}
                        width={500}
                        height={300}
                        alt={image.alt}
                        className="grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          <div className="delay-100">LIVE</div>
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            PROJECT
                          </div>
                          <div className="translate-y-[500%] text-xl group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <IoArrowForward />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
