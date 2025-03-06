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
      className="px-[30px] xl:px-[140px] py-[60px] l:py-20"
    >
      <div className="flex flex-col gap-y-10 l:gap-y-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center gap-x-5 xl:gap-x-10 flex-col m:flex-row"
        >
          <div className="flex flex-col gap-y-10 l:gap-y-12">
            <p className="font-semibold text-[32px] leading-10 text-[#9D1C45]">
              Где мы находимся?
            </p>
            <p className="font-medium text-[24px] leading-6">Наши павильоны</p>
            <div className="flex gap-x-4 items-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#1C9D74]" />
              <div className="flex flex-col gap-y-3">
                <p className="leading-[22px] text-[18px] font-semibold">
                  г. Казань, ул.
                  <br className="hidden m:block l:hidden" /> Адоратского 14
                  <br />
                  <span className="text-[#777777] l:leading-[22px] l:text-base text-sm leading-6">
                    (ТЦ Торнадо, Павильоны слева)
                  </span>
                </p>
                <p className="text-[18px] leading-[22.5px] font-medium">
                  7:00–22:00
                </p>
              </div>
            </div>

            <div className="m:hidden">
              <iframe
                className="rounded-[18px] xl:w-[760px] xl:h-[390px] l:w-[517px] m:h-full m:w-[260px] w-full h-[260px]"
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A03aa25e5ea0e1575e27b32a61086df62d9a5962170a937dc9636a919f94053aa&amp;source=constructor"
                width="760"
                height="390"
              ></iframe>
            </div>
            <div className="flex flex-col gap-y-4">
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
              className="py-3 px-4 font-semibold l:w-max !text-[16px] w-full m:w-max"
              variant="second"
            />
          </div>
          <div className="hidden m:block">
            <iframe
              className="rounded-[18px] xl:w-[760px] xl:h-[432px] l:w-[517px] m:h-full m:w-[260px] w-full h-[260px]"
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
          className="flex flex-col m:flex-row justify-between l:justify-center w-full items-center l:gap-x-[60px] xl:gap-x-[125px]"
        >
          <div className="flex flex-col l:flex-row l:items-center gap-y-10 m:gap-y-4 l:w-full l:gap-x-[60px] xl:gap-x-[125px]">
            <Image src="/Logo.svg" alt="logo" width={224} height={40} />
            <div className="m:hidden items-center flex flex-col gap-y-4">
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
            <p className="hidden m:block text-[#33282C] l:leading-4 xl:leading-[18px] font-medium l:text-[16px] xl:text-[18px]">
              Политика
              <br className="hidden m:block l:hidden" /> конфиденциальности
            </p>
          </div>
          <div className="mt-10 m:mt-0 flex flex-col m:flex-col-reverse l:flex-row gap-y-10 m:gap-y-4 l:w-full l:gap-x-[60px] xl:gap-x-[125px] justify-end">
          <p className="m:hidden text-[#33282C] l:leading-4 xl:leading-[18px] font-medium l:text-[16px] xl:text-[18px]">
              Политика
              <br className="hidden m:block l:hidden" /> конфиденциальности
            </p>
            <div className="flex gap-x-4 m:justify-end">
              <Image src="/tg.svg" alt="telegramm" width={32} height={32} />
              <Image src="/wa.svg" alt="whatsapp" width={32} height={32} />
              <Image src="/inst.svg" alt="instagramm" width={32} height={32} />
            </div>
            <div className="hidden m:flex flex-col gap-y-4">
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
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
