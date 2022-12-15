import Section from "../../layout/Section";

// image
import homeSection from "../../assets/images/homepageimg1.svg";

// global components
import { Button } from "../../components/Button/Button";
import Container from "../../layout/Container";
import ThreeCards from "../../components/ThreeCards/ThreeCards";

const Home = () => {
  return (
    <>
      <Section img={homeSection}>
        <h1 className="text-44 text-purple font-bold">Вместе мы справимся</h1>
        <p className="text-40 font-semibold text-charcoal w-[420px] leading-[140%] mb-[70px]">
          Найдите своего психолога онлайн
        </p>
        <Button>Найти психолога</Button>
        <p className="mt-[45px] font-semibold text-20 text-charcoal">
          2770 руб. за 50 минут сессии
        </p>
      </Section>
      <div className="pt-[100px]">
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
    </>
  );
};

export default Home;
