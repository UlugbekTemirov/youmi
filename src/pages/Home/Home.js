// global components
import { Questions } from "../../components";

import Ambulance from "./components/Ambulance";
import OnlinePsychology from "./components/OnlinePsychology";
import Carousel from "./components/Carousel";
import WeWorkWith from "./components/WeWorkWith";
import MakeFourSteps from "./components/MakeFourSteps";
import FindYourPsyOnline from "./components/FindYourPsyOnline";
import { AppStore } from "../../components";
import Container from "../../layout/Container";

const Home = () => {
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
      header:
        "Какое количество сессий мне необходимо, чтобы получить результат?",
      content: "No content yet!",
    },
  ];

  window.scrollTo({
    top: 0,
  });

  return (
    <>
      <FindYourPsyOnline />
      <OnlinePsychology />
      <Carousel />
      <WeWorkWith />
      <MakeFourSteps />
      <Questions questions={questions} />
      <div className="bg-aqua-light py-[120px]">
        <AppStore buttonCentered>
          <h1 className="text-purple font-extrabold text-40">
            Оплачивая пакет от 4 сессий
          </h1>
          <p className="font-semibold text-20 mt-[35px] max-w-[580px]">
            мы дарим доступ к приложению с виртуальным психологом.
          </p>
          <div className="flex items-center mt-[45px]">
            <span className="icon icon-correct"></span>
            <h1 className="ml-[30px] max-w-[440px] pr-20 text-18">
              Прорабатывайте себя с помощью упражнений и аудиопрактик
            </h1>
          </div>
          <div className="flex items-center mt-[45px]">
            <span className="icon icon-correct"></span>
            <h1 className="ml-[30px] max-w-[440px] text-18">
              Ведите личный дневник настроения и получайте подробную статистику
              о себе
            </h1>
          </div>
          <div className="flex items-center mt-[45px]">
            <span className="icon icon-correct"></span>
            <h1 className="ml-[30px] max-w-[440px] text-18">
              Расскажите виртуальному психологу о своих чувствах и он подберет
              актуальный материал
            </h1>
          </div>
        </AppStore>
      </div>
      <Ambulance />
    </>
  );
};

export default Home;
