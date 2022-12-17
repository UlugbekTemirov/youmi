import Container from "../../../layout/Container";
import OwlCarousel from "react-owl-carousel";
import CarouselButton from "./CarouselButton";
import vector from "../../../assets/images/Vector.svg";

const data = [
  [
    { selected: false, text: "Фобии" },
    { selected: false, text: "Неврозы" },
    { selected: true, text: "Самооценка" },
    { selected: false, text: "Апатия" },
    { selected: false, text: "Стрессы" },
    { selected: false, text: "Неуверенность в себе" },
    { selected: true, text: "Неуверенность в себе" },
    { selected: true, text: "Мотивация" },
  ],
  [
    { selected: true, text: "Депрессивное состояние" },
    { selected: false, text: "Безразличие" },
    { selected: true, text: "Чувство тревоги" },
    { selected: false, text: "Хроническая усталость" },
    { selected: false, text: "Отношения" },
    { selected: false, text: "Выгорание" },
  ],
];

const Carousel = () => {
  return (
    <div className="bg-aqua-light py-[80px] pb-[90px]">
      <Container>
        <h1 className="font-semibold text-center text-24">
          Вместе мы справимся
        </h1>
        <h1 className="text-40 text-purple text-center font-extrabold mb-5 mt-2">
          В YouMi вы не одни
        </h1>
        <p className="w-[578px] mx-auto text-20 text-center mb-[150px] relative">
          Профессиональные психологи помогут разобрать вопросы, которые вы не
          можете решить в одиночку:
          <img
            className="absolute -right-20 -bottom-[88px]  rotate-[14deg]"
            src={vector}
            alt="vector"
          />
        </p>
      </Container>
      <OwlCarousel
        className="owl-theme"
        dots={false}
        autoplay
        autoplayTimeout={2000}
        loop
        center
        margin={30}
        items={7}
      >
        {data[0].map((item, index) => (
          <CarouselButton key={index} selected={item.selected}>
            {item.text}
          </CarouselButton>
        ))}
      </OwlCarousel>
      <OwlCarousel
        className="owl-theme -mt-[30px]"
        dots={false}
        autoplay
        autoplayTimeout={2000}
        loop
        center
        margin={30}
        items={5}
      >
        {data[1].map((item, index) => (
          <CarouselButton key={index} selected={item.selected}>
            {item.text}
          </CarouselButton>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Carousel;
