const ThreeCards = ({ header, body, img }) => {
  return (
    <div className="grid grid-cols-3 gap-[20px]">
      <div className="relative pt-[110px]">
        <span
          className={`icon icon-${img[0]} absolute top-0 left-1/2 -translate-x-1/2`}
        ></span>
        <div className=" bg-aqua rounded-[20px] pt-[130px] pb-[30px] text-center">
          <h1 className="font-semibold text-24 mb-[15px]">{header[0]}</h1>
          <p className="text-18 px-[40px]">{body[0]}</p>
        </div>
      </div>
      <div className="relative pt-[100px]">
        <span
          className={`icon icon-${img[1]} absolute top-0 left-1/2 -translate-x-1/2`}
        ></span>
        <div className="max-h-[380px] pb-[45px] bg-aqua rounded-[20px] pt-[130px] text-center">
          <h1 className="font-semibold text-24 mb-[15px] px-16">{header[1]}</h1>
          <p className="text-18 px-[40px]">{body[1]}</p>
        </div>
      </div>
      <div className="relative pt-[100px]">
        <span
          className={`icon icon-${img[2]} absolute top-0 left-1/2 -translate-x-1/2`}
        ></span>
        <div className=" bg-aqua rounded-[20px] pt-[130px] pb-[30px] text-center">
          <h1 className="font-semibold text-24 mb-[15px]">{header[2]}</h1>
          <p className="text-18 px-[60px]">{body[2]}</p>
        </div>
      </div>
    </div>
  );
};

export default ThreeCards;
