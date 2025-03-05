"use client";

import { Main } from "@/components/Main";
import { About } from "@/components/shared/About";
import { Footer } from "@/components/shared/Footer";
import { motion } from "framer-motion";
import { MainCard } from "@/components/shared/MainCard";
import { ProductView } from "@/components/shared/ProductView";
import { Slider } from "@/components/shared/Slider";

export default function Home() {
  return (
    <>
      <Main />
      <MainCard />
      <ProductView />
      <About />
      <Slider />
      <Footer />
    </>
  );
}
