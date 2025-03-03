"use client";

import React from "react";
import { motion } from "framer-motion";
import { productData } from "./helpers";
import { Button } from "../ui/Button";
import Image from "next/image";

export const ProductView = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
      className="bg-[#EEEEEE] l:mt-[230px] xl:mt-[275px] l:px-[30px] xl:px-[140px] py-[80px]"
    >
      <motion.p 
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="text-[#9D1C45] font-semibold text-[36px] leading-[45px]"
      >
        Для каких видов работ используется наш продукт
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="grid grid-cols-3 grid-rows-2 l:gap-5 xl:gap-10 mt-12"
      >
        {productData.map(({ id, cardMainText, cardSubText, priceMedium, price, bgImg }, index) => (
          <motion.div 
            key={id}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            className="cursor-pointer"
          >
            <div className="relative l:min-w-[287px] l:min-h-[425px] xl:min-w-[360px] xl:h-[520px]">
              <Image
                src={bgImg}
                alt="cardImg"
                layout="fill"
                objectFit="cover"
                className="absolute rounded-[12px]"
              />
              <div className="absolute bottom-0 left-0 l:p-6 xl:p-8 flex flex-col gap-4">
                <p className="text-white l:text-[20px] l:leading-[25px] xl:text-[24px] leading-[30px] font-semibold">
                  {cardMainText}
                </p>
                <p className="l:text-[18px] l:leading-[22.5px] xl:text-[20px] font-medium xl:leading-[25px] text-[#AAAAAA]">
                  {cardSubText}
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-between">
              <div className="flex flex-col">
                <p className="text-[#777777] l:text-[14px] l:leading-[14px]  xl:leading-4 font-medium xl:text-base uppercase">
                  {priceMedium}
                </p>
                <p className="text-[#000] l:text-[22px] l:leading-[22px] xl:leading-6 font-medium xl:text-[24px] uppercase">
                  {price}
                </p>
              </div>
              <Button text="Рассчитать" className="px-3 py-2.5 xl:text-[20px] xl:leading-[25px] l:text-[18px] l:leading-[22.5px]" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

