import Container from "../layout/Container";

import blobs from "../assets/images/blobs.svg";

const Section = ({ children, img }) => {
  return (
    <div className="w-full bg-aqua-light pb-[80px]">
      <Container>
        <div className="pt-[200px] grid grid-cols-2 w-full">
          <div className="col-span-1 flex flex-col justify-center">
            {children}
          </div>
          <div className="col-span-1 flex flex-col items-end justify-center relative">
            <img src={img} alt="section" />
            <img className="absolute top-0 left-0" src={blobs} alt="blobs" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Section;
