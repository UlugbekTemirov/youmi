import FourCards from "../../../components/Cards/FourCards";
import Container from "../../../layout/Container";

const RequiredDocuments = () => {
  return (
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

export default RequiredDocuments;
