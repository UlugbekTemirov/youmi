// layout
import Section from "../../../layout/Section";

// image
import homeSection from "../../../assets/images/homepageimg1.svg";

// components
import { Button } from "../../../components/Button/Button";

const FindYourPsyOnline = () => {
  return (
    <Section blob img={homeSection}>
      <h1 className="text-44 text-purple font-bold">Вместе мы справимся</h1>
      <p className="text-40 font-semibold text-charcoal w-[420px] leading-[140%] mb-[70px] pt-[10px]">
        Найдите своего психолога онлайн
      </p>
      <Button>Найти психолога</Button>
      <p className="mt-[45px] font-semibold text-20 text-charcoal">
        2770 руб. за 50 минут сессии
      </p>
    </Section>
  );
};

export default FindYourPsyOnline;
