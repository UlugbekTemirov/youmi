import { useState } from "react";

import Container from "../../../layout/Container";

const radioStyle =
  "py-[10px] rounded-10 text-16 block text-center border border-purple mr-5 last:mr-0 cursor-pointer";

const textWriter = (header, content, style) => {
  return (
    <div className={`${style} max-w-[580px]`}>
      <h1 className="text-16 font-medium mb-2">{header}</h1>
      <p className="text-[14px] font-light">{content ?? null}</p>
    </div>
  );
};

const labelWriter = (onlineExp, setOnlineExp, unique, text, width) => {
  return (
    <>
      <label
        htmlFor={unique}
        className={`${radioStyle} ${width ?? "w-[90px]"} duration-150 ${
          onlineExp === unique
            ? "text-white bg-purple font-semibold"
            : "text-purple bg-white"
        }`}
      >
        {text}
      </label>
      <input
        className="hidden"
        onChange={(e) => setOnlineExp(e.target.id)}
        id={unique}
        type="radio"
        name="confirm"
      />
    </>
  );
};

const StepFour = () => {
  const labelStyle = "block mb-[15px] text-16 font-[500]";
  const inputStyle =
    "border border-purple rounded-10 py-[9px] px-[20px] w-full text-16";

  const [onlineExp, setOnlineExp] = useState("");
  const [teraphy, setTeraphy] = useState("");
  const [consultancy, setConsultancy] = useState("");

  return (
    <div>
      <Container>
        <div className="max-w-[750px] mx-auto">
          <h1 className="text-20 font-semibold text-purple mb-[20px]">
            Шаг 4 <br />
            Профессиональные данные
          </h1>

          <div className="mt-[30px]">
            {textWriter(
              "Сколько лет вы консультируете в рамках частной практики или работы в компании?",
              "Учитывается только опыт консультирования за оплату и не в рамках учебной программы."
            )}
            <div className="w-[180px] mt-[15px]">
              <input className={inputStyle} type="text" name="actualPractise" />
            </div>
          </div>

          <div className="mt-[30px]">
            {textWriter("Есть ли у вас опыт работы онлайн?")}
            <div className="flex items-center">
              {labelWriter(onlineExp, setOnlineExp, "yes", "Да", "w-[90px]")}
              {labelWriter(onlineExp, setOnlineExp, "no", "Нет", "w-[90px]")}
            </div>
          </div>

          <div className="mt-[30px]">
            {textWriter("Если да, то сколько лет из общего опыта?")}
            <div className="w-[180px] mt-[15px]">
              <input className={inputStyle} type="number" name="yearOfExp" />
            </div>
          </div>

          <div className="mt-[30px]">
            {textWriter(
              "Сколько клиентов в настоящий момент у вас в терапии?",
              "Укажите количество клиентов которые регулярно работают с вами на текущий момент."
            )}
            <div className="w-[180px] mt-[15px]">
              <input className={inputStyle} type="number" name="clients" />
            </div>
          </div>

          <div className="mt-[30px]">
            {textWriter(
              "Сколько времени заняла самая длительная терапия среди ваших клиентов?",
              "Укажите количество часов."
            )}
            <div className="w-[180px] mt-[15px]">
              <input
                className={inputStyle}
                type="number"
                name="longestTeraphy"
              />
            </div>
          </div>

          <div className="mt-[30px]">
            {textWriter("Проходите ли вы личную терапию?")}
            <div className="flex items-center">
              {labelWriter(teraphy, setTeraphy, "yes1", "Да", "w-[90px]")}
              {labelWriter(teraphy, setTeraphy, "no1", "Нет", "w-[90px]")}
              {labelWriter(
                teraphy,
                setTeraphy,
                "planing1",
                "Планирую начать",
                "w-[210px]"
              )}
              {labelWriter(
                teraphy,
                setTeraphy,
                "noplaning1",
                "Не проходил и не планирую",
                "w-[300px]"
              )}
            </div>
          </div>

          <div className="mt-[30px]">
            {textWriter(
              "Сколько часов личной терапии вы прошли?",
              'Укажите количество часов, если вы ответили "да" на прошлый вопрос.'
            )}
            <div className="w-[180px] mt-[15px]">
              <input className={inputStyle} type="number" name="teraphyHours" />
            </div>
          </div>

          <div className="mt-[30px]">
            {textWriter("В каком подходе работал ваш терапевт?")}
            <div className="w-[180px] mt-[15px]">
              <input className={inputStyle} type="text" name="whichManner" />
            </div>
          </div>

          <div className="mt-[30px]">
            {textWriter("Проходите ли вы супервизию?")}
            <div className="flex items-center">
              {labelWriter(
                consultancy,
                setConsultancy,
                "yes2",
                "Да",
                "w-[90px]"
              )}
              {labelWriter(
                consultancy,
                setConsultancy,
                "no2",
                "Нет",
                "w-[90px]"
              )}
              {labelWriter(
                consultancy,
                setConsultancy,
                "planing2",
                "Планирую начать",
                "w-[210px]"
              )}
              {labelWriter(
                consultancy,
                setConsultancy,
                "noplaning2",
                "Не проходил и не планирую",
                "w-[300px]"
              )}
            </div>
          </div>

          <div className="mt-[30px]">
            {textWriter(
              "Сколько часов супервизии вы прошли?",
              'Укажите количество часов, если вы ответили "да" на прошлый вопрос.'
            )}
            <div className="w-[180px] mt-[15px]">
              <input className={inputStyle} type="text" name="consultancy" />
            </div>
          </div>

          <div className="mt-[30px] mb-[70px]">
            {textWriter("В каком подходе работал ваш супервизор?")}
            <div className="w-[381px] mt-[15px]">
              <input className={inputStyle} type="text" name="consultManner" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default StepFour;
