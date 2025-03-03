"use client";

import React from "react";
import { Button } from "../ui/Button";
import Image from "next/image";
import { motion } from "framer-motion";

export const Footer = () => {
  const phone = "+7 (953) 998-23-36";
  const email = "biofa116@gmail.com";
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="l:px-[30px] xl:px-[140px] py-20"
    >
      <div className="flex flex-col gap-y-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex l:justify-between xl:justify-center l:gap-x-5 xl:gap-x-10"
        >
          <div className="flex flex-col gap-y-12">
            <p className="font-semibold text-[32px] leading-10 text-[#9D1C45]">
              Где мы находимся?
            </p>
            <p className="font-medium text-[24px] leading-6">Наши павильоны</p>
            <div className="flex gap-x-4 items-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#1C9D74]" />
              <div className="flex flex-col gap-y-3">
                <p className="leading-[22px] text-[18px]">
                  г. Казань, ул. Адоратского 14
                  <br />
                  <span className="text-[#777777] leading-[22px] text-base">
                    (ТЦ Торнадо, Павильоны слева)
                  </span>
                </p>
                <p className="text-[18px] leading-[22.5px] font-medium">
                  7:00–22:00
                </p>
              </div>
            </div>
            <div>
              <p className="text-[#777777] text-[20px] leading-5">
                Номер телефона
              </p>
              <a
                href={`tel:${phone}`}
                className="text-[#33282C] font-bold leading-6 text-[24px]"
              >
                {phone}
              </a>
            </div>
            <Button
              text="Записаться на подбор краски"
              className="py-3 px-4 font-semibold w-max l:!text-[16px]"
              variant="second"
            />
          </div>
          <div>
            <iframe
              className="rounded-[18px] xl:w-[760px] xl:h-[390px] l:w-[517px] l:h-full"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A03aa25e5ea0e1575e27b32a61086df62d9a5962170a937dc9636a919f94053aa&amp;source=constructor"
              width="760"
              height="390"
            ></iframe>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-between w-full items-center"
        >
          <Image src="/Logo.svg" alt="logo" width={224} height={40} />
          <p className="text-[#33282C] l:leading-4 xl:leading-[18px] font-medium l:text-[16px] xl:text-[18px]">
            Политика конфиденциальности
          </p>
          <div className="flex gap-x-4">
            <Image src="/tg.svg" alt="telegramm" width={32} height={32} />
            <Image src="/wa.svg" alt="whatsapp" width={32} height={32} />
            <Image src="/inst.svg" alt="instagramm" width={32} height={32} />
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center gap-x-2">
              <Image src="/phone.svg" alt="phone" width={12} height={12} />
              <a
                href={`tel:${phone}`}
                className="text-[#33282C] font-bold leading-4 "
              >
                {phone}
              </a>
            </div>
            <div className="flex items-center gap-x-2">
              <Image src="/mail.svg" alt="mail" width={12} height={12} />
              <a
                href={`mailto:${email}`}
                className="text-[#33282C] font-bold leading-4 "
              >
                {email}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};