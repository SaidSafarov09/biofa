"use client";

import { Suspense, lazy } from "react";
const Main = lazy(() => import("@/components/Main"));
const About = lazy(() => import("@/components/shared/About"));
const Footer = lazy(() => import("@/components/shared/Footer"));
const MainCard = lazy(() => import("@/components/shared/MainCard"));
const ProductView = lazy(() => import("@/components/shared/ProductView"));
const Slider = lazy(() => import("@/components/shared/Slider"));

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Main />
      <MainCard />
      <ProductView />
      <About />
      <Slider />
      <Footer />
    </Suspense>
  );
}
