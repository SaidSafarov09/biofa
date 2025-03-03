'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  "/slide1.png",
  "/slide2.png",
  "/slide3.png",
  "/slide4.png",
  "/slide5.png",
  "/slide6.png",
  "/slide1.png",
  "/slide2.png",
];

const images2 = [
  "/slide1.png",
  "/slide2.png",
  "/slide3.png",
  "/slide4.png",
  "/slide5.png",
  "/slide6.png",
  "/slide1.png",
  "/slide2.png",
];

export const Slider = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.8 }}
      className="bg-[#33282C] py-20"
    >
      <p className="text-white text-[32px] font-semibold leading-10 l:px-[30px] xl:px-[140px]">
        Примеры выполненных работ маслом Biofa
      </p>
      <div className='mt-12'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Swiper
            spaceBetween={40}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            modules={[Pagination]}
            className="w-11/12 mx-auto"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                  <Image src={src} alt={`House ${index + 1}`} layout="fill" objectFit="cover" />
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
            spaceBetween={40}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            modules={[Pagination]}
            className="w-11/12 mx-auto mt-10"
          >
            {images2.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                  <Image src={src} alt={`House ${index + 1}`} layout="fill" objectFit="cover" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </motion.div>
  );
}
