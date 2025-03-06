import { motion } from "framer-motion";
import React, { useState } from "react";
import { modalContent } from "../shared/modalHelpers";
import Image from "next/image";
import { Button } from "./Button";

import Modal from "react-modal";
import { ModalForm } from "./ModalForm";

type Props = {
  closeModalProduct?: any;
};

export const ModalProduct = ({ closeModalProduct }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="reletive"
    >
      <div
        role="button"
        className="absolute top-[-36px] right-0"
        onClick={closeModalProduct}
      >
        <Image src="/close.svg" width={24} height={24} alt="close" />
      </div>
      <div className="flex justify-between mb-2.5 l:mb-10">
        <div className="flex flex-col gap-y-2 l:gap-y-3">
          <p className="font-semibold text-[#9D1C45] text-[20px] m:text-[24px] l:text-[32px] leading-6">
            Наружный фасад (срубы и брусы)
          </p>
          <p className="font-medium l:text-[20px] text-[#aaaaaa] m:text-[18px] text-base leading-[18px]">
            Защита по трехслойной системе
          </p>
        </div>
        <Image src="/layer.svg" width={52} height={52} alt="layer" />
      </div>
      <div className="relative z-[100] flex overflow-y-auto max-h-[70vh] flex-wrap gap-2.5 m:gap-[20px] l:gap-[45px] m:px-[10px] l:px-[27px] xl:p-0 justify-center l:justify-start">
        {modalContent.map((content, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-[#F9F9F9] rounded-[12px] px-4 py-6 justify-between l:w-[300px] h-[578px]"
          >
            {content.img && (
              <Image
                src={content.img}
                alt={content.head}
                width={132}
                height={132}
              />
            )}
            <p className="text-[#1C9D74] font-semibold text-[20px]">
              {content.head}
            </p>
            <div className="flex justify-between">
              <div className="text-[#777777] text-[10px] font-medium flex flex-col gap-1.5">
                {content.optionsLeft}
              </div>
              <div className="text-[10px] flex flex-col gap-1.5 text-right tracking-[0]">
                {content.optionsRight}
              </div>
            </div>
            <div className="bg-white p-[10px] rounded-[8px] flex flex-col gap-y-1 flex-wrap">
              <div className="flex w-full justify-between text-[12px] text-[#33282C]">
                {content.volume}
              </div>
              <div className="flex w-full justify-between gap-x-1 price-container text-white text-[12px] font-medium">
                {content.price}
              </div>
            </div>
            <Button
              text="Рассчитать масло"
              className="px-2.5 py-2 rounded-[12px]"
              onClick={openModal}
            />
          </div>
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className="w-[300px] m-auto bg-white rounded-[24px] shadow-lg"
        overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center"
      >
        <motion.div
          initial={{ y: -1000, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <ModalForm closeModal={closeModal} />
        </motion.div>
      </Modal>
    </motion.div>
  );
};