// components
import Professionals from "./components/Professionals";
import HistoryOfProject from "./components/HistoryOfProject";
import OurValue from "./components/OurValue";
import RequiredDocuments from "./components/RequiredDocument";
import AboutUs from "./components/AboutUs";
import YouMi from "./components/YouMi";

const About = () => {
  window.scrollTo({
    top: 0,
  });

  return (
    <>
      <YouMi />
      <OurValue />
      <Professionals />
      <RequiredDocuments />
      <HistoryOfProject />
      <AboutUs />
    </>
  );
};

export default About;
