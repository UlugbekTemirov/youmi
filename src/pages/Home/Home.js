import Section from "../../layout/Section";

// image
import homeSection from "../../assets/images/homepageimg1.svg";
import vector from "../../assets/images/Vector.svg";

// layout
import Container from "../../layout/Container";

// global components
import { Button } from "../../components/Button/Button";
import ThreeCards from "../../components/Cards";
import Carousel from "./components/Carousel";
import FourCards from "../../components/Cards/FourCards";
import { FourSteps } from "../../components";

const Home = () => {
  return (
    <>
      <Section img={homeSection}>
        <h1 className="text-44 text-purple font-bold">Вместе мы справимся</h1>
        <p className="text-40 font-semibold text-charcoal w-[420px] leading-[140%] mb-[70px] pt-[10px]">
          Найдите своего психолога онлайн
        </p>
        <Button>Найти психолога</Button>
        <p className="mt-[45px] font-semibold text-20 text-charcoal">
          2770 руб. за 50 минут сессии
        </p>
      </Section>
      <div className="py-[100px]">
        <Container>
          <h1 className="text-purple font-extrabold text-40 text-center mb-[100px]">
            Онлайн-психотерапия становится комфортнее
          </h1>
          <ThreeCards
            header={[
              "Свобода возможностей",
              "Будьте уверены в своем выборе",
              "Ваш запрос важен",
            ]}
            body={[
              "Проходите сессию из любой точки мира, не тратьте время на дорогу",
              "Мы работаем только с квалифицированными специалистами, которые прошли строгий отбор",
              "Подберем опытного специалиста под ваш запрос",
            ]}
            img={["planet", "checkmark", "target"]}
          />
        </Container>
      </div>
      <div className="bg-aqua-light py-[80px]">
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
        <Carousel />
      </div>
      <div className="py-[100px]">
        <Container>
          <h1 className="text-24 font-semibold">Мы работаем только с</h1>
          <h1 className="text-40 text-purple font-extrabold mt-2 max-w-[1080px] relative">
            квалифицированными специалистами, которые прошли наш строгий отбор
            <span className="icon icon-underline absolute -bottom-2 right-[260px]"></span>
          </h1>
          <p className="mt-[27px] max-w-[780px] text-20 mb-[60px]">
            Помимо серии собеседований и испытаний по разработанной нами
            методологии, психологи предоставляют необходимые документы:
          </p>
          <FourCards
            img={["book", "watch"]}
            header={[
              "Образование",
              "Опыт работы",
              "Обучение",
              "Личная терапия",
            ]}
            content={[
              "Диплом о высшем психологическом образовании и дополнительные сертификаты",
              "Подтвержденный опыт работы не менее 3-х лет",
              "Прохождение супервизии от 20 часов в год",
              "Прохождение личной терапии от 50 часов в год",
            ]}
          />
        </Container>
      </div>
      <div className="py-[100px] bg-aqua-light">
        <Container>
          <h1 className="text-40 text-purple mb-[80px] text-center font-extrabold">
            Сделайте 4 шага навстречу психотерапии
          </h1>
          <FourSteps />
        </Container>
      </div>
    </>
  );
};

export default Home;
