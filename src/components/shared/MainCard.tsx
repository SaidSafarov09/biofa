import React from "react";
import Image from "next/image";
import { cardData } from "./helpers";

type Props = {
  className?: string;
};

const MainCard = ({ className }: Props) => {
  return (
    <div className="flex justify-center w-full relative mt-[-65px] m:mt-[-75px] l:mt-[-105px] xl:mt-[-125px]">
      <div
        className={`${className} grid grid-rows-4 grid-cols-1 m:grid-rows-2 m:grid-cols-2 l:flex justify-between gap-5 xl:gap-10`}
      >
        {cardData.map(({ id, title, text, image }, index) => (
          <div
            key={id}
            className={`bg-white rounded-[12px] shadow-lg w-[300px] h-[238px] m:w-[260px] l:w-[210px] l:h-[267px] xl:w-[260px] xl:h-[284px] px-6 py-6 l:py-9 l:pt-[24px] l:px-4 border hover:border-[3px] border-[#9D1C45] group cursor-pointer transform transition-transform duration-300 ease-in-out ${
              index === 2 ? "l:scale-110 l:border-[3px]" : ""
            } hover:scale-110 relative`}
          >
            {image && (
              <Image
                src={image}
                alt="card"
                width={80}
                height={80}
                className="absolute right-0 bottom-0 xl:w-20 xl:h-20 l:h-[70px] l:w-[70px] w-[60px] h-[60px]"
              />
            )}
            <p className="w-[212px] l:w-full text-[20px] leading-[25px] xl:text-[22px] font-semibold text-[#9D1C45] xl:leading-[27.5px]">
              {title}
            </p>
            <p className={`text-sm leading-[21px] xl:text-base text-[#777777] w-[212px] l:w-full xl:leading-6 pt-4 group-hover:text-black ${index === 2 ? "text-black" : ""}`}>
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainCard;
