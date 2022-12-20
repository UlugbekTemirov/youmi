import Container from "../layout/Container";

import blobs from "../assets/images/blobs.svg";

const Section = ({ children, img, blob, widths, whiteBg }) => {
  return (
    <div
      className={`w-full ${whiteBg ? "bg-white" : "bg-aqua-light"}  pb-[80px]`}
    >
      <Container>
        <div
          className={`pt-[180px] grid ${widths?.grid ?? "grid-cols-2"} w-full`}
        >
          <div
            className={`${
              widths?.content ?? "col-span-1"
            }  flex flex-col justify-center`}
          >
            {children}
          </div>
          <div
            className={`${
              widths?.img ?? "col-span-1"
            } flex flex-col items-end justify-center relative`}
          >
            <img src={img} alt="section" />
            {blob && (
              <img className="absolute top-0 left-0" src={blobs} alt="blobs" />
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Section;
