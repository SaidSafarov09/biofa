import React from "react";
import Image from "next/image";
import { cardData } from "./helpers"; 

type Props = {
    className?: string
}

export const MainCard = ({className} : Props) => {
  return (
    <div className={`${className} flex justify-between l:gap-5 xl:gap-10`}>
      {cardData.map(({ id, title, text, image }) => (
        <div key={id} className="bg-white rounded-[12px] shadow-lg l:w-[210px] l:h-[267px] xl:w-[260px] xl:h-[284px] pt-[24px] px-4 border hover:border-[3px] border-[#9D1C45] group cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-110 relative">
          <Image
            src={image}
            alt={title}
            width={80}
            height={80} 
            className="absolute right-0 bottom-0 xl:w-20 xl:h-20 l:h-[70px] l:w-[70px]"
          />
          <p className="l:text-[18px] xl:text-[22px] font-semibold text-[#9D1C45] xl:leading-[27.5px]">{title}</p>
          <p className="l:text-sm xl:text-base text-[#777777] xl:w-[212px] leading-6 pt-4 group-hover:text-black">{text}</p>
        </div>
      ))}
    </div>
  );
};
