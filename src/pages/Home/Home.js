// global components
import { Questions } from "../../components";
import Ambulance from "./components/Ambulance";
import OnlinePsychology from "./components/OnlinePsychology";
import Carousel from "./components/Carousel";
import WeWorkWith from "./components/WeWorkWith";
import MakeFourSteps from "./components/MakeFourSteps";
import AppStore from "./components/AppStore";
import FindYourPsyOnline from "./components/FindYourPsyOnline";

const Home = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <>
      <FindYourPsyOnline />
      <OnlinePsychology />
      <Carousel />
      <WeWorkWith />
      <MakeFourSteps />
      <Questions />
      <AppStore />
      <Ambulance />
    </>
  );
};

export default Home;
