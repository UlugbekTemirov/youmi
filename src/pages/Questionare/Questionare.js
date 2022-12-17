import { useState } from "react";

import SwitchSteps from "./components/SwitchSteps";

// react-router-dom
import { useParams } from "react-router-dom";
import QuestionareFooter from "./components/QuestionareFooter";

const Questionare = () => {
  const { step } = useParams();
  let allow = false;

  const [steps, setSteps] = useState([
    { order: 1, name: "step_one", isCompleted: false, allowed: true },
    { order: 2, name: "step_two", isCompleted: false, allowed: false },
    { order: 3, name: "step_three", isCompleted: false, allowed: false },
    { order: 4, name: "step_four", isCompleted: false, allowed: false },
    { order: 5, name: "step_five", isCompleted: false, allowed: false },
  ]);

  const [allData, setAllData] = useState([]);

  const handleSubmit = (e) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    e.preventDefault();
    const formData = new FormData(e.target);
    setAllData((prev) => [...prev, formData]);
  };

  return (
    <div className="pt-[80px] pb-[100px]">
      <form onSubmit={handleSubmit}>
        <SwitchSteps step={step} />
        <QuestionareFooter
          steps={steps}
          setSteps={setSteps}
          step={step}
          allow={allow}
        />
      </form>
    </div>
  );
};

export default Questionare;
