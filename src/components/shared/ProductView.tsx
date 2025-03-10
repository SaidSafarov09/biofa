"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { productData } from "./helpers";
import { Button } from "../ui/Button";
import Image from "next/image";
import { ModalProduct } from "../ui/ModalProduct";
import Modal from "react-modal";
import useModal from "./useModal";
import { ModalForm } from "../ui/ModalForm";
import { PropsProduct } from "./helpers";

interface Product {
  id: number;
  cardMainText: any;
  cardSubText: any;
  priceMedium: any;
  price: any;
  bgImg: any;
}


export const ProductView = () => {
  const [isModalProductOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openModalProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModalProduct = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
      className="bg-[#EEEEEE] mt-[60px] m:mt-[50px] px-[30px] xl:px-[140px] py-[60px] l:py-[80px]"
    >
      <motion.p
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="text-[#9D1C45] font-semibold text-[30px] leading-[37.5px] m:text-[32px] m:leading-10 l:text-[36px] l:leading-[45px]"
      >
        Для каких видов работ используется наш продукт
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-col m:grid m:grid-cols-2 m:grid-rows-3 l:grid-cols-3 l:grid-rows-2 gap-5 xl:gap-10 mt-12"
      >
        {productData.map(
          (
            { id, cardMainText, cardSubText, priceMedium, price, bgImg },
            index
          ) => (
            <motion.div
              key={id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="cursor-pointer"
            >
              <div className="relative min-w-[300px] min-h-[360px] m:min-w-[260px] m:min-h-[380px] l:min-w-[287px] l:min-h-[425px] xl:min-w-[360px] xl:h-[520px]">
                {bgImg && (
                  <Image
                    src={bgImg}
                    alt="cardImg"
                    layout="fill"
                    objectFit="cover"
                    className="absolute rounded-[12px]"
                    onClick={openModal}
                  />
                )}
                <div className="absolute bottom-0 left-0 p-[18px] l:p-6 xl:p-8 flex flex-col gap-4">
                  <p className="text-white text-[18px] leading-[22.5px] l:text-[20px] l:leading-[25px] xl:text-[24px] xl:leading-[30px] font-semibold">
                    {cardMainText}
                  </p>
                  <p className="text-base leading-5 l:text-[18px] l:leading-[22.5px] xl:text-[20px] font-medium xl:leading-[25px] text-[#AAAAAA]">
                    {cardSubText}
                  </p>
                </div>
              </div>

              <div className="mt-5 l:mt-6 xl:mt-8 flex justify-between">
                <div className="flex flex-col">
                  <p className="text-[#777777] text-[14px] leading-[14px]  xl:leading-4 font-medium xl:text-base uppercase">
                    {priceMedium}
                  </p>
                  <p className="text-[#000] text-[20px] leading-5 l:text-[22px] l:leading-[22px] xl:leading-6 font-medium xl:text-[24px] uppercase">
                    {price}
                  </p>
                </div>
                <Button
                  id={id}
                  text="Подробнее"
                  className="px-3 py-2.5 xl:text-[20px] xl:leading-[25px] l:text-[18px] l:leading-[22.5px]"
                  onClick={() =>
                    openModalProduct({
                      id,
                      cardMainText,
                      cardSubText,
                      priceMedium,
                      price,
                      bgImg,
                    })
                  }
                />
              </div>
            </motion.div>
          )
        )}
      </motion.div>
      <AnimatePresence>
        <Modal
          isOpen={isModalProductOpen}
          onRequestClose={closeModalProduct}
          contentLabel="Modal"
          ariaHideApp={false}
          className="relative z-[100] py-[30px] px-5  m:px-[30] l:px-[43px] l:py-10 xl:p-10 bg-white rounded-lg mx-auto w-[320px] m:w-[540px] l:w-[786px] xl:w-[1070px]"
          overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center"
        >
          <ModalProduct closeModalProduct={closeModalProduct} productId={selectedProduct ? selectedProduct.id : 0}/>
        </Modal>
      </AnimatePresence>
      <AnimatePresence>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          contentLabel="Заказать покраску"
          className="w-[300px] m-auto bg-white rounded-[24px] shadow-lg"
          overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center"
        >
          <ModalForm closeModal={closeModal} />
        </Modal>
      </AnimatePresence>
    </motion.div>
  );
};
