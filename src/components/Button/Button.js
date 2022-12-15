import { useState } from "react";

const Button = ({ children, width }) => {
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);

  return (
    <button
      className={`bg-purple text-20 btn text-white rounded-15 text-center py-[25px] mt-2 font-bold leading-5 relative ${
        width ?? "w-[380px]"
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseDown={() => setFocus(true)}
      onMouseUp={() => setFocus(false)}
      type="button"
    >
      {children}
      <div
        className={`absolute duration-200 ${
          hover ? "top-[5px] left-[5px]" : "top-[15px] left-[15px]"
        } ${
          focus && "top-0 left-0"
        } w-full h-full  -z-10 rounded-15 bg-aqua-dark`}
      ></div>
    </button>
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
