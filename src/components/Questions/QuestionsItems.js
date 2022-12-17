import { useState } from "react";

const QuestionsItems = ({ question }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      key={question.id}
      onClick={() => setOpen((prev) => !prev)}
      className="px-[100px] py-[30px] bg-aqua rounded-[25px] cursor-pointer mt-[30px] overflow-hidden"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-20 max-w-[780px]">
          {question.header}
        </h1>
        <span className={`icon icon-${open ? "minus" : "plus"}`}></span>
      </div>
      <p
        className={`text-18 max-w-[780px] mt-[15px]  ${
          open ? "block" : "hidden"
        }`}
      >
        {question.content}
      </p>
    </div>
  );
};

export default QuestionsItems;
