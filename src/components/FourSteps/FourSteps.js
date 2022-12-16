import firstLetter from "../../assets/images/1.svg";
import firstbg from "../../assets/images/1bg.svg";
import secondLetter from "../../assets/images/2.svg";
import thirdLetter from "../../assets/images/3.svg";
import forthLetter from "../../assets/images/4.svg";
import questionnaire from "../../assets/images/questionnaire.svg";

const FourSteps = () => {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="col-span-1 flex items-center relative z-20">
          <div>
            <img src={firstLetter} alt="1" />
            <img
              className="absolute top-1/2 -translate-y-1/2 left-5 -z-10 w-[178px] h-[159px]"
              src={firstbg}
              alt="bg"
            />
          </div>
          <div className="pl-[60px]">
            <h1 className="text-semibold mb-[5px] text-24 font-semibold">
              Заполните анкету,
            </h1>
            <p className="text-20 max-w-[390px]">
              ответив на 5 простых вопросов, определив тему и пожелания
              по психологу.
            </p>
          </div>
        </div>
        <div className="col-span-1 flex justify-end">
          <img src={questionnaire} alt="questionnaire" />
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="col-span-1 flex justify-start">
          <img src={questionnaire} alt="questionnaire" />
        </div>
        <div className="col-span-1 flex items-center relative z-20">
          <div>
            <img src={secondLetter} alt="2" />
            <img
              className="absolute top-1/2 -translate-y-1/2 left-5 -z-10 w-[178px] h-[159px]"
              src={firstbg}
              alt="bg"
            />
          </div>
          <div className="pl-[60px]">
            <h1 className="text-semibold mb-[5px] text-24 font-semibold">
              Заполните анкету,
            </h1>
            <p className="text-20 max-w-[390px]">
              ответив на 5 простых вопросов, определив тему и пожелания
              по психологу.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="col-span-1 flex items-center relative z-20">
          <div>
            <img src={firstLetter} alt="1" />
            <img
              className="absolute top-1/2 -translate-y-1/2 left-5 -z-10 w-[178px] h-[159px]"
              src={firstbg}
              alt="bg"
            />
          </div>
          <div className="pl-[60px]">
            <h1 className="text-semibold mb-[5px] text-24 font-semibold">
              Заполните анкету,
            </h1>
            <p className="text-20 max-w-[390px]">
              ответив на 5 простых вопросов, определив тему и пожелания
              по психологу.
            </p>
          </div>
        </div>
        <div className="col-span-1 flex justify-end">
          <img src={questionnaire} alt="questionnaire" />
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="col-span-1 flex justify-end">
          <img src={questionnaire} alt="questionnaire" />
        </div>
        <div className="col-span-1 flex items-center relative z-20">
          <div>
            <img src={firstLetter} alt="1" />
            <img
              className="absolute top-1/2 -translate-y-1/2 left-5 -z-10 w-[178px] h-[159px]"
              src={firstbg}
              alt="bg"
            />
          </div>
          <div className="pl-[60px]">
            <h1 className="text-semibold mb-[5px] text-24 font-semibold">
              Заполните анкету,
            </h1>
            <p className="text-20 max-w-[390px]">
              ответив на 5 простых вопросов, определив тему и пожелания
              по психологу.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourSteps;
