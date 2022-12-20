// layout
import Container from "../../../layout/Container";

import forbes from "../../../assets/images/forbes.svg";
import gq from "../../../assets/images/gq.svg";
import kinjal from "../../../assets/images/kinjal.svg";
import rbk from "../../../assets/images/rbk.svg";
import vogue from "../../../assets/images/vogue.svg";

const AboutUs = () => {
  return (
    <div className="py-[120px]">
      <Container>
        <h1 className="text-center text-purple font-extrabold text-40 mb-[90px]">
          О нас пишут
        </h1>
        <div className="flex justify-between">
          <img src={forbes} alt="forbes" />
          <img src={rbk} alt="gq" />
          <img src={vogue} alt="kinjal" />
          <img src={gq} alt="rbk" />
          <img src={kinjal} alt="rbk" />
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
