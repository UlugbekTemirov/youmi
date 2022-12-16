import firstLetter from "../../assets/images/1.svg";
import secondLetter from "../../assets/images/2.svg";
import thirdLetter from "../../assets/images/3.svg";
import forthLetter from "../../assets/images/4.svg";
import firstbg from "../../assets/images/1bg.svg";
import secondbg from "../../assets/images/2bg.svg";
import thirdbg from "../../assets/images/3bg.svg";
import forthbg from "../../assets/images/4bg.svg";

import questionnaire from "../../assets/images/questionnaire.svg";
import calendar from "../../assets/images/calendar.svg";
import test from "../../assets/images/test.svg";
import profiles from "../../assets/images/profiles.svg";

import arrow1 from "../../assets/images/arrow1.svg";
import arrow2 from "../../assets/images/arrow2.svg";
import arrow3 from "../../assets/images/arrow3.svg";

const FourSteps = ({ arrowtype, header, content }) => {
  const style1 = arrowtype ? "grid-cols-3" : "grid-cols-2";
  const style2 = arrowtype
    ? "col-span-2 justify-start"
    : "col-span-1 justify-end";

  return (
    <div>
      <div className={`grid ${style1}`}>
        <div className={`${style2} flex items-center relative z-20`}>
          <div>
            <img src={firstLetter} alt="1" />
            <img
              className={`absolute top-1/2 -translate-y-1/2 ${
                arrowtype ? "left-5" : "left-28"
              } -z-10 w-[178px] h-[159px]`}
              src={firstbg}
              alt="bg"
            />
          </div>
          <div className="pl-[60px]">
            <h1 className="text-semibold mb-[5px] text-24 font-semibold">
              {header[0]}
            </h1>
            <p
              className={`text-20 ${
                arrowtype ? "max-w-[650px]" : "max-w-[390px]"
              }`}
            >
              {content[0]}
            </p>
          </div>
        </div>
        <div
          className={`col-span-1 flex ${
            arrowtype ? "justify-start relative" : "justify-end"
          }`}
        >
          {arrowtype ? (
            <img
              className="absolute top-3/4 left-[74px]"
              src={arrow1}
              alt="arrow"
            />
          ) : (
            <img src={questionnaire} alt="questionnaire" />
          )}
        </div>
      </div>
      <div className={`grid ${style1} mt-[150px]`}>
        <div
          className={`col-span-1 flex ${
            arrowtype ? "justify-start relative" : "justify-start"
          }`}
        >
          {arrowtype ? (
            <img
              className="absolute top-3/4 right-[150px]"
              src={arrow2}
              alt="arrow"
            />
          ) : (
            <img src={profiles} alt="profiles" />
          )}
        </div>
        <div className={`${style2} flex items-center relative z-20`}>
          <div>
            <img src={secondLetter} alt="1" />
            <img
              className={`absolute top-1/2 -translate-y-1/2 ${
                arrowtype ? "left-5" : "left-20"
              } -z-10 w-[178px] h-[159px]`}
              src={secondbg}
              alt="bg"
            />
          </div>
          <div className="pl-[60px]">
            <h1 className="text-semibold mb-[5px] text-24 font-semibold">
              {header[1]}
            </h1>
            <p
              className={`text-20 ${
                arrowtype ? "max-w-[650px]" : "max-w-[390px]"
              }`}
            >
              {content[1]}
            </p>
          </div>
        </div>
      </div>
      <div className={`grid ${style1} mt-[150px]`}>
        <div className={`${style2} flex items-center relative z-20`}>
          <div>
            <img src={thirdLetter} alt="1" />
            <img
              className={`absolute top-1/2 -translate-y-1/2 ${
                arrowtype ? "left-5" : "left-20"
              } -z-10 w-[178px] h-[159px]`}
              src={thirdbg}
              alt="bg"
            />
          </div>
          <div className="pl-[60px]">
            <h1 className="text-semibold mb-[5px] text-24 font-semibold">
              {header[2]}
            </h1>
            <p
              className={`text-20 ${
                arrowtype ? "max-w-[650px]" : "max-w-[390px]"
              }`}
            >
              {content[2]}
            </p>
          </div>
        </div>
        <div
          className={`col-span-1 flex ${
            arrowtype ? "justify-start relative" : "justify-end"
          }`}
        >
          {arrowtype ? (
            <img
              className="absolute top-3/4 left-[74px]"
              src={arrow3}
              alt="arrow"
            />
          ) : (
            <img src={calendar} alt="calendar" />
          )}
        </div>
      </div>
      <div className={`grid ${style1} mt-[150px]`}>
        <div className={`col-span-1 flex justify-start`}>
          {!arrowtype && <img src={profiles} alt="profiles" />}
        </div>
        <div className={`${style2} flex items-center relative z-20`}>
          <div>
            <img src={forthLetter} alt="1" />
            <img
              className={`absolute top-1/2 -translate-y-1/2 ${
                arrowtype ? "left-5" : "left-20"
              } -z-10 w-[178px] h-[159px]`}
              src={forthbg}
              alt="bg"
            />
          </div>
          <div className="pl-[60px]">
            <h1 className="text-semibold mb-[5px] text-24 font-semibold">
              {header[3]}
            </h1>
            <p
              className={`text-20 ${
                arrowtype ? "max-w-[650px]" : "max-w-[390px]"
              }`}
            >
              {content[3]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourSteps;

// <div className="grid grid-cols-2 mt-[150px]">
//         <div className="col-span-1 flex justify-start">
//           {/* <img src={profiles} alt="questionnaire" /> */}
//           <img src={arrow2} alt="arrow" />
//         </div>
//         <div className="col-span-1 flex items-center relative z-20">
//           <div>
//             <img src={secondLetter} alt="2" />
//             <img
//               className="absolute top-1/2 -translate-y-1/2 left-5 -z-10 w-[178px] h-[159px]"
//               src={firstbg}
//               alt="bg"
//             />
//           </div>
//           <div className="pl-[60px]">
//             <h1 className="text-semibold mb-[5px] text-24 font-semibold">
//               Заполните анкету,
//             </h1>
//             <p className="text-20 max-w-[390px]">
//               ответив на 5 простых вопросов, определив тему и пожелания
//               по психологу.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="grid grid-cols-2 mt-[150px]">
//         <div className="col-span-1 flex items-center relative z-20">
//           <div>
//             <img src={thirdLetter} alt="3" />
//             <img
//               className="absolute top-1/2 -translate-y-1/2 left-5 -z-10 w-[178px] h-[159px]"
//               src={thirdbg}
//               alt="bg"
//             />
//           </div>
//           <div className="pl-[60px]">
//             <h1 className="text-semibold mb-[5px] text-24 font-semibold">
//               Определите дату и время
//             </h1>
//             <p className="text-20 max-w-[390px]">
//               первой сессии. Если у вас поменяются планы, вы сможете ее отменить
//               или перенести.
//             </p>
//           </div>
//         </div>
//         <div className="col-span-1 flex justify-end">
//           {/* <img src={calendar} alt="calendar" /> */}
//           <img src={arrow3} alt="arrow" />
//         </div>
//       </div>
//       <div className="grid grid-cols-2 mt-[150px]">
//         <div className="col-span-1 flex justify-start">
//           {/* <img src={test} alt="test" /> */}
//         </div>
//         <div className="col-span-1 flex items-center relative z-20">
//           <div>
//             <img src={forthLetter} alt="1" />
//             <img
//               className="absolute top-1/2 -translate-y-1/2 left-5 -z-10 w-[178px] h-[159px]"
//               src={forthbg}
//               alt="bg"
//             />
//           </div>
//           <div className="pl-[60px]">
//             <h1 className="text-semibold mb-[5px] text-24 font-semibold">
//               Пройдите тестирование
//             </h1>
//             <p className="text-20 max-w-[390px]">
//               ответив на 5 простых вопросов, определив тему и пожелания
//               по психологу.
//             </p>
//           </div>
//         </div>
//       </div>
