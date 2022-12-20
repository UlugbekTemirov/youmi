import { useState } from "react";

import SwitchSteps from "./components/SwitchSteps";

// react-router-dom
import { useNavigate, useParams } from "react-router-dom";
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

  const navigate = useNavigate();

  const [allData, setAllData] = useState([]);

  steps.forEach((item) => {
    item.name === step && item.allowed && (allow = true);
  });

  const cur_step = steps.filter((item) => item.name === step);

  const nextStepHandler = (step) => {
    if (cur_step[0].order === steps.length) {
      navigate("/submited_screen");
      return;
    }

    const current_step = steps.filter((item) => item.name === step);
    const a = steps.indexOf(current_step[0]);
    const newSteps = [...steps];
    newSteps[a + 1].allowed = true;
    newSteps[a].isCompleted = true;
    setSteps(newSteps);

    navigate(`/questionare/${newSteps[a + 1].name}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const formData = new FormData(e.target);
    setAllData((prev) => [...prev, formData]);
    nextStepHandler(step);
  };

  return (
    <div className="pt-[80px] pb-[100px]">
      <form onSubmit={handleSubmit}>
        <SwitchSteps step={step} />
        <QuestionareFooter steps={steps} allow={allow} cur_step={cur_step} />
      </form>
    </div>
  );
};

export default Questionare;
