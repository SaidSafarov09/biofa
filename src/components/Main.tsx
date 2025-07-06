"use client";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/Button";
import { InputBanner } from "./shared/inputBanner";

const Main = () => {
  const phone = "+7 (953) 998-23-36";

  return (
    <div className="my-12 w-full justify-center flex flex-col items-center">
      <div className="w-full flex flex-col m:flex-row m:justify-between l:justify-center xl:gap-x-[140px] px-[30px] l:px-0 xl:mx-[140px] l:gap-x-10 gap-y-6 m:gap-y-0">
        <div className="flex l:gap-8 l:flex-row flex-col gap-y-6 l:gap-y-0 l:items-center xl:gap-x-10">
          <Image
            src="/Logo.svg"
            alt="logo"
            width={200}
            height={38}
            className="xl:w-[200px] xl:h-[38px] w-[184px] h-[34px]"
          />
          <p className="text-base xl:text-[18px] font-medium leading-[20px] text-[#33282C]">
            Фирменный магазин красок и<br /> масел для дерева в городе Казани
          </p>
        </div>
        <div className="flex l:gap-8 l:flex-row flex-col gap-y-6 l:gap-y-0 justify-center m:items-end l:items-center xl:gap-x-10">
          <Button
            text="Заказать покраску"
            onClick={() => window.location.href = 'https://germetdom.ru'}
            className="px-[14px] py-3 l:px-[14.5px] l:py-3 text-[14px] leading-[14px] l:leading-4 font-semibold w-max"
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
      </div>

      <div className="relative flex justify-center w-full">
        <div
          className="px-[15px] l:px-2.5 xl:px-20 mt-[30px] l:mt-9 w-full"
        >
          <div
            className="w-full h-[620px] rounded-[32px] pt-8  px-[10px] m:pt-[38px] m:pl-[15px]  l:pl-5 l:pt-16 xl:pl-[60px] bg-[url('/banner.png')] bg-cover bg-center"
            
          >
            <div className="flex flex-col gap-y-6 l:gap-y-8">
              <p className="font-bold text-[32px] leading-10  m:text-[40px] xl:text-[48px] text-white m:leading-[50px] xl:leading-[60px]">
                Немецкие масла
                <br className="l:hidden" /> для дерева Biofa
              </p>
              <p className="text-white text-[18px] leading-[22.5px] m:text-[20px] m:leading-[25px] l:text-[24px] l:leading-[30px]  xl:text-[28px] xl:leading-[35px]">
                Создано для российского сурового
                <br className="l:hidden" /> климата
                <br className="hidden l:block" /> и проверено на практике
                <br className="l:hidden" /> более 10 лет
              </p>
            </div>
            <InputBanner className="mt-8 l:mt-20 flex justify-center" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;