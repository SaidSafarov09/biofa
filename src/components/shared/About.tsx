"use client";

import React from "react";
import { Button } from "../ui/Button";
import Image from "next/image";
import { aboutData } from "./helpers";
import useModal from "./useModal";
import { AnimatePresence } from "framer-motion";
import { ModalForm } from "../ui/ModalForm";
import Modal from "react-modal";

const About = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  return (
    <div className="px-[30px] xl:px-[140px] py-[30px] l:py-20">
      <div className="flex justify-between flex-col gap-y-10 m:gap-y-0 m:flex-row l:items-center">
        <div className="text-start text-[#9D1C45] xl:w-full text-[30px] leading-[37.5px] m:text-[24px] m:leading-[30px] l:text-[32px] l:leading-10 font-semibold">
          Наш продукт
          <br />
          проверен временем
        </div>
        <div className="flex m:hidden xl:flex xl:gap-x-20 w-full xl:justify-center justify-between">
          <div className="flex gap-2 xl:gap-4 min-w-[106px]  h-[30px] m:h-full items-center">
            <Image src="/geo.svg" alt="geo" width={18} height={18} />
            <div className="text-sm xl:text-[18px]">
              г. Казань
              <br />
              г. Чебоксары
            </div>
          </div>
          <div className="flex gap-2 xl:gap-4 min-w-[106px] h-[30px] m:h-full items-center">
            <Image src="/geo.svg" alt="geo" width={18} height={18} />
            <div className="text-sm xl:text-[18px]">
              г. Нижний Новгород
              <br />
              г. Йошкар-Ола
            </div>
          </div>
        </div>
        <Button
          text="Заказать покраску"
          className="text-base px-5 py-4 l:!text-[20px] leading-[20px] font-semibold l:px-6 l:py-[18px] m:w-[240px] xl:w-[520px] h-max"
          variant="first"
          onClick={openModal}
        />
      </div>

      <div className="w-full flex justify-center">
        <div className="mt-10 flex m:gap-x-5 xl:gap-x-10 justify-center w-full m:w-[540px] l:w-max flex-col-reverse m:flex-row">
          <div className="l:min-w-[288px] l:w-full">
            <div className="hidden m:flex xl:hidden gap-x-5 mb-4">
              <div className="flex gap-2 xl:gap-4">
                <Image src="/geo.svg" alt="geo" width={18} height={18} />
                <div className="text-[11px] l:text-[13px] xl:text-[18px]">
                  г. Казань
                  <br />
                  г. Чебоксары
                </div>
              </div>
              <div className="flex gap-2 xl:gap-4">
                <Image src="/geo.svg" alt="geo" width={18} height={18} />
                <div className="text-[11px] l:text-[13px] xl:text-[18px]">
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
              className="w-full xl:w-[360px] xl:h-[520px] l:w-[287px] l:h-[415px] m:w-[260px] m:h-[380px] mt-10 m:mt-0"
            />
            <div className="flex gap-3 l:gap-6 mt-8 l:mt-6">
              <div className="w-5 l:w-[25px] h-[1px] bg-[#1C9D74] mt-3" />
              <p className="xl:leading-[26px] xl:text-[20px] l:text-[14px] l:leading-[22px] text-[14px] leading-[21px] m:w-[240px] xl:w-[320px]">
                Сафиуллин Адель, совладелец и<br /> технолог компании
                «Герметдом»
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <p className="m:w-[260px] l:w-[593px] xl:w-[760px] text-[14px] leading-[18px] xl:text-[20px] xl:leading-[28px] l:text-[18px] l:leading-[24.5px]">
              Компания «Герметдом» занимается герметизацией, шлифовкой и
              покраской деревянных сооружений по РТ и ближайшим регионам с 2014
              года.
              <br />
              <br /> Мы являемся официальным дилером Biofa более 4-х лет. За это
              время было сдано более 1000 домов, покрашенных их продукцией, и
              продано более 30 000 литров масел-красок.
              <br />
              <br /> В последние года мы полностью перешли на работу
              масел-красок Biofa, так как они лучше всех показывают себя на
              практике. Начиная с нанесения, заканчивая гарантийными случаем, мы
              полностью доверяем и отдаем предпочтение работе с ними.
              <br />
              <br /> Также мы постоянно даем обратную связь заводу, чтобы
              улучшать продукт для конечного потребителя. Я лично готов показать
              объекты, на которых использовался данный продукт.
            </p>
            <div className="hidden l:flex justify-between w-full mt-6">
              {aboutData.map(({ id, head, sub }) => (
                <div key={id} className="flex flex-col gap-4">
                  <div className="text-[#9D1C45] xl:leading-[54px] xl:text-[54px] l:text-[45px] l:leading-[45px] font-semibold">
                    {head}
                  </div>
                  <p className="xl:text-[20px] xl:leading-[25px] l:text-[18px] l:leading-[22.5px] text-[#33282C]">
                    {sub}
                  </p>
                  <div className="w-15 h-[0.5px] bg-[#777777]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-y-10 m:gap-y-0 gap-x-5 m:gap-x-0 m:flex justify-between w-full mt-6 l:hidden">
        {aboutData.map(({ id, head, sub }) => (
          <div key={id} className="flex flex-col gap-4">
            <div className="text-[#9D1C45] text-[44px] leading-10 font-semibold">
              {head}
            </div>
            <p className="text-base leading-5 text-[#33282C]">{sub}</p>
            <div className="w-[60px] h-[0.5px] bg-[#777777]" />
          </div>
        ))}
      </div>
      <AnimatePresence>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          className="w-[300px] m-auto bg-white rounded-[24px] shadow-lg"
          overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center"
        >
          <ModalForm closeModal={closeModal} />
        </Modal>
      </AnimatePresence>
    </div>
  );
};

export default About;
