"use client";

import React from "react";
import { Button } from "../ui/Button";
import Image from "next/image";
import Modal from "react-modal";
import { ModalForm } from "../ui/ModalForm";
import Link from "next/link";
import useModal from "./useModal";

export const Footer = () => {
  const phone = "+7 (953) 998-23-36";
  const email = "germetdom@gmail.com";
  const { isModalOpen, openModal, closeModal } = useModal();
  return (
    <div className="px-[30px] pb-9 xl:px-[140px] pt-[60px] l:pt-20">
      <div className="flex flex-col gap-y-10 l:gap-y-20">
        <div className="flex justify-center gap-x-5 xl:gap-x-10 flex-col m:flex-row">
          <div className="flex flex-col gap-y-10 l:gap-y-12">
            <p className="font-semibold text-[32px] leading-10 text-[#9D1C45]">
              Где мы находимся?
            </p>
            <p className="font-medium text-[24px] leading-6">Наши павильоны</p>
            <div className="flex gap-x-4 items-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#1C9D74]" />
              <div className="flex flex-col gap-y-3">
                <p className="leading-[22px] text-[18px] font-semibold">
                  г. Казань, ул.
                  <br className="hidden m:block l:hidden" /> Адоратского 14
                  <br />
                  <span className="text-[#777777] l:leading-[22px] l:text-base text-sm leading-6">
                    (ТЦ Торнадо, Павильоны слева)
                  </span>
                </p>
                <p className="text-[18px] leading-[22.5px] font-medium">
                  7:00–22:00
                </p>
              </div>
            </div>

            <div className="m:hidden">
              <iframe
                className="rounded-[18px] xl:w-[760px] xl:h-[390px] l:w-[517px] m:h-full m:w-[260px] w-full h-[260px]"
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A03aa25e5ea0e1575e27b32a61086df62d9a5962170a937dc9636a919f94053aa&amp;source=constructor"
                width="760"
                height="390"
              ></iframe>
            </div>
            <div className="flex flex-col gap-y-4">
              <p className="text-[#777777] text-[20px] leading-5">
                Номер телефона
              </p>
              <a
                href={`tel:${phone}`}
                className="text-[#33282C] font-bold leading-6 text-[24px]"
              >
                {phone}
              </a>
            </div>
            <Button
              text="Записаться на подбор краски"
              className="py-3 px-4 font-semibold l:w-max !text-[16px] w-full m:w-max h-10 m:h-max"
              variant="second"
              onClick={openModal}
            />
          </div>
          <div className="hidden m:block">
            <iframe
              className="rounded-[18px] xl:w-[760px] xl:h-[432px] l:w-[517px] m:h-full m:w-[260px] w-full h-[260px]"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Add448b5fe8d4f0e5e25de578ee656c95b9e98e94e21734427fef998b2206f183&amp;source=constructor"
              width="760"
              height="390"
            ></iframe>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#AAAAAA]" />
      </div>

      <div className="flex flex-col m:flex-row justify-between l:justify-center w-full items-center l:gap-x-[60px] xl:gap-x-[125px] mt-9">
          <div className="flex flex-col l:flex-row l:items-center gap-y-10 m:gap-y-4 l:w-full l:gap-x-[60px] xl:gap-x-[125px]">
            <Image src="/Logo.svg" alt="logo" width={224} height={40} />
            <div className="m:hidden items-center flex flex-col gap-y-4">
              <div className="flex items-center gap-x-2">
                <Image src="/phone.svg" alt="phone" width={12} height={12} />
                <a
                  href={`tel:${phone}`}
                  className="text-[#33282C] font-bold leading-4 "
                >
                  {phone}
                </a>
              </div>
              <div className="flex items-center gap-x-2">
                <Image src="/mail.svg" alt="mail" width={12} height={12} />
                <a
                  href={`mailto:${email}`}
                  className="text-[#33282C] font-bold leading-4 "
                >
                  {email}
                </a>
              </div>
            </div>
            <Link
              href="/policy"
              className="hidden m:block text-[#33282C] l:leading-4 xl:leading-[18px] font-medium l:text-[16px] xl:text-[18px]"
            >
              Политика
              <br className="hidden m:block l:hidden" /> конфиденциальности
            </Link>
          </div>
          <div className="mt-10 m:mt-0 flex flex-col m:flex-col-reverse l:flex-row gap-y-10 m:gap-y-4 l:w-full l:gap-x-[60px] xl:gap-x-[125px] justify-end">
            <Link
              href="/policy"
              className="m:hidden text-[#33282C] l:leading-4 xl:leading-[18px] font-medium l:text-[16px] xl:text-[18px]"
            >
              Политика
              <br className="hidden m:block l:hidden" /> конфиденциальности
            </Link>
            <div className="flex gap-x-4 justify-center m:justify-end items-center">
              <a href="https://t.me/tomy6638">
                <Image src="/tg.svg" alt="telegramm" width={32} height={32} />
              </a>
              <a href="https://wa.me/+79539982336">
                <Image src="/wa.svg" alt="whatsapp" width={32} height={32} />
              </a>
              <a href="https://instagram.com/germetdom">
                <Image
                  src="/inst.svg"
                  alt="instagramm"
                  width={32}
                  height={32}
                />
              </a>
            </div>
            <div className="hidden m:flex flex-col gap-y-4">
              <div className="flex items-center gap-x-2">
                <Image src="/phone.svg" alt="phone" width={12} height={12} />
                <a
                  href={`tel:${phone}`}
                  className="text-[#33282C] font-bold leading-4 "
                >
                  {phone}
                </a>
              </div>
              <div className="flex items-center gap-x-2">
                <Image src="/mail.svg" alt="mail" width={12} height={12} />
                <a
                  href={`mailto:${email}`}
                  className="text-[#33282C] font-bold leading-4 "
                >
                  {email}
                </a>
              </div>
            </div>
          </div>
        </div>
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
    </div>
  );
};
