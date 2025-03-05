import React from "react";
import Input from "../ui/Input";
import { Button } from "../ui/Button";

type Props = {
    className?: string;
}

export const InputBanner = ({className}: Props) => {
  return (
    <div className={`${className} bg-[rgba(255,255,255,0.2)] rounded-[24px] w-full m:w-[330px] m:h-[303px] l:h-max flex flex-col py-6 px-[18px] l:w-max`}>
      <p className="text-base leading-6 m:text-[18px] m:leading-[27px] l:text-[20px] text-white l:leading-[30px] font-medium w-[294px] l:w-full">
        Подберем и рассчитаем нужное количество масла
        <br className="hidden l:block"/> в нескольких вариантах для вашего дома
      </p>
      <div className="flex-col l:flex-row flex gap-[19px] mt-8">
        <Input placeholder="Имя" src="/user.svg" />
        <Input placeholder="Номер телефона" src="/phoneGreen.svg" type="number"/>
        <Button text={"Отправить"} className="px-4 py-2.5" variant="second"/>
      </div>
    </div>
  );
};
