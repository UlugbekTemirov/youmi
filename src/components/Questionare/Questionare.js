import Container from "../../layout/Container";
import QuestionaireItem from "./QuestionareItem";

const questions = [
  {
    id: 1,
    header: "Эффективно ли работать с психологом онлайн?",
    content:
      "Да, эффективно и уже является стандартной практикой во всем мире. За последние годы было проведено много научных исследований, доказывающих, что данный формат не уступает по эффективности традиционной очной психотерапии.",
  },
  { id: 2, header: "Как выбрать специалиста?", content: "No content yet!" },
  {
    id: 3,
    header:
      "Чувствую, что мне нужна помощь, но не понимаю в чём проблема. Как быть?",
    content: "No content yet!",
  },
  {
    id: 4,
    header: "Как вы отбираете психологов в базу?",
    content: "No content yet!",
  },
  {
    id: 5,
    header:
      "В чем разница между психологом, психотерапевтом и психиатром и как понять кто мне нужен?",
    content: "No content yet!",
  },
  {
    id: 6,
    header: "Как вы отбираете психологов в базу?",
    content: "No content yet!",
  },
  {
    id: 7,
    header: "Какое количество сессий мне необходимо, чтобы получить результат?",
    content: "No content yet!",
  },
];

const Questionaire = () => {
  return (
    <Container>
      <div id="#questionare" className="py-[110px]">
        <h1 className="text-40 text-purple font-extrabold text-center mb-[60px]">
          Вопросы - ответы
        </h1>
        {questions.map((question, ind) => (
          <QuestionaireItem key={ind} question={question} />
        ))}
      </div>
    </Container>
  );
};

export default Questionaire;
