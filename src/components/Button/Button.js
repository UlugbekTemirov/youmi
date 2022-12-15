import { useState } from "react";

const Button = ({ children, width }) => {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <div className={`${width ?? "w-[380px]"} relative`}>
      <button
        className={`bg-purple text-20 btn text-white rounded-15 text-center py-[25px] font-bold leading-5 relative z-10 w-full`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseDown={() => setActive(true)}
        onMouseUp={() => setActive(false)}
        type="button"
      >
        {children}
      </button>
      <div
        className={`absolute duration-200 ${
          hover ? "top-[5px] left-[5px]" : "top-[15px] left-[15px]"
        } ${active && "top-0 left-0"} w-full h-full rounded-15 bg-aqua-dark`}
      ></div>
    </div>
  );
};

const ButtonProfile = ({ children, width }) => {
  return (
    <button
      className={`bg-white hover:bg-[#F5F5F5] active:bg-purple active:text-white duration-200 border-purple border-2 font-semibold text-purple py-[14px]  rounded-10 leading-[22.4px] ${
        width ?? "w-[240px]"
      }`}
    >
      {children}
    </button>
  );
};

export { Button, ButtonProfile };
