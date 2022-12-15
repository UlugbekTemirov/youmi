import Section from "../../layout/Section";

// image
import homeSection from "../../assets/images/homepageimg1.svg";

// global components
import { Button } from "../../components/Button/Button";

const Home = () => {
  const getTop = (e) => {
    console.log(e.currentTarget.scrollTop);
  };

  return (
    <div onScroll={getTop}>
      <Section img={homeSection}>
        <h1 className="text-44 text-purple font-bold">Вместе мы справимся</h1>
        <p>Найдите своего психолога онлайн</p>
        <Button>Найти психолога</Button>
        <p>2770 руб. за 50 минут сессии</p>
      </Section>
    </div>
  );
};

export default Home;
