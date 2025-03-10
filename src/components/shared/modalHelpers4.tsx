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
  title: "Террасы, причалы, настилы, садовая мебель, беседки",
  subtitle: "Защита по двухслойной системе",
  titleImg: "/layer2.svg",
};

export const modalContent: Props[] = [
  {
    img: "/modal4Img1.png",
    head: "Biofa 3753",
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
        <p>12-16 часов</p>
      </>
    ),
    volumePrice: [
      { volume: "0.4 л", price: "2120 ₽" },
      { volume: "1 л", price: "4900 ₽" },
      { volume: "2.5 л", price: "11274 ₽" },
      { volume: "10 л", price: "42858 ₽" },
    ],
  },
];
