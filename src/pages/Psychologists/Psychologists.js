import Section from "../../layout/Section";
import other_woman_m from "../../assets/images/other_woman_m.svg";
import {
  Button,
  FourSteps,
  HugPhone,
  PersonContent,
  Questions,
} from "../../components";
import Container from "../../layout/Container";
import globe from "../../assets/icons/planet.svg";
import clock from "../../assets/icons/watch.svg";
import rocket from "../../assets/icons/rocket.svg";
import chat from "../../assets/icons/chat.svg";
import bulb from "../../assets/icons/lightbulb.svg";
import book from "../../assets/images/book.svg";
import check_mark from "../../assets/images/checkmark.png";
import woman3 from "../../assets/images/woman3_m.svg";
import FourStepFooter from "../Home/components/FourStepFooter";
import { ButtonProfile, ButtonSupport } from "../../components/Button/Button";

const benefits = [
  {
    icon: globe,
    title: "Даем свободу выбора работать когда и где удобно",
    decr: "Вам не нужно арендовать кабинет! Все сессии проходят онлайн, поэтому неважно, где находитесь вы и клиент, можно работать из любой точки мира. Вы можете самостоятельно корректировать свой график работы и выбирать количество клиентов, ориентируясь на себя.",
  },
  {
    icon: clock,
    title: "Даем свободу выбора работать когда и где удобно",
    decr: "Вам не нужно арендовать кабинет! Все сессии проходят онлайн, поэтому неважно, где находитесь вы и клиент, можно работать из любой точки мира. Вы можете самостоятельно корректировать свой график работы и выбирать количество клиентов, ориентируясь на себя.",
  },
  {
    icon: rocket,
    title: "Даем свободу выбора работать когда и где удобно",
    decr: "Вам не нужно арендовать кабинет! Все сессии проходят онлайн, поэтому неважно, где находитесь вы и клиент, можно работать из любой точки мира. Вы можете самостоятельно корректировать свой график работы и выбирать количество клиентов, ориентируясь на себя.",
  },
  {
    icon: chat,
    title: "Даем свободу выбора работать когда и где удобно",
    decr: "Вам не нужно арендовать кабинет! Все сессии проходят онлайн, поэтому неважно, где находитесь вы и клиент, можно работать из любой точки мира. Вы можете самостоятельно корректировать свой график работы и выбирать количество клиентов, ориентируясь на себя.",
  },
  {
    icon: bulb,
    title: "Даем свободу выбора работать когда и где удобно",
    decr: "Вам не нужно арендовать кабинет! Все сессии проходят онлайн, поэтому неважно, где находитесь вы и клиент, можно работать из любой точки мира. Вы можете самостоятельно корректировать свой график работы и выбирать количество клиентов, ориентируясь на себя.",
  },
];

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

const Psychologists = () => {
  return (
    <div>
      <Section img={other_woman_m} whiteBg>
        <h1 className="text-purple font-extrabold text-40 leading-tight mb-[26px]">
          Практикуйте онлайн из любой точки мира
        </h1>
        <p className="text-18 mb-[60px] max-w-[460px]">
          Определяйте свою нагрузку самостоятельно, имея компьютер и стабильный
          интернет
        </p>
        <Button>Начать практику в YouMi</Button>
      </Section>
      <div className="py-[100px] bg-aqua-light">
        <Container>
          <h1 className="text-purple text-40 font-extrabold text-center mb-[50px]">
            Преимущества работы с YouMi
          </h1>
          <div className="pt-[70px]">
            {benefits.map((item, index, arr) => (
              <div
                className={`${
                  index === arr.length - 1 ? null : "mb-[140px]"
                }  flex ${
                  (index + 1) % 2 === 1 ? "justify-start" : "justify-end"
                }`}
                key={index}
              >
                <div className="relative w-3/5">
                  <div className="bg-white rounded-20 pt-[100px] px-[60px] pb-[50px]">
                    <div className="relative">
                      <img
                        src={item.icon}
                        className="w-[160px] h-[160px] absolute -top-[165px] left-0"
                        alt=""
                      />
                    </div>
                    <p className="text-24 font-semibold mt-3">{item.title}</p>
                    <p>{item.decr}</p>
                  </div>
                  <div className="absolute top-[10px] -z-10 left-[10px] w-full h-full bg-aqua-dark rounded-20"></div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
      <div className="py-[120px]">
        <Container>
          <h1 className="text-purple text-40 font-extrabold text-center mb-[80px]">
            Ждем от вас
          </h1>
          <div className="grid grid-cols-7 grid-rows-3 gap-6">
            <div className="col-span-7 px-[60px] py-[30px] flex items-center justify-between bg-aqua rounded-20">
              <div className="w-[20%]">
                <img src={book} alt="" />
              </div>
              <div className="w-[80%]">
                <p className="text-24 font-semibold mb-[10px]">Документы</p>
                <p className="text-20">
                  подтверждающие дополнительное образование в определенном
                  направлении психотерапии. Мы рассматриваем только длительные
                  программы обучения, около 500 часов.
                </p>
              </div>
            </div>
            <div className="col-span-3 bg-aqua rounded-20 h-[156px] py-[25px] px-[60px]">
              <p className="text-24 font-semibold">Диплом</p>
              <p className="text-20">
                об окончании профильного высшего учебного заведения.
              </p>
            </div>
            <div className="col-span-2 bg-aqua rounded-20 h-[156px] py-[25px] px-[60px]">
              <p className="text-24 font-semibold">Прохождение </p>
              <p className="text-20">супервизии от 20 часов в год.</p>
            </div>
            <div className="col-span-2 bg-aqua rounded-20 h-[156px] py-[25px] px-[60px]">
              <p className="text-24 font-semibold">Прохождение </p>
              <p className="text-20">личной терапии от 50 часов в год.</p>
            </div>
            <div className="col-span-7 px-[60px] py-[30px] flex items-center justify-between bg-aqua rounded-20 -mt-[50px] h-[260px]">
              <div className="w-[20%]">
                <img src={check_mark} alt="" />
              </div>
              <div className="w-[80%]">
                <p className="text-24 font-semibold mb-[10px]">
                  Подтвержденнный опыт работы
                </p>
                <p className="text-20">
                  не менее 3-х лет. Учитывается только опыт консультирования
                  за оплату и не в рамках учебной программы.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-aqua-light py-[120px]">
        <Container>
          <FourSteps
            arrowtype
            header={[
              "Заполните анкету",
              "Дождитесь подтверждения",
              "Пройдите дополнительный отбор,",
              "Заполните данные",
            ]}
            content={[
              "и прикрепите копии ваших дипломов об окончании профильного высшего учебного заведения и документы, подтверждающие дополнительное образование.",
              "от отдела проверки. Средний срок ожидания ответа 5-7 дней.",
              "включающий интервью и тестирование на профессиональную компетентность и знание этических норм.",
              "профиля на сайте YouMi. Выберите часы в расписании и начните практику.",
            ]}
          />
          <FourStepFooter buttonOnly />
        </Container>
      </div>
      <Questions questions={questions} />
      <div className="bg-aqua-light">
        <Container>
          <PersonContent
            buttonTrue="Оставить заявку"
            img={woman3}
            width={{ grid: "grid-cols-3", content: "col-span-2" }}
          >
            <h1 className="text-purple text-40 font-extrabold mb-[25px]">
              Станьте частью команды YouMi
            </h1>
            <p className="text-24">
              Отправьте заявку, пройдите отбор, выберите часы в расписании
              и начните терапию.
            </p>
          </PersonContent>
        </Container>
      </div>

      <div className="py-[100px]">
        <div className="w-[580px] mx-auto">
          <h1 className="text-purple text-40 font-extrabold text-center">
            Остались вопросы?
          </h1>
          <p className="text-24 font-medium mb-[60px] text-center">
            Задайте их в чат поддержки психологов
          </p>
          <div className="flex justify-center">
            <ButtonProfile>@youmipsy</ButtonProfile>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Psychologists;
