const CarouselButton = ({ children, selected, width }) => {
  return (
    <div
      className={`item text-center rounded-[40px] py-[7px] px-[40px] ${width} text-20 font-semibold ${
        selected
          ? "bg-purple text-white border-2 border-transparent"
          : "bg-transparent border-purple text-purple border-2"
      }`}
    >
      {children}
    </div>
  );
};

export default CarouselButton;
