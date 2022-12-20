import Container from "../../../layout/Container";
import ThreeCards from "../../../components/Cards/ThreeCards";

const OnlinePsychology = () => {
  return (
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
  );
};

export default OnlinePsychology;
