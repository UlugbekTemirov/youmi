import { useState } from "react";

import Container from "../../../layout/Container";

import certificate from "../../../assets/images/certificate.svg";

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

const textWriter = (header, content, style) => {
  return (
    <div className={style}>
      <h1 className="text-16 font-medium mb-2">{header}</h1>
      <p className="text-[14px] font-light">{content}</p>
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

  const [file, setFile] = useState([]);

  const getBase64 = (e) => {
    const uploadFile = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(uploadFile);
    reader.onload = () => {
      setFile((prev) => [...prev, reader.result]);
    };
    reader.onerror = function (err) {
      console.log(err);
    };
  };

  const labelStyle = "block mb-[15px] text-16 font-[500]";
  const inputStyle =
    "border border-purple rounded-10 w-full py-[9px] px-[20px] text-16";

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
            {textWriter(
              "В каком подходе вы работаете?",
              "Выберете направления терапии в которых вы работаете и имеете дополнительную подготовку."
            )}
            <div className="mt-[30px]">
              {newData.map((item, index) =>
                ShortQuestions(item, index, setData, newData)
              )}
            </div>
            {textWriter(
              "Где вы обучались/обучаетесь основному методу?",
              "ВАЖНО: обязательно укажите количество часов, без этого обучение не будет принято к рассмотрению.",
              "mt-[30px]"
            )}

            <div>
              <div className="mt-[30px]">
                <label className={labelStyle}>
                  Название образовательного учреждения
                </label>
                <input
                  name="nameOfDepartment"
                  className={inputStyle}
                  type="text"
                />
              </div>
              <div className="mt-[30px]">
                <label className={labelStyle}>Полное название программы</label>
                <input name="fullProgramm" className={inputStyle} type="text" />
              </div>
              <div className="mt-[30px]">
                <label className={labelStyle}>Количество часов обучения</label>
                <input
                  name="hourOfEducation"
                  className={inputStyle}
                  type="number"
                />
              </div>
              <div className="mt-[30px] grid grid-cols-2 gap-4">
                <div>
                  <label className={labelStyle}>Год начала</label>
                  <input name="startDate" className={inputStyle} type="text" />
                </div>
                <div>
                  <label className={labelStyle}>Год окончания</label>
                  <input name="finishDate" className={inputStyle} type="text" />
                </div>
              </div>
            </div>
            <div className="mt-[30px]">
              <h1 className="text-16 font-[500]">
                Документ об основном образовании
              </h1>
              <p className="text-[14px] mt-[8px] font-light">
                Загрузите сканы диплома и вкладыша со списком дисциплин и часов
                для каждого оконченного образования.
              </p>
              <div className="mt-10 flex items-center">
                <img
                  src={certificate}
                  alt="certificate"
                  className="cursor-pointer"
                />
                {file?.map((item, index) => (
                  <img
                    key={index}
                    src={item}
                    className="cursor-pointer ml-1 w-[90px] h-[127px] hover:border-2 hover:border-purple duration-100"
                    alt="certificate"
                  />
                ))}
                {file.length <= 3 && (
                  <label
                    htmlFor="upload"
                    className="w-[90px] h-[127px] ml-1 flex items-center justify-center hover:bg-gray-100 cursor-pointer duration-150 rounded-10"
                  >
                    <span className="icon icon-plus-mini"></span>
                  </label>
                )}
                <input
                  name="files"
                  onChange={(e) => getBase64(e)}
                  type="file"
                  id="upload"
                  accept="image/png, image/jpg, image/jpeg"
                  className="hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default StepThree;
