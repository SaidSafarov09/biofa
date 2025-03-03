"use client";

import { Main } from "@/components/Main";
import { About } from "@/components/shared/About";
import { Footer } from "@/components/shared/Footer";
import { ProductView } from "@/components/shared/ProductView";
import { Slider } from "@/components/shared/Slider";

export default function Home() {
  return (
    <>
      <Main />
      <ProductView />
      <About/>
      <Slider/>
      <Footer/>
    </>
  );
}
