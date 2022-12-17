import { useState } from "react";

import Container from "../../../layout/Container";

const ShortQuestions = (item, index, setData, newData) => {
  return (
    <div key={index} className="flex items-center mb-5 last:mb-0">
      <div className="flex items-center justify-center">
        <label
          htmlFor={item.name}
          className={`rounded-[5px] w-[22px] h-[22px] flex justify-center items-center border duration-150 border-purple cursor-pointer ${
            item.checked ? "bg-purple" : "bg-white"
          }`}
        >
          <span className="icon icon-checked-white"></span>
        </label>
      </div>
      <label
        htmlFor={item.name}
        className="ml-[15px] text-16 font-normal cursor-pointer"
      >
        {item.content}
      </label>
      <input
        onChange={(e) => {
          item.checked = e.target.checked;
          setData(newData);
        }}
        id={item.name}
        name={item.name}
        className="hidden"
        type="checkbox"
      />
    </div>
  );
};

const StepThree = () => {
  const [data, setData] = useState([
    { name: "step3_1", content: "Гештальт-терапия" },
    {
      name: "step3_2",
      content:
        "Когнитивно-поведенческая терапия (в том числе АСТ / CFT / DBT / Схематерапия)",
    },
    {
      name: "step3_3",
      content: "Психодинамическая терапия (психоаналитическая)",
    },
    {
      name: "step3_4",
      content: "Эмоционально-фокусированная терапия (EFT)",
    },
    {
      name: "step3_5",
      content: "Клиент-центрированая терапия",
    },
    { name: "step3_6", content: "Системная семейная терапия" },
    { name: "step3_7", content: "Нарративная терапия" },
    {
      name: "step3_8",
      content: "Экзистенциальная и логотерапия",
    },
    { name: "step3_9", content: "Краткосрочная терапия" },
    { name: "step3_10", content: "Гипнотерапия" },
    { name: "step3_11", content: "Майндфулнесс" },
    { name: "step3_12", content: "Другое" },
  ]);

  const newData = [...data];
  newData.checked = false;

  return (
    <div>
      <Container>
        <div className="max-w-[580px] mx-auto">
          <h1 className="text-20 font-semibold text-purple">
            Шаг 3 <br />
            Образованe
          </h1>

          <div className="mt-[50px] mb-[70px]">
            <h1 className="text-16 font-medium mb-2">
              В каком подходе вы работаете?
            </h1>
            <p className="text-[14px] font-light">
              Выберете направления терапии в которых вы работаете и имеете
              дополнительную подготовку.
            </p>

            <div className="mt-[30px]">
              {newData.map((item, index) =>
                ShortQuestions(item, index, setData, newData)
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default StepThree;
