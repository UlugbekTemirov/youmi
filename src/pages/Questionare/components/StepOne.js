import { useState } from "react";

import Container from "../../../layout/Container";

const StepOne = () => {
  const [gender, setGender] = useState("male");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("ok");
  };

  const labelStyle = "block mb-[15px] text-16 font-[500]";
  const inputStyle =
    "border border-purple rounded-10 w-full py-[9px] px-[20px] text-16";

  return (
    <div>
      <h1 className="text-center font-extrabold text-40 text-purple">
        Станьте частью{" "}
        <span className="relative">
          команды YouMi
          <span className="icon icon-underline absolute -bottom-3 left-2"></span>
        </span>
      </h1>
      <p className="mt-[36px] text-center max-w-[740px] mx-auto text-18 leader-[140%]">
        Анкета включает в себя{" "}
        <span className="font-semibold text-purple">5 этапов.</span> <br />{" "}
        Пожалуйста, ответьте на вопросы и приготовьте заранее сканы ваших
        дипломов и сертификатов, они понадобятся вам в ходе заполнения.
      </p>
      <Container>
        <div className="max-w-[480px] mx-auto">
          <h1 className="mt-[60px] text-20 font-semibold text-purple">
            Шаг 1 <br /> Личные данные
          </h1>

          <form onSubmit={submitHandler} className="mt-[50px] mb-[70px]">
            <div>
              <label htmlFor="full_name" className={labelStyle}>
                ФИО
              </label>
              <input
                className={inputStyle}
                placeholder="Иванова Анна Дмитриевна"
                id="full_name"
                type="text"
              />
            </div>
            <div className="mt-[30px]">
              <label className={labelStyle}>Пол</label>
              <div>
                <div className="border border-purple relative rounded-10 w-[180px] grid grid-cols-2">
                  <label
                    className={`w-[90px] py-[9px] text-center cursor-pointer delay-100 text-purple ${
                      gender === "male" && "text-white font-semibold"
                    }`}
                    htmlFor="male"
                  >
                    Жен
                  </label>
                  <label
                    className={`w-[90px] py-[9px] text-center cursor-pointer delay-100 text-purple ${
                      gender === "female" && "text-white font-semibold"
                    }`}
                    htmlFor="female"
                  >
                    Муж
                  </label>
                  <span
                    className={`w-[90px] h-full absolute top-0 duration-200 border border-purple ${
                      gender === "male" ? "left-0" : "left-1/2"
                    } -z-10 bg-purple rounded-10`}
                  ></span>
                </div>
              </div>
              <input
                className="hidden"
                onChange={(e) => setGender(e.currentTarget.id)}
                name="gender"
                id="male"
                type="radio"
              />
              <input
                className="hidden"
                onChange={(e) => setGender(e.currentTarget.id)}
                name="gender"
                id="female"
                type="radio"
              />
            </div>
            <div className="mt-[30px]">
              <label className={labelStyle}>Дата рождения</label>
              <div className="flex items-center">
                <input
                  className="border border-purple py-[9px] rounded-10 w-[60px] text-center mr-[10px]"
                  type="number"
                  placeholder="01"
                />
                <input
                  className="border border-purple py-[9px] rounded-10 w-[60px] text-center mr-[10px]"
                  type="number"
                  placeholder="01"
                />
                <input
                  className="border border-purple py-[9px] rounded-10 w-[100px] text-center"
                  type="number"
                  placeholder="1991"
                />
              </div>
            </div>
            <div className="mt-[30px]">
              <label className={labelStyle}>Гражданство</label>
              <input className={inputStyle} type="text" />
            </div>
            <div className="mt-[30px]">
              <label className={labelStyle}>Страна и город проживания</label>
              <input className={inputStyle} type="text" />
            </div>
            <div className="mt-[30px]">
              <label className={labelStyle}>Номер телефона для связи</label>
              <input
                className={inputStyle}
                type="number"
                placeholder="+7 (___)"
              />
            </div>
            <div className="mt-[30px]">
              <label className={labelStyle}>Электронная почта</label>
              <input className={inputStyle} type="email" />
            </div>
            <div className="mt-[30px]">
              <label className={labelStyle}>Социальные сети</label>
              <input className={inputStyle} type="text" />
            </div>
            <p className="text-[14px] mt-[10px]">
              Страницы в социальных сетях, личный сайт, блог, упоминание на
              сайтах конференций или профессиональных ассоциаций.
            </p>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default StepOne;
