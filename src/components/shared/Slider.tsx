"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/Img1.jpeg",
  "/Img2.jpeg",
  "/Img3.jpeg",
  "/Img4.jpeg",
  "/Img5.jpeg",
  "/Img6.jpeg",
  "/Img7.jpeg",
  "/Img8.jpeg",
];

const images2 = [
  "/Img9.jpeg",
  "/Img10.jpeg",
  "/Img11.jpeg",
  "/Img12.jpeg",
  "/Img13.jpeg",
  "/Img14.jpeg",
  "/Img15.jpeg",
  "/Img16.jpeg",
];

export const Slider = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative bg-[#33282C] py-[48px] m:py-[60px] l:py-20 before:z-[10] after:z-[10] before:absolute before:top-0 before:left-0 before:w-[100px] before:h-full before:bg-gradient-to-r before:from-black/50 before:to-transparent after:absolute after:top-0 after:right-0 after:w-[100px] after:h-full after:bg-gradient-to-l after:from-black/50 after:to-transparent"
    >
      <p className="text-white text-[30px] leading-[36px] m:text-[32px] font-semibold m:leading-10 px-[30px] xl:px-[140px] relative z-[15]">
        Примеры выполненных
        <br className="l:hidden" /> работ маслом Biofa
      </p>
      <div className="mt-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Swiper
            loop={true}
            spaceBetween={10}
            slidesPerView={1.5}
            centeredSlides={true}
            initialSlide={2}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.5 },
            }}
            modules={[Pagination]}
            className="w-full mx-auto"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full mx-0 h-64 md:h-80 rounded-lg overflow-hidden shadow-xl transition transform scale-90 hover:scale-100">
                  <Image
                    src={src}
                    alt={`House ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Swiper
            loop={true}
            spaceBetween={10}
            slidesPerView={1.5}
            centeredSlides={true}
            initialSlide={2}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.5 },
            }}
            modules={[Pagination]}
            className="w-full mx-auto mt-4"
          >
            {images2.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-xl transition transform scale-90 hover:scale-100">
                  <Image
                    src={src}
                    alt={`House ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </motion.div>
  );
};
