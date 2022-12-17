import Section from "../../layout/Section";
import computer_woman from "../../assets/images/illustrat 1.svg";
import { Button } from "../../components";
import Tarif from "./components/Tarifs";
const Rates = () => {
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
      <Tarif />
    </div>
  );
};

export default Rates;
