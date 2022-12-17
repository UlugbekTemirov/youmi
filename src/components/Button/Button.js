import { useState } from "react";

const Button = ({
  children,
  width,
  onClick,
  disabled,
  top,
  left,
  py,
  type,
}) => {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <div className={`${width ?? "w-[380px]"} relative`}>
      <button
        onClick={onClick}
        disabled={disabled ?? false}
        className={`${
          !disabled
            ? "bg-purple"
            : "bg-gray-300 text-gray-900 cursor-not-allowed"
        } text-20 btn text-white rounded-15 text-center ${
          py ?? "py-[25px]"
        } font-bold leading-5 relative z-10 w-full`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseDown={() => setActive(true)}
        onMouseUp={() => setActive(false)}
        type={type ?? "button"}
      >
        {children}
      </button>
      <div
        className={`absolute duration-200  ${
          active
            ? "top-0 left-0"
            : hover
            ? "top-[5px] left-[5px]"
            : `${top ?? "top-[15px]"} ${left ?? "left-[15px]"}`
        } w-full h-full rounded-15 bg-aqua-dark`}
      ></div>
    </div>
  );
};

const ButtonProfile = ({ children, width, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-white hover:bg-[#F5F5F5] active:bg-purple active:text-white duration-200 border-purple border-2 font-semibold text-purple py-[14px]  rounded-10 leading-[22.4px] ${
        width ?? "w-[240px]"
      }`}
    >
      {children}
    </button>
  );
};

const ButtonBack = ({ children, style, onClick, mr }) => {
  return (
    <button
      onClick={onClick}
      className={`text-20 btn text-purple bg-transparent border-purple border hover:bg-purple hover:text-white duration-200 rounded-15 text-center py-[20px] font-semibold leading-5 w-[220px] ${
        mr ?? null
      }`}
    >
      {children}
    </button>
  );
};

const ButtonSupport = ({ onClick }) => {
  return (
    <span
      onClick={onClick}
      className="icon icon-support-chat fixed bottom-[30px] right-[50px] cursor-pointer z-50"
    ></span>
  );
};

export { Button, ButtonProfile, ButtonSupport, ButtonBack };
