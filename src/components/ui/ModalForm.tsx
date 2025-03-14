import React, { useEffect, useState } from "react";
import Input from "./Input";
import { Button } from "./Button";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  closeModal: () => void;
};

export const ModalForm = ({ closeModal }: Props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!name || !phone) {
      setError("Пожалуйста, заполните все поля.");
      return;
    }
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("https://formspree.io/f/mkgjnbkn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
        }),
      });

      if (response.ok) {
        setName("");
        setPhone("");
        setIsSubmitted(true);
        setHasError(false);
      } else {
        setHasError(true);
      }
    } catch (error) {
      console.log(error);
      setHasError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (isSubmitted && !hasError) {
      const timer = setTimeout(() => {
        closeModal();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted, hasError, closeModal]);

  return (
    <div
      className={`px-[18px] py-6 flex flex-col items-center ${
        !isSubmitted && !hasError && "gap-y-8"
      }`}
    >
      {!isSubmitted && !hasError && (
        <p className="text-[#9D1C45] text-[20px] font-semibold">
          Оставьте свои данные
        </p>
      )}

      <motion.div
        className="flex-col flex w-full gap-y-[18px] relative"
        animate={{ opacity: isSubmitted || hasError ? 0 : 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {!isSubmitted && !hasError && (
          <>
            <Input
              placeholder="Имя"
              src="/userRed.svg"
              className="!w-full border border-[#9D1C45] shadow-none h-10"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Номер телефона"
              src="/phone.svg"
              type="number"
              className="!w-full border border-[#9D1C45] shadow-none h-10"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Button
              text={isSubmitting ? "Отправка..." : "Отправить"}
              className={`py-2.5 h-10 ${isSubmitting ? "bg-gray-400" : ""}`}
              onClick={handleSubmit}
            />
            {error && (
              <p className="text-[#9D1C45] text-xs text-center absolute flex justify-center w-full bottom-[-20px]">
                {error}
              </p>
            )}
          </>
        )}
      </motion.div>

      {isSubmitted && !hasError && (
        <motion.div
          className="text-center text-green-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center gap-y-4">
            <p className="text-[#9D1C45] text-[20px] font-semibold">
              Ваша заявка отправлена
            </p>
            <p className="text-[#33282C] text-sm">
              Мы свяжемся с вами
              <br /> в ближайшее время
            </p>
            <Image src="/formSuccess.svg" alt="done" width={28} height={28} />
          </div>
        </motion.div>
      )}

      {hasError && (
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center gap-y-4">
            <p className="text-[#9D1C45] text-[20px] font-semibold">
              Ошибка сервера
            </p>
            <p className="text-[#33282C] text-sm">
              Произошла ошибка, попробуйте
              <br /> отправить позже
            </p>
            <Image src="/formError.svg" alt="error" width={28} height={28} />
            <Button
              text="Попробовать снова"
              className="py-2.5 h-10 w-full"
              onClick={() => {
                setHasError(false);
                setName("");
                setPhone("");
                setError(null);
              }}
            />
          </div>
        </motion.div>
      )}

      {!isSubmitted && !hasError && (
        <p className="text-[#33282C] text-xs text-center">
          Нажимая на кнопку, вы даете согласие на обработку персональных данных
        </p>
      )}
    </div>
  );
};
