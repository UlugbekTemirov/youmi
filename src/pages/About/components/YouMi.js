import Section from "../../../layout/Section";

import woman from "../../../assets/images/womanabout.svg";
import circle from "../../../assets/images/circle.svg";

const YouMi = () => {
  const textstyle = "font-extrabold text-44 text-purple";

  return (
    <Section img={woman}>
      <h1 className={`${textstyle}  mb-[25px]`}>В YouMi вы не одни</h1>
      <h1 className={`${textstyle} relative`}>
        Вместе мы справимся
        <img className="absolute -top-2 -left-8" src={circle} alt="circle" />
      </h1>
    </Section>
  );
};

export default YouMi;
