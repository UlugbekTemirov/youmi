// layout
import Section from "../../layout/Section";
import Container from "../../layout/Container";

// images
import woman from "../../assets/images/woman.svg";
import circle from "../../assets/images/circle.svg";
import ThreeCards from "../../components/Cards";
import Professionals from "./components/Professionals";
import FourCards from "../../components/Cards/FourCards";
import HistoryOfProject from "./components/HistoryOfProject";
import OwlCarouselDemo from "../Home/components/OwlCarousel";

const About = () => {
  const textstyle = "font-extrabold text-44 text-purple";

  return (
    <>
      <Section img={woman}>
        <h1 className={`${textstyle}  mb-[25px]`}>В YouMi вы не одни</h1>
        <h1 className={`${textstyle} relative`}>
          Вместе мы справимся
          <img className="absolute -top-2 -left-8" src={circle} alt="circle" />
        </h1>
      </Section>
      <div className="pt-[90px] pb-[120px]">
        <Container>
          <h1 className="text-40 font-extrabold text-purple text-center mb-[93px]">
            Наши ценности
          </h1>
          <ThreeCards
            img={["rocket", "chat", "lightbulb"]}
            header={[
              "Вместе мы справимся",
              "Забота на расстоянии",
              "Думаем о важном",
            ]}
            body={[
              "Мы всегда рядом. Свяжитесь с психологом в любое время и получите необходимую помощь.",
              "Мы позаботились о том, чтобы вы чувствовали нашу поддержу постоянно. Для этого мы создали приложение с виртуальным психологом.",
              "Займитесь главным, а напоминание о предстоящих сессиях мы взяли на себя.",
            ]}
          />
        </Container>
      </div>
      <div className="py-[80px] bg-aqua-light">
        <Container>
          <Professionals />
        </Container>
      </div>
      <div className="pt-[100px] pb-[120px]">
        <Container>
          <h1 className="font-semibold max-w-[840px] text-24">
            Помимо серии собеседований и испытаний по разработанной нами
            методологии, психологи предоставляют
          </h1>
          <h1 className="text-40 text-purple font-extrabold mt-[10px] mb-[60px]">
            необходимые документы:
          </h1>
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
      <div className="pt-[80px] pb-[100px] bg-aqua-light">
        <Container>
          <h1 className="text-center text-purple font-extrabold text-40">
            История проекта
          </h1>
          <HistoryOfProject />
        </Container>
      </div>
      <div className="py-[120px]">
        <Container>
          <h1 className="text-center text-purple font-extrabold text-40 mb-[90px]">
            О нас пишут
          </h1>
          <div>
            <OwlCarouselDemo />
          </div>
        </Container>
      </div>
    </>
  );
};

export default About;
