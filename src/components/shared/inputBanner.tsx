"use client";
import React, { useState } from "react";
import Input from "../ui/Input";
import { Button } from "../ui/Button";

type Props = {
  className?: string;
};

export const InputBanner = ({ className }: Props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [buttonText, setButtonText] = useState("Отправить");
  const [error, setError] = useState<string | null>(null);
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!name || !phone) {
      setError("Все поля должны быть заполнены!");
      setIsErrorVisible(true);
      setTimeout(() => {
        setIsErrorVisible(false);
        setError(null);
      }, 2000);
      return;
    }

    const formData = {
      name: name,
      phone: phone,
    };

    try {
      const response = await fetch("https://formspree.io/f/mkgjnbkn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Данные успешно отправлены!");
        setName("");
        setPhone("");
        setButtonText("Отправлено!");
        setTimeout(() => {
          setButtonText("Отправить");
        }, 1000);
        setError(null);
        setIsErrorVisible(false);
      } else {
        setError("Ошибка сервера");
        setIsErrorVisible(true);
        setTimeout(() => {
          setIsErrorVisible(false);
          setError(null);
        }, 2000);
      }
    } catch (error) {
      setError("Ошибка сервера");
      setIsErrorVisible(true);
      setTimeout(() => {
        setIsErrorVisible(false);
        setError(null);
      }, 2000);
      console.error("Ошибка:", error);
    }
  };

  return (
    <div
      className={`${className} bg-[rgba(255,255,255,0.2)] rounded-[24px] w-full h-[296px] m:w-[330px] m:h-[303px] l:h-[165px] flex flex-col py-4 px-[18px] l:w-max justify-between`}
    >
      {!isErrorVisible ? (
        <p className="text-base leading-6 m:text-[18px] m:leading-[27px] l:text-[20px] text-white l:leading-[30px] font-medium w-[294px] l:w-full">
          Подберем и рассчитаем нужное количество масла
          <br className="hidden l:block" /> в нескольких вариантах для вашего
          дома
        </p>
      ) : (
        <div
          className="text-[#f73636] text-base leading-6 m:text-[18px] m:leading-[27px] l:text-[20px] l:leading-[30px] font-medium w-[294px] l:w-full transition-opacity duration-1000 opacity-100"
          style={{ animation: "fadeInOut 2s" }}
        >
          {error}
        </div>
      )}

      <div className="flex-col l:flex-row flex gap-[19px]">
        <Input
          placeholder="Имя"
          src="/user.svg"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Номер телефона"
          src="/phoneGreen.svg"
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Button
          text={buttonText}
          className={`px-4 py-2.5 h-10 ${error ? "bg-[#f73636] hover:!bg-[#f73636]" : ""}`}
          variant="second"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};
