const CarouselButton = ({ children, selected }) => {
  return (
    <div
      className={`rounded-[40px] py-[7px] mr-[30px] px-[40px] text-20 font-semibold ${
        selected
          ? "bg-purple text-white border-2 border-transparent"
          : "bg-transparent border-purple text-purple border-2"
      }`}
    >
      {children}
    </div>
  );
};

export { CarouselButton };
