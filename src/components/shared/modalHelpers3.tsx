import { ReactElement } from "react";

type VolumePrice = {
  volume: string;
  price: string;
};

type Props = {
  img?: string;
  imgHover?: string;
  head: string;
  optionsLeft?: ReactElement;
  optionsRight?: ReactElement;
  volumePrice: VolumePrice[];
};

type CommonInfo = {
  title: string;
  subtitle: string;
  titleImg: string;
};

export const commonInfo: CommonInfo = {
  title: "Полы и лестницы",
  subtitle: "Защита по двухслойной системе",
  titleImg: "/layer2.svg",
};

export const modalContent: Props[] = [
  {
    img: "/modal3Img1.png",
    imgHover: "/modal3Img1_bw.png",
    head: "Biofa 9032",
    optionsLeft: (
      <>
        <p>Материал поверхности</p>
        <p>Степень блеска</p>
        <p>Моющееся покрытие</p>
        <p>Колеруется</p>
        <p>Содержание антисептика</p>
        <p>Расход в 2 слоя</p>
        <p>Время высыхания</p>
      </>
    ),
    optionsRight: (
      <>
        <p>древесина</p>
        <p>шелковисто-матовый</p>
        <p>да</p>
        <p>колеруется</p>
        <p>нет</p>
        <p>20-15 кв. м/л</p>
        <p>16-24 часа</p>
      </>
    ),
    volumePrice: [
      { volume: "0.4 л", price: "1932 ₽" },
      { volume: "1 л", price: "4912 ₽" },
      { volume: "2.5 л", price: "11444 ₽" },
      { volume: "10 л", price: "43625 ₽" },
    ],
  },
  {
    img: "/modal3Img2.png",
    imgHover: "/modal3Img2_bw.png",
    head: "Biofa 8500",
    optionsLeft: (
        <>
          <p>Материал поверхности</p>
          <p>Степень блеска</p>
          <p>Моющееся покрытие</p>
          <p>Колеруется</p>
          <p>Содержание антисептика</p>
          <p>Расход в 2 слоя</p>
          <p>Время высыхания</p>
        </>
      ),
      optionsRight: (
        <>
          <p>древесина</p>
          <p>матовый</p>
          <p>да</p>
          <p>колеруется</p>
          <p>нет</p>
          <p>40-30 кв. м/л</p>
          <p>16-24 часа</p>
        </>
      ),
    volumePrice: [
      { volume: "0.4 л", price: "2193 ₽" },
      { volume: "1 л", price: "5072 ₽" },
      { volume: "2.5 л", price: "12098 ₽" },
      { volume: "10 л", price: "48351 ₽" },
    ],
  },
];
