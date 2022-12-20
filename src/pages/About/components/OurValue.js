import Container from "../../../layout/Container";
import ThreeCards from "../../../components/Cards/ThreeCards";

const OurValue = () => {
  return (
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
  );
};

export default OurValue;
