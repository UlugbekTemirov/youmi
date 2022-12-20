import Container from "../../../layout/Container";
import FourSteps from "../../../components/FourSteps/FourSteps";
import FourStepFooter from "./FourStepFooter";

const MakeFourSteps = () => {
  return (
    <div className="py-[100px] bg-aqua-light">
      <Container>
        <h1 className="text-40 text-purple mb-[80px] text-center font-extrabold">
          Сделайте 4 шага навстречу психотерапии
        </h1>
        <FourSteps
          header={[
            "Заполните анкету,",
            "Ознакомьтесь с профилями",
            "Определите дату и время",
            "Пройдите тестирование",
          ]}
          content={[
            "ответив на 5 простых вопросов, определив тему и пожелания по психологу.",
            "специалистов и посмотрите видео-визитки. Выберите психолога с которым вам будет комфортно.",
            "первой сессии. Если у вас поменяются планы, вы сможете ее отменить или перенести.",
            "в личном кабинете для того, чтобы сделать первую сессию более продуктивной.",
          ]}
        />
        <FourStepFooter />
      </Container>
    </div>
  );
};
export default MakeFourSteps;
