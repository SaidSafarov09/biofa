import { ReactElement } from "react";

type VolumePrice = {
  volume: string;
  price: string;
};

type Props = {
  img?: string;
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
  title: "Грунт-антисептик для наружных применений ",
  subtitle: "Перед основной покраской либо на временную защиту",
  titleImg: "/layer.svg",
};

export const modalContent: Props[] = [
  {
    img: "/modal6Img1.png",
    head: "Biofa 8750",
    optionsLeft: (
      <>
        <p>Назначение</p>
        <p>Степень блеска</p>
      </>
    ),
    optionsRight: (
      <>
        <p>для наружных применений</p>
        <p>полуматовый</p>
      </>
    ),
    volumePrice: [
      { volume: "0.4 л", price: "936 ₽" },
      { volume: "1 л", price: "2023 ₽" },
      { volume: "2.5 л", price: "4342 ₽" },
      { volume: "10 л", price: "15398 ₽" },
    ],
  },
  {
    img: "/modal6Img2.png",
    head: "Biofa 8750",
    optionsLeft: (
      <>
        <p>Назначение</p>
        <p>Материал поверхности</p>
        <p>Колеруется</p>
        <p>Содержание антисептика</p>
        <p>Время высыхания</p>
      </>
    ),
    optionsRight: (
      <>
        <p>для внутренних работ</p>
        <p>древесина</p>
        <p>не колеруется</p>
        <p>нет</p>
        <p>8-12 часов</p>

      </>
    ),
    volumePrice: [
      { volume: "0.4 л", price: "1200 ₽" },
      { volume: "1 л", price: "2852 ₽" },
      { volume: "2.5 л", price: "6571 ₽" },
      { volume: "10 л", price: "23141 ₽" },
    ],
  },
];
