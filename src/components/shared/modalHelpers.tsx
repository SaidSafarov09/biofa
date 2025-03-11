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
  title: "Наружный фасад (срубы и брусы)",
  subtitle: "Защита по трехслойной системе", 
  titleImg: "/layer3.svg", 
};

export const modalContent: Props[] = [
  {
    img: "/modalImg1.png",
    imgHover: "/modalImg1_bw.png",
    head: "Biofa 2043",
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
        <p>да</p>
        <p>20-15 кв. м/л</p>
        <p>16-24 часа</p>
      </>
    ),
    volumePrice: [
      { volume: "0.4 л", price: "2060 ₽" },
      { volume: "1 л", price: "4763 ₽" },
      { volume: "2.5 л", price: "10897 ₽" },
      { volume: "10 л", price: "38476 ₽" },
    ],
  },
  {
    img: "/modalImg2.png",
    imgHover: "/modalImg2_bw.png",
    head: "Biofa 2043 Матовая",
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
        <p>да</p>
        <p>20-15 кв. м/л</p>
        <p>16-24 часа</p>
      </>
    ),
    volumePrice: [
      { volume: "0.4 л", price: "1903 ₽" },
      { volume: "1 л", price: "5130 ₽" },
      { volume: "2.5 л", price: "11663 ₽" },
      { volume: "10 л", price: "41244 ₽" },
    ],
  },
  {
    img: "/modalImg3.png",
    imgHover: "/modalImg3_bw.png",
    head: "Biofa 1075",
    optionsLeft: (
      <>
        <p>Степень блеска</p>
        <p>Моющее покрытие</p>
        <p>Колеруется</p>
        <p>Содержание антисептика</p>
        <p>Расход в 2 слоя</p>
        <p>Время высыхания</p>
        <p>Уход за окрашенной<br/> поверхностью</p>
      </>
    ),
    optionsRight: (
      <>
        <p>шелковисто-матовый</p>
        <p>да</p>
        <p>колеруется</p>
        <p>нет</p>
        <p>16-10 кв. м/л</p>
        <p>12-16 часов</p>
        <p>
          BIOFA 4010, 4020. Восковые<br/> уходовые продукты BIOFA<br/> 2085, 4030, 5076
        </p>
      </>
    ),
    volumePrice: [
      { volume: "0.4 л", price: "1331 ₽" },
      { volume: "1 л", price: "3309 ₽" },
      { volume: "2.5 л", price: "7200 ₽" },
      { volume: "10 л", price: "27947 ₽" },
    ],
  },

  {
    img: "/modalImg4.png",
    imgHover: "/modalImg4_bw.png",
    head: "Biofa 5075",
    optionsLeft: (
      <>
        <p>Материал поверхности</p>
        <p>Степень блеска</p>
        <p>Колеруется</p>
        <p>Содержание антисептика</p>
        <p>Расход в 2 слоя</p>
        <p>Время высыхания</p>
      </>
    ),
    optionsRight: (
      <>
        <p>древесина</p>
        <p>полуматовый</p>
        <p>колеруется</p>
        <p>да</p>
        <p>1 л на 7 м² или 140-150 мл/м²</p>
        <p>16-24 часа</p>
      </>
    ),
    volumePrice: [
      { volume: "0.4 л", price: "894 ₽" },
      { volume: "1 л", price: "2211 ₽" },
      { volume: "2.5 л", price: "5434 ₽" },
      { volume: "10 л", price: "21132 ₽" },
    ],
  },
  {
    img: "/modalImg5.png",
    imgHover: "/modalImg5_bw.png",
    head: "Biofa 8405",
    optionsLeft: (
      <>
        <p>Назначение</p>
        <p>Материал поверхности</p>
        <p>Степень блеска</p>
        <p>Колеруется</p>
        <p>Расход в 2 слоя</p>
        <p>Время высыхания</p>
      </>
    ),
    optionsRight: (
      <>
        <p>для торцов</p>
        <p>древесина</p>
        <p>полуглянцевый</p>
        <p>колеруется</p>
        <p>3 м²/л</p>
        <p>6 часов</p>
      </>
    ),
    volumePrice: [
      { volume: "0.4 л", price: "1260 ₽" },
      { volume: "1 л", price: "3318 ₽" },
      { volume: "2.5 л", price: "8106 ₽" },
      { volume: "10 л", price: "31878 ₽" },
    ],
  },
];
