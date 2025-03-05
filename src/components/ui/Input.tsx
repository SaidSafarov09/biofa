"use client";
import { useState } from "react";
import Image from "next/image";

type Props = {
  placeholder?: string;
  src: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ placeholder, src, type = "text", value, onChange }: Props) {
  return (
    <div className="relative w-full max-w-md">
      <Image
        src={src}
        alt="icon"
        width={12}
        height={12}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-500"
      />
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full l:w-[210px] pl-12 pr-4 py-2 rounded-[12px] bg-white text-gray-600 border-none shadow-md focus:outline-none focus:ring-2 focus:ring-transparent ${
          type === "number" 
            ? "!appearance-none ![&::-webkit-outer-spin-button]:appearance-none ![&::-webkit-inner-spin-button]:appearance-none ![&::-moz-appearance]:textfield"
            : ""
        }`}
      />
    </div>
  );
}
