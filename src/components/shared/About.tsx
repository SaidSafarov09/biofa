"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import Image from "next/image";
import { aboutData } from "./helpers";

export const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
      className="l:px-[30] xl:px-[140px] py-20"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="flex justify-between items-center"
      >
        <div className="text-[#9D1C45] text-[32px] leading-10 font-semibold">
          Наш продукт
          <br />
          проверен временем
        </div>
        <div className="hidden xl:flex gap-x-20">
          <div className="flex gap-4">
            <Image src="/geo.svg" alt="geo" width={18} height={18} />
            <div className="text-[18px]">
              г. Казань
              <br />
              г. Чебоксары
            </div>
          </div>
          <div className="flex gap-4">
            <Image src="/geo.svg" alt="geo" width={18} height={18} />
            <div className="text-[18px]">
              г. Нижний Новгород
              <br />
              г. Йошкар-Ола
            </div>
          </div>
        </div>
        <Button
          text="Заказать покраску"
          className="!text-[20px] leading-[20px] font-semibold px-6 py-[18px]"
          variant="first"
        />
      </motion.div>

      <div className="mt-10 flex l:gap-x-5 xl:gap-x-10 justify-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="l:min-w-[288px] w-full"
        >
          <div className="flex xl:hidden gap-x-5 mb-4">
          <div className="flex l:gap-2 xl:gap-4">
            <Image src="/geo.svg" alt="geo" width={18} height={18} />
            <div className="l:text-[13px] xl:text-[18px]">
              г. Казань
              <br />
              г. Чебоксары
            </div>
          </div>
          <div className="flex l:gap-2 xl:gap-4">
            <Image src="/geo.svg" alt="geo" width={18} height={18} />
            <div className="l:text-[13px] text-[18px]">
              г. Нижний Новгород
              <br />
              г. Йошкар-Ола
            </div>
          </div>
        </div>
          <Image
            src="/man.png"
            alt="man"
            objectFit="cover"
            width={360}
            height={520}
          />
          <div className="flex gap-6 mt-6">
            <div className="w-[25px] h-[1px] bg-[#1C9D74] mt-3" />
            <p className="xl:leading-[26px] xl:text-[20px] l:text-[14px] l:leading-[22px]">
              Сафиуллин Адель, совладелец и<br /> технолог компании «Герметдом»
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-start"
        >
          <p className="xl:w-[760px] xl:text-[20px] xl:leading-[28px] l:text-[18px] l:leading-[24.5px]">
            Компания «Герметдом» занимается герметизацией, шлифовкой и покраской
            деревянных сооружений по РТ и ближайшим регионам с 2014 года.
            <br />
            <br /> Мы являемся официальным дилером Biofa более 4-х лет. За это
            время было сдано более 1000 домов, покрашенных их продукцией, и
            продано более 30 000 литров масел-красок.
            <br />
            <br /> В последние года мы полностью перешли на работу масел-красок
            Biofa, так как они лучше всех показывают себя на практике. Начиная с
            нанесения, заканчивая гарантийными случаем, мы полностью доверяем и
            отдаем предпочтение работе с ними.
            <br />
            <br /> Также мы постоянно даем обратную связь заводу, чтобы улучшать
            продукт для конечного потребителя. Я лично готов показать объекты,
            на которых использовался данный продукт.
          </p>
          <div className="flex justify-between w-full mt-6">
            {aboutData.map(({ id, head, sub }, index) => (
              <motion.div
                key={id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="flex flex-col gap-4"
              >
                <div className="text-[#9D1C45] xl:leading-[54px] xl:text-[54px] l:text-[45px] l:leading-[45px] font-semibold">
                  {head}
                </div>
                <p className="xl:text-[20px] xl:leading-[25px] l:text-[18px] l:leading-[22.5px]">{sub}</p>
                <div className="w-15 h-[0.5px] bg-[#777777]" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
