import React from "react";
import Input from "../ui/Input";
import { Button } from "../ui/Button";

type Props = {
    className?: string;
}

export const InputBanner = ({className}: Props) => {
  return (
    <div className={`${className} bg-[rgba(255,255,255,0.2)] rounded-[24px] w-max flex flex-col py-6 px-[18px]`}>
      <p className="text-[20px] text-white leading-[30px] font-medium">
        Подберем и рассчитаем нужное количество масла
        <br /> в нескольких вариантах для вашего дома
      </p>
      <div className="flex gap-[19px] mt-8">
        <Input placeholder="Имя" src="/user.svg" />
        <Input placeholder="Номер телефона" src="/phoneGreen.svg" type="number"/>
        <Button text={"Отправить"} className="px-4 py-2.5" variant="second"/>
      </div>
    </div>
  );
};
