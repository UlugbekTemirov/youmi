import { useState } from "react";

// layout;
import Container from "../../../layout/Container";

// components
import CustomRange from "../../../components/Input/Range";

const CustomInput = (text, id, check, setCheck) => {
  return (
    <div className="grid grid-cols-2 mb-5 last:mb-0">
      <div className="flex items-center">
        <label
          htmlFor={id}
          className={`w-[22px] h-[22px] rounded-[5px] border duration-100 cursor-pointer border-purple mr-[15px] flex justify-center items-center ${
            check === id ? "bg-purple" : "bg-white"
          }`}
        >
          <span className="icon icon-checked-white"></span>
        </label>{" "}
        <label className="text-16 font-medium cursor-pointer" htmlFor={id}>
          {text}
        </label>
        <input
          onChange={(e) => setCheck(e.target.id)}
          className="hidden"
          id={id}
          name="job_format"
          type="radio"
        />
      </div>
      <div className="flex items-center">
        <input
          disabled={check !== id}
          className={`border border-purple rounded-[5px] max-w-[120px] mr-[10px] px-1 text-16 ${
            check !== id && "cursor-not-allowed"
          }`}
          type="number"
          name={id}
        />
        <h1 className="text-purple text-16 font-medium">₽</h1>
      </div>
    </div>
  );
};

const labelWriter = (text, id, check, setCheck) => {
  const radioStyle =
    "py-[10px] rounded-10 text-16 block text-center border border-purple mr-5 last:mr-0 cursor-pointer";

  return (
    <>
      <label
        htmlFor={id}
        className={`${radioStyle} w-[90px] duration-150 ${
          check === id
            ? "text-white bg-purple font-semibold"
            : "text-purple bg-white"
        }`}
      >
        {text}
      </label>
      <input
        className="hidden"
        onChange={(e) => setCheck(e.target.id)}
        id={id}
        type="radio"
        name="confirm"
      />
    </>
  );
};

const StepFive = () => {
  const [check, setCheck] = useState();
  const [conf, setConf] = useState();

  return (
    <div>
      <Container>
        <div className="max-w-[580px] mx-auto pb-[70px]">
          <h1 className="text-20 font-semibold text-purple">
            Шаг 5 <br />
            Дополнительные вопросы
          </h1>

          <div className="mt-[50px]">
            <div>
              <h1 className="text-16 font-medium mb-[20px]">
                Укажите ваш формат работы и стоимость приема на данный момент
              </h1>
              <div>
                {CustomInput("Очно", "temp", check, setCheck)}
                {CustomInput("Онлайн", "online", check, setCheck)}
                {CustomInput(
                  "С парами и семьями",
                  "withsomeone",
                  check,
                  setCheck
                )}
              </div>
            </div>
            <div className="mt-10">
              <h1 className="text-16 font-medium mb-[15px]">
                Есть ли другая у вас работа кроме психотерапевтической практики?
              </h1>
              <div className="flex items-center">
                {labelWriter("Да", "yes", conf, setConf)}
                {labelWriter("Нет", "no", conf, setConf)}
              </div>
            </div>
            <div className="mt-10">
              <h1 className="text-16 font-medium mb-3">
                Сколько часов в неделю вы готовы уделять работе в YouMi?
              </h1>
              <CustomRange />
            </div>
            <div className="mt-[72px]">
              <h1 className="text-16 font-medium">
                Что на ваш взгляд нам нужно узнать о вас, чтобы понять, какой вы
                специалист? Расскажите о себе в свободной форме.
              </h1>
              <p className="mt-2 font-light">
                Здесь могут быть ваши интересы, убеждения, ценности, принципы в
                работе и жизни. Можете поделиться почему и как вы пришли в
                психотерапию.
              </p>
              <textarea
                name="user_message"
                className="w-full rounded-10 h-[120px] border border-purple resize-none px-2 py-1 mt-[15px]"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default StepFive;
