"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { useState } from "react";

const images = [
  "/Img1.jpeg",
  "/Img2.jpeg",
  "/Img3.jpeg",
  "/Img4.jpeg",
  "/Img5.jpeg",
  "/Img6.jpeg",
  "/Img7.jpeg",
  "/Img8.jpeg",
  "/Img9.jpeg",
  "/Img10.jpeg",
  "/Img11.jpeg",
  "/Img12.jpeg",
  "/Img13.jpeg",
  "/Img14.jpeg",
  "/Img15.jpeg",
  "/Img16.jpeg",
  "/Img17.jpeg",
  "/Img18.jpeg",
  "/Img19.jpeg",
];

const images2 = [
  "/Img20.jpeg",
  "/Img21.jpeg",
  "/Img22.jpeg",
  "/Img23.jpeg",
  "/Img24.jpeg",
  "/Img25.jpeg",
  "/Img26.jpeg",
  "/Img27.jpeg",
  "/Img28.jpeg",
  "/Img29.jpeg",
  "/Img30.jpeg",
  "/Img31.jpeg",
  "/Img32.jpeg",
  "/Img33.jpeg",
  "/Img34.jpeg",
  "/Img35.jpeg",
  "/Img36.jpeg",
  "/Img37.jpeg",
];

export const Slider = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (src: string) => {
    setSelectedImage(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="relative bg-[#33282C] py-[48px] m:py-[60px] l:py-20 before:z-[10] after:z-[10] before:absolute before:top-0 before:left-0 before:w-[100px] before:h-full before:bg-gradient-to-r before:from-black/50 before:to-transparent after:absolute after:top-0 after:right-0 after:w-[100px] after:h-full after:bg-gradient-to-l after:from-black/50 after:to-transparent">
      <p className="text-white text-[30px] leading-[36px] m:text-[32px] font-semibold m:leading-10 px-[30px] xl:px-[140px] relative z-[15]">
        Примеры выполненных
        <br className="l:hidden" /> работ маслом Biofa
      </p>
      <div className="mt-12">
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
              <div className="relative w-full mx-0 h-64 md:h-80 rounded-lg overflow-hidden shadow-xl transition transform scale-90 hover:scale-100"
              onClick={() => openModal(src)}
              >
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
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-xl transition transform scale-90 hover:scale-100"
              onClick={() => openModal(src)}
              >
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
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
        onClick={handleModalClick}
        >
          <div className="relative max-w-[90%] max-h-[90%]">
            <img
              src={selectedImage || ""}
              alt="Selected"
              className="w-full h-auto object-contain"
            />
            <button
              className="absolute top-[-32px] right-0 text-white text-xl"
              onClick={closeModal}
            >
              <Image src="/close.svg" width={24} height={24} alt="close"/>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
