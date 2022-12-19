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
      <div
        className={`overflow-hidden duration-200 ${open ? "h-[150px]" : "h-0"}`}
      >
        <p className={`text-18 max-w-[780px] mt-[15px]`}>{question.content}</p>
      </div>
    </div>
  );
};

export default QuestionsItems;
