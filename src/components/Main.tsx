"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/Button";
import { InputBanner } from "./shared/inputBanner";
import { MainCard } from "./shared/MainCard";

export const Main = () => {
  const phone = "+7 (953) 998-23-36";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="my-12 w-full justify-center flex flex-col items-center"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full flex m:justify-between l:justify-center xl:gap-x-[70px] m:px-[30px] l:px-0 xl:mx-[140px] l:gap-x-10"
      >
        <div className="flex l:gap-8 l:flex-row m:flex-col m:gap-y-6 l:gap-y-0 l:items-center">
          <Image
            src="/Logo.svg"
            alt="logo"
            width={200}
            height={38}
            className="xl:w-[200px] xl:h-[38px] w-[184px] h-[34px]"
          />
          <p className="text-sm xl:text-base font-medium leading-[20px] text-[#33282C]">
            Фирменный магазин красок и<br /> масел для дерева в городе Казани
          </p>
        </div>
        <div className="flex l:gap-8 l:flex-row m:flex-col m:gap-y-6 l:gap-y-0 justify-center items-end l:items-center">
          <Button
            text="Заказать покраску"
            className="px-[10px] py-3 l:px-[14.5px] l:py-3 text-[14px] leading-[14px] l:leading-4 font-semibold w-[153px] l:w-max"
          />
          <div className="flex items-center gap-3">
            <Image src="/phone.svg" alt="phone" width={16} height={16} />
            <a
              href={`tel:${phone}`}
              className="text-[#33282C] font-bold leading-6 text-[20px] xl:text-[24px]"
            >
              {phone}
            </a>
          </div>
        </div>
      </motion.div>

      <div className="relative flex justify-center w-full">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="m:mx-[15px] l:mx-2.5 xl:mx-20 mt-9 w-full"
        >
          <div
            className="w-full h-[620px] rounded-[32px] l:pl-5 l:pt-20 xl:pl-[60px]"
            style={{
              backgroundImage: "url('banner.png')",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-col gap-y-8 "
            >
              <p className="font-bold l:text-[40px] xl:text-[48px] text-white l:leading-[50px] xl:leading-[60px]">
                Немецкие масла для дерева Biofa
              </p>
              <p className="text-white l:text-[24px] l:leading-[30px]  xl:text-[28px] xl:leading-[35px]">
                Создано для российского сурового климата
                <br /> и проверено на практике более 10 лет
              </p>
            </motion.div>
            <InputBanner className="mt-20 flex justify-center" />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute m:bottom-[-180px] l:bottom-[-180px] xl:bottom-[-210px]"
        >
          <MainCard />
        </motion.div>
      </div>
    </motion.div>
  );
};
