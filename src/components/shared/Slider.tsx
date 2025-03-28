"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { useEffect, useState } from "react";

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
  "/Img18.jpeg",
];

const images2 = [
  "/Img20.jpeg",
  "/Img21.jpeg",
  "/Img22.jpeg",
  "/Img23.jpeg",
  "/Img24.jpeg",
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

const Slider = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const allImages = [...images, ...images2];
  const openModal = (src: string, index: number) => {
    setSelectedImage(src);
    setCurrentIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setCurrentIndex(0);
    document.body.style.overflow = "auto";
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(allImages[prevIndex]);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % allImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(allImages[nextIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevImage();
      } else if (e.key === "ArrowRight") {
        nextImage();
      }
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, currentIndex]);

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
              <div
                className="relative w-full mx-0 h-64 md:h-80 rounded-lg overflow-hidden shadow-xl transition transform scale-90 hover:scale-100"
                onClick={() => openModal(src, index)}
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
              <div
                className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-xl transition transform scale-90 hover:scale-100"
                onClick={() => openModal(src, index)}
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
        <div
          className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
          onClick={handleModalClick}
        >
          <div className="relative max-w-[90%] max-h-[90%]">
            <img
              src={selectedImage || ""}
              alt="Selected"
              className="w-[290px] h-auto object-contain  m:w-[400px] xl:h-auto"
            />
            <button
              className="absolute top-[-32px] right-0 text-white text-xl"
              onClick={closeModal}
            >
              <Image src="/close.svg" width={24} height={24} alt="close" />
            </button>
            <button
              className="absolute left-[-40px] top-[50%] transform -translate-y-[50%] text-white text-3xl"
              onClick={prevImage}
            >
              &lt;
            </button>
            <button
              className="absolute right-[-40px] top-[50%] transform -translate-y-[50%] text-white text-3xl"
              onClick={nextImage}
            >
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider;
