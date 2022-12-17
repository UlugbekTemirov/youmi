import FourCards from "../../../components/Cards/FourCards";
import Container from "../../../layout/Container";

const WeWorkWith = () => {
  return (
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
          header={["Образование", "Опыт работы", "Обучение", "Личная терапия"]}
          content={[
            "Диплом о высшем психологическом образовании и дополнительные сертификаты",
            "Подтвержденный опыт работы не менее 3-х лет",
            "Прохождение супервизии от 20 часов в год",
            "Прохождение личной терапии от 50 часов в год",
          ]}
        />
      </Container>
    </div>
  );
};

export default WeWorkWith;
