import Container from "../../layout/Container";
import Slider from "react-slick";
import woman from "../../assets/images/womanabout.svg";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        height: "100%",
        display: "flex",
        alignItems: "center",
        padding: "10px",
        justifyContent: "center",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
      onClick={onClick}
    />
  );
}

const TripleCarousel = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="py-[80px] mt-[100px] bg-aqua-light">
      <Container>
        <div className="px-[40px] relative">
          <Slider {...settings}>
            <div className="p-10 ">
              <div className="bg-white rounded-20 px-[40px] py-[20px] relative">
                <h1 className="text-20 font-semibold mb-[17px]">
                  Как пережить расставание?
                </h1>
                <div className="w-[120px] h-[120px] border rounded-full">
                  <img src={woman} className="w-full h-full" alt="" />
                </div>
                <div className="w-full h-full rounded-20 absolute bg-aqua top-[10px] left-[5px] -z-10"></div>
              </div>
            </div>
            <div className="p-10 ">
              <div className="bg-white rounded-20 px-[40px] py-[20px] relative">
                <h1 className="text-20 font-semibold mb-[17px]">
                  Как пережить расставание?
                </h1>
                <div className="w-[120px] h-[120px] border rounded-full">
                  <img src={woman} className="w-full h-full" alt="" />
                </div>
                <div className="w-full h-full rounded-20 absolute bg-aqua top-[10px] left-[5px] -z-10"></div>
              </div>
            </div>
            <div className="p-10 ">
              <div className="bg-white rounded-20 px-[40px] py-[20px] relative">
                <h1 className="text-20 font-semibold mb-[17px]">
                  Как пережить расставание?
                </h1>
                <div className="w-[120px] h-[120px] border rounded-full">
                  <img src={woman} className="w-full h-full" alt="" />
                </div>
                <div className="w-full h-full rounded-20 absolute bg-aqua top-[10px] left-[5px] -z-10"></div>
              </div>
            </div>
            <div className="p-10 ">
              <div className="bg-white rounded-20 px-[40px] py-[20px] relative">
                <h1 className="text-20 font-semibold mb-[17px]">
                  Как пережить расставание?
                </h1>
                <div className="w-[120px] h-[120px] border rounded-full">
                  <img src={woman} className="w-full h-full" alt="" />
                </div>
                <div className="w-full h-full rounded-20 absolute bg-aqua top-[10px] left-[5px] -z-10"></div>
              </div>
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default TripleCarousel;
