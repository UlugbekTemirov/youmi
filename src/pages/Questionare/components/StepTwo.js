import { useState } from "react";

import Container from "../../../layout/Container";

import certificate from "../../../assets/images/certificate.svg";

const StepTwo = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("ok submited");
  };

  const [education, setEducation] = useState("yes");
  const [file, setFile] = useState(null);

  const labelStyle = "block mb-[15px] text-16 font-[500]";
  const inputStyle =
    "border border-purple rounded-10 w-full py-[9px] px-[20px] text-16";

  const radioStyle =
    "py-[10px] rounded-10 text-16 block text-center border border-purple mr-5 last:mr-0 cursor-pointer";
  return (
    <div>
      <Container>
        <div className="max-w-[580px] mx-auto">
          <h1 className="mt-[60px] text-20 font-semibold text-purple">
            Шаг 2 <br />
            Образование
          </h1>

          <form onSubmit={submitHandler} className="mt-[50px] mb-[70px]">
            <div>
              <h1 className="font-[500] mb-[15px] text-16">
                У вас есть законченное высшее психологическое либо
                психиатрическое образование?
              </h1>
              <div className="flex">
                <label
                  htmlFor="yes"
                  className={`${radioStyle} w-[90px] ${
                    education === "yes"
                      ? "text-white bg-purple font-semibold"
                      : "text-purple bg-white"
                  }`}
                >
                  Да
                </label>
                <label
                  htmlFor="no"
                  className={`${radioStyle} w-[90px] ${
                    education === "no"
                      ? "text-white bg-purple font-semibold"
                      : "text-purple bg-white"
                  }`}
                >
                  Нет
                </label>
                <label
                  htmlFor="neither"
                  className={`${radioStyle} w-[360px] ${
                    education === "neither"
                      ? "text-white bg-purple font-semibold"
                      : "text-purple bg-white"
                  }`}
                >
                  Нахожусь в процессе получения ВО
                </label>

                <input
                  className="hidden"
                  onChange={(e) => setEducation(e.currentTarget.id)}
                  name="education"
                  id="yes"
                  type="radio"
                />
                <input
                  className="hidden"
                  onChange={(e) => setEducation(e.currentTarget.id)}
                  name="education"
                  id="no"
                  type="radio"
                />
                <input
                  className="hidden"
                  onChange={(e) => setEducation(e.currentTarget.id)}
                  name="education"
                  id="neither"
                  type="radio"
                />
              </div>
            </div>
            <div className="mt-[30px]">
              <h1 className="text-16 font-[500]">
                Какое у вас высшее образование?
              </h1>
              <p className="text-[14px] mt-[8px] font-light">
                Укажите ваше психологическое либо психиатрическое образование.
                Если вы имеете несколько высших образований, укажите их
                последовательно.
              </p>
            </div>
            <div className="mt-[30px]">
              <label htmlFor="university" className={labelStyle}>
                Название ВУЗа (полностью)
              </label>
              <input className={inputStyle} id="university" type="text" />
            </div>
            <div className="mt-[30px]">
              <label className={labelStyle}>Факультет</label>
              <input className={inputStyle} type="text" />
            </div>
            <div className="mt-[30px]">
              <label className={labelStyle}>Специальность</label>
              <input className={inputStyle} type="text" />
            </div>
            <div className="mt-[30px]">
              <label className={labelStyle}>Степень</label>
              <input className={inputStyle} type="number" />
            </div>
            <div className="mt-[30px] grid grid-cols-2 gap-4">
              <div>
                <label className={labelStyle}>Год начала</label>
                <input className={inputStyle} type="text" />
              </div>
              <div>
                <label className={labelStyle}>Год окончания</label>
                <input className={inputStyle} type="text" />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button className="flex items-center my-[50px]">
                <span className="icon icon-plus-mini mr-[15px]"></span>
                <h1 className="text-16 font-[500] text-purple">
                  Добавить информацию об образовании
                </h1>
              </button>
            </div>
            <div>
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
                <label
                  htmlFor="upload"
                  className="w-[90px] h-[127px] ml-1 flex items-center justify-center hover:bg-gray-100 cursor-pointer duration-150 rounded-10"
                >
                  <span className="icon icon-plus-mini"></span>
                </label>
                <input
                  onChange={(e) => setFile(e.currentTarget.files[0])}
                  type="file"
                  id="upload"
                  accept="image/png, image/jpg, image/jpeg"
                  className="hidden"
                />
              </div>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default StepTwo;
