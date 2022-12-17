// global components
import { Questionaire } from "../../components";
import Ambulance from "./components/Ambulance";
import OnlinePsychology from "./components/OnlinePsychology";
import Carousel from "./components/Carousel";
import WeWorkWith from "./components/WeWorkWith";
import MakeFourSteps from "./components/MakeFourSteps";
import AppStore from "./components/AppStore";
import FindYourPsyOnline from "./components/FindYourPsyOnline";

const Home = () => {
  return (
    <>
      <FindYourPsyOnline />
      <OnlinePsychology />
      <Carousel />
      <WeWorkWith />
      <MakeFourSteps />
      <Questionaire />
      <AppStore />
      <Ambulance />
    </>
  );
};

export default Home;
