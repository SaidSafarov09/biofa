import { ReactElement } from "react";

type PropsCardData = {
  id: number;
  title: string | ReactElement;
  text: string;
  image: string;
};

type PropsProduct = {
  id: number;
  cardMainText?: ReactElement;
  cardSubText?: ReactElement;
  priceMedium?: string;
  price?: ReactElement;
  bgImg?: string | any;
};

type PropsAbout = {
  id: number;
  head?: string;
  sub?: ReactElement;
};

export const cardData: PropsCardData[] = [
  {
    id: 1,
    title: "Обновление не требует шлифовки",
    text: "Прекрасно наносится новый слой на старый, с учетом того, что масла не имеют пленки и не отшелушиваются",
    image: "/mainCard1.svg",
  },
  {
    id: 2,
    title: "Премиум сегмент при средней цене",
    text: "Полностью немецкая технология и сырье, локализованное на территории РФ",
    image: "/mainCard2.svg",
  },
  {
    id: 3,
    title: (
      <>
        Наличие
        <br />и сервис
      </>
    ),
    text: "Фирменный магазин со складом на территории Казани, работающий 24/7",
    image: "/mainCard3.svg",
  },
  {
    id: 4,
    title: (
      <>
        Лидер по
        <br />
        экологичности
      </>
    ),
    text: "Процесс производства считается одним из самых чистых в мире, а итоговый продукт не имеет запахов и полностью безопасен для окружающих",
    image: "/mainCard4.svg",
  },
];

export const productData: PropsProduct[] = [
  {
    id: 1,
    cardMainText: (
      <>
        Наружный фасад
        <br />
        (срубы и брусы)
      </>
    ),
    cardSubText: (
      <>
        Рекомендовано защитить
        <br />
        по трехслойной системе
      </>
    ),
    priceMedium: "Средний Расчет",
    price: <>430 ₽ / м²</>,
    bgImg: "/card1.png",
  },
  {
    id: 2,
    cardMainText: (
      <>
        Внутренняя отделка
        <br />
        (стены и потолки)
      </>
    ),
    cardSubText: (
      <>
        Рекомендовано защитить
        <br />
        по двухслойной системе
      </>
    ),
    priceMedium: "Средний Расчет",
    price: <>330 ₽ / м²</>,
    bgImg: "/card2.png",
  },
  {
    id: 3,
    cardMainText: (
      <>
        Полы
        <br />
        Лестницы
      </>
    ),
    cardSubText: (
      <>
        Рекомендовано производить
        <br />
        покраску в 2 слоя
      </>
    ),
    priceMedium: "Средний Расчет",
    price: <>500 ₽ / м²</>,
    bgImg: "/card3.png",
  },
  {
    id: 4,
    cardMainText: (
      <>
        Террасы, причалы,
        <br />
        садовая мебель, беседки
      </>
    ),
    cardSubText: (
      <>
        Индивидуальный расчет
        <br />
        по факту
      </>
    ),
    priceMedium: "Средний Расчет",
    price: <>По Факту</>,
    bgImg: "/card4.png",
  },
  {
    id: 5,
    cardMainText: (
      <>
        Бани и сауны
        <br />
        (парилка, душевая и пр.)
      </>
    ),
    cardSubText: (
      <>
        Рекомендовано защитить
        <br />
        по двухслойной системе
      </>
    ),
    priceMedium: "Средний Расчет",
    price: <>450 ₽ / м²</>,
    bgImg: "/card5.png",
  },
  {
    id: 6,
    cardMainText: (
      <>
        Грунт-антисептик для
        <br />
        наружных применений
      </>
    ),
    cardSubText: (
      <>
        Перед основной покраской
        <br />
        либо на временную защиту
      </>
    ),
    priceMedium: "Средний Расчет",
    price: <>200 ₽ / м²</>,
    bgImg: "/card6.png",
  },
];

export const aboutData: PropsAbout[] = [
  {
    id: 1,
    head: "№1",
    sub: (
      <>
        В городе
        <br />
        Казани и РТ
      </>
    ),
  },
  {
    id: 2,
    head: "9+",
    sub: (
      <>
        Лет надежной
        <br />
        работы
      </>
    ),
  },
  {
    id: 3,
    head: "1000+",
    sub: (
      <>
        Покрашенных
        <br />
        домов
      </>
    ),
  },
  {
    id: 4,
    head: "4",
    sub: (
      <>
        Города
        <br />
        партнера
      </>
    ),
  },
];