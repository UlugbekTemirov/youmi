const FourCards = ({ img, header, content }) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-5 gap-[30px]">
        <div className="col-span-3 py-[30px] px-[20px] bg-aqua rounded-20 flex justify-between items-center">
          <div>
            <span className={`icon icon-${img[0]}`}></span>
          </div>
          <div className="pl-[50px]">
            <h1 className="font-semibold text-24">{header[0]}</h1>
            <p className="text-20 mt-[15px] pr-[30px]">{content[0]}</p>
          </div>
        </div>
        <div className="col-span-2  px-[100px] bg-aqua rounded-20 flex flex-col justify-center">
          <div>
            <h1 className="font-semibold text-24">{header[1]}</h1>
            <p className="text-20 mt-[10px]">{content[1]}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-[30px] mt-[30px]">
        <div className="col-span-2  px-[85px] bg-aqua rounded-20 flex flex-col justify-center">
          <div>
            <h1 className="font-semibold text-24">{header[2]}</h1>
            <p className="text-20 mt-[10px]">{content[2]}</p>
          </div>
        </div>
        <div className="col-span-3 py-[30px] px-[20px] bg-aqua rounded-20 flex items-center">
          <div>
            <span className={`icon icon-${img[1]}`}></span>
          </div>
          <div className="pl-[50px]">
            <h1 className="font-semibold text-24">{header[3]}</h1>
            <p className="text-20 mt-[15px] max-w-[280px]">{content[3]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourCards;
