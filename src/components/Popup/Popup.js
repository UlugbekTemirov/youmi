const Popup = ({ width, children, onClick, open }) => {
  if (!open) return;
  return (
    <div
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-aqua-light rounded-20 z-[101] ${
        width ?? "w-[580px]"
      }`}
    >
      <span
        onClick={onClick}
        className="icon icon-plus-norm rotate-45 absolute top-[23px] right-[23px] cursor-pointer duration-200 hover:rotate-[135deg]"
      ></span>
      {children}
    </div>
  );
};

export default Popup;
