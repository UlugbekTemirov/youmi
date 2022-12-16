import OwlCarousel from "react-owl-carousel";
import CarouselButton from "./CarouselButton";

const OwlCarouselDemo = () => {
  return (
    <>
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
        <CarouselButton>Фобии</CarouselButton>
        <CarouselButton>Неврозы</CarouselButton>
        <CarouselButton selected>Самооценка</CarouselButton>
        <CarouselButton>Апатия</CarouselButton>
        <CarouselButton>Стрессы</CarouselButton>
        <CarouselButton selected>Неуверенность в себе</CarouselButton>
        <CarouselButton selected>Мотивация</CarouselButton>
      </OwlCarousel>
      <OwlCarousel
        className="owl-theme mt-[30px]"
        dots={false}
        autoplay
        autoplayTimeout={2000}
        loop
        center
        margin={30}
        items={6}
      >
        <CarouselButton selected>Депрессивное состояние</CarouselButton>
        <CarouselButton>Безразличие</CarouselButton>
        <CarouselButton selected>Чувство тревоги</CarouselButton>
        <CarouselButton>Хроническая усталость</CarouselButton>
        <CarouselButton>Отношения</CarouselButton>
        <CarouselButton>Выгорание</CarouselButton>
      </OwlCarousel>
    </>
  );
};

export default OwlCarouselDemo;
