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
  title: "Бани и сауны (парилка, душевая и пр.)",
  subtitle: "Защита по двухслойной системе",
  titleImg: "/layer2.svg",
};

export const modalContent: Props[] = [
  {
    img: "/modal5Img1.png",
    imgHover: "/modal5Img1_bw.png",
    head: "Biofa 2065",
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
        <p>пол, потолки, стены</p>
        <p>древесина</p>
        <p>шелковисто-матовый</p>
        <p>колеруется</p>
        <p>1 литр на 10 м2</p>
        <p>16-24 часа</p>
      </>
    ),
    volumePrice: [
      { volume: "0.4 л", price: "2258 ₽" },
      { volume: "1 л", price: "5513 ₽" },
      { volume: "2.5 л", price: "12138 ₽" },
    ],
  },
];
