import Section from "../../layout/Section";
import computer_woman from "../../assets/images/illustrat 1.svg";
import { AppStore, Button } from "../../components";
import Tarif from "./components/Tarifs";
import Container from "../../layout/Container";
import { PersonContent } from "../../components";
import program_circle from "../../assets/images/program_circle.svg";
import first from "../../assets/images/1.svg";
import second from "../../assets/images/2.svg";
import third from "../../assets/images/3.svg";
import smooth_right from "../../assets/images/smooth_right.svg";

const Rates = () => {
  window.scrollTo({
    top: 0,
  });

  return (
    <div>
      <Section
        img={computer_woman}
        widths={{
          grid: "grid-cols-3",
          content: "col-span-2",
          img: "col-span-1",
        }}
      >
        <h1 className="text-40 font-extrabold text-purple mb-5">
          Выберите количество сессий, которое вы хотите оплатить.{" "}
        </h1>
        <p className="text-24 font-medium mb-[66px]">
          Оплачивая пакет от 4 сессий вы получаете доступ к приложению.
        </p>
        <Button>Узнать больше</Button>
      </Section>
      <div className="pt-[110px] pb-[120px]">
        <Tarif />
      </div>
      <div className="py-[120px] bg-aqua-light">
        <Container>
          <AppStore>
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
                Ведите личный дневник настроения и получайте подробную
                статистику о себе
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
        </Container>
      </div>
      <div className="pt-[120px]">
        <Container>
          <PersonContent>
            <div>
              <p className="text-24 font-semibold mb-3">
                Реферальная программа
              </p>
              <h1 className="text-purple text-40 font-extrabold mb-5">
                Позаботьтесь о других
              </h1>
              <p className="leading-loose">
                С помощью реферальной программы вы можете приглашать своих
                друзей по вашей индивидуальной ссылке и получать 500 рублей
                за каждого, кто пройдет первую сессию. Деньги поступают на ваш
                баланс, с которого вы можете оплачивать сесии.
              </p>
            </div>
          </PersonContent>
        </Container>
      </div>
      <div className="py-[120px]">
        <Container>
          <h1 className="text-purple text-40 font-extrabold mb-[86px] text-center">
            Как происходит программа
          </h1>
          <div className="flex justify-between">
            <div className="flex flex-col items-center">
              <div className="relative mb-4">
                <img src={first} alt="" className="absolute left-8 -top-6" />
                <img src={program_circle} alt="" />
              </div>
              <p className="text-center">
                Копируете и отправляете личную реферальную ссылку
              </p>
            </div>
            <div>
              <img src={smooth_right} alt="" />
            </div>
            <div className="flex flex-col items-center">
              <div className="relative mb-4">
                <img src={second} alt="" className="absolute left-6 -top-6" />
                <img src={program_circle} alt="" />
              </div>
              <p className="text-center">
                Копируете и отправляете личную реферальную ссылку
              </p>
            </div>
            <div>
              <img src={smooth_right} alt="" />
            </div>
            <div className="flex flex-col items-center">
              <div className="relative mb-4">
                <img src={third} alt="" className="absolute left-7 -top-6" />
                <img src={program_circle} alt="" />
              </div>
              <p className="text-center">
                Копируете и отправляете личную реферальную ссылку
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Rates;
