import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "./Button";
import Modal from "react-modal";
import { ModalForm } from "./ModalForm";
import useModal from "../shared/useModal";

// Динамический импорт данных для продукта
const importProductData = (productId: number) => {
  switch (productId) {
    case 1:
      return import("../shared/modalHelpers");
    case 2:
      return import("../shared/modalHelpers2");
    case 3:
      return import("../shared/modalHelpers3");
    case 4:
      return import("../shared/modalHelpers4");
    case 5:
      return import("../shared/modalHelpers5");
    case 6:
      return import("../shared/modalHelpers6");
    default:
      return import("../shared/modalHelpers");
  }
};

type Props = {
  closeModalProduct: () => void;
  productId: number;
};

export const ModalProduct = ({ closeModalProduct, productId }: Props) => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const [modalData, setModalData] = useState<any>(null);

  useEffect(() => {
    const fetchProductData = async () => {
      const { commonInfo, modalContent } = await importProductData(productId);
      setModalData({ commonInfo, modalContent });
    };

    fetchProductData();
  }, [productId]);

  if (!modalData) return null;

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
            {modalData.commonInfo.title}
          </p>
          <p className="font-medium l:text-[20px] text-[#aaaaaa] m:text-[18px] text-base leading-[18px]">
            {modalData.commonInfo.subtitle}
          </p>
        </div>
        <Image src={modalData.commonInfo.titleImg} width={52} height={52} alt="layer" />
      </div>
      <div className="relative z-[100] flex overflow-y-auto max-h-[60vh] m:max-h-[70vh] flex-wrap gap-2.5 m:gap-[20px] l:gap-[45px] m:px-[10px] l:px-[27px] xl:p-0 justify-center l:justify-start">
        {modalData.modalContent.map((content: any, index: any) => (
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
            <div className="bg-white py-[10px] px-1 m:p-[10px] rounded-[8px] flex flex-row justify-between  gap-x-2">
              {content.volumePrice.map((item: any, index: any) => (
                <div
                  key={index}
                  className={`flex flex-col items-start ${
                    index !== 0 ? "border-l-[0.5px] border-black pl-2" : ""
                  }`}
                >
                  <p className="text-xs text-[#33282C] font-medium">
                    {item.volume}
                  </p>
                  <p className="text-[#1C9D74] font-medium text-xs m:text-[13px]">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>
            <Button
              text="Рассчитать масло"
              className="px-2.5 py-2 rounded-[12px]"
              onClick={openModal}
            />
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
    </motion.div>
  );
};