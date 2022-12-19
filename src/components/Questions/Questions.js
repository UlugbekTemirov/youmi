import Container from "../../layout/Container";
import QuestionsItems from "./QuestionsItems";

const Questions = ({ questions }) => {
  return (
    <Container>
      <div id="#questionare" className="py-[110px]">
        <h1 className="text-40 text-purple font-extrabold text-center mb-[60px]">
          Вопросы - ответы
        </h1>
        {questions.map((question, ind) => (
          <QuestionsItems key={ind} question={question} />
        ))}
      </div>
    </Container>
  );
};

export default Questions;
