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

  return (
    <div className="pt-[80px] pb-[100px]">
      <SwitchSteps step={step} />
      <QuestionareFooter
        steps={steps}
        setSteps={setSteps}
        step={step}
        allow={allow}
      />
    </div>
  );
};

export default Questionare;
