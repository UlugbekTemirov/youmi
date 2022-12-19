const PopupBackdrop = ({ open, onClick }) => {
  if (!open) {
    document.body.style.overflow = "initial";
    return;
  }
  document.body.style.overflow = "hidden";
  return (
    <div
      onClick={onClick}
      className="absolute top-0 left-0 h-screen w-screen bg-popup z-[100]"
    ></div>
  );
};

export default PopupBackdrop;
