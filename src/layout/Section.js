import Container from "../layout/Container";

const Section = ({ children, img }) => {
  return (
    <div className="w-full bg-aqua-light">
      <Container>
        <div className="pt-[200px] grid grid-cols-2 w-full ">
          <div className="col-span-1">{children}</div>
          <div className="col-span-1 flex justify-end">
            <img src={img} alt="section" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Section;
