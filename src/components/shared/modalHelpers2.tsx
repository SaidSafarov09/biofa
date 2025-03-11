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
  title: "Внутренняя отделка (стены и потолок)",
  subtitle: "Защита по двухслойной системе", 
  titleImg: "/layer2.svg", 
};

export const modalContent: Props[] = [
  {
    img: "/modal2Img1.png",
    imgHover: "/modal2Img1_bw.png",
    head: "Biofa 2044",
    optionsLeft: (
      <>
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
        <p>шелковисто-матовый</p>
        <p>да</p>
        <p>колеруется</p>
        <p>нет</p>
        <p>16-10 кв. м/л</p>
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
    img: "/modal2Img2.png",
    imgHover: "/modal2Img2_bw.png",
    head: "Biofa 1075",
    optionsLeft: (
      <>
        <p>Степень блеска</p>
        <p>Моющееся покрытие</p>
        <p>Колеруется</p>
        <p>Содержание антисептика</p>
        <p>Расход в 2 слоя</p>
        <p>Время высыхания</p>
        <p>Уход за окрашенной<br/>поверхностью</p>
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
        <p>BIOFA 4010, 4020. Восковые<br/>уходовые продукты BIOFA<br/>2085, 4030, 5076</p>
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
    img: "/modal2Img3.png",
    imgHover: "/modal2Img3_bw.png",
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
        <p>1 литр на 7 м2 или 140-150 мл/м2</p>
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
];
