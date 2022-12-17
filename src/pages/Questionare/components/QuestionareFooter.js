import StepDots from "./StepDots";

import { Button, ButtonBack } from "../../../components/Button/Button";

import { Navigate, useNavigate } from "react-router-dom";

const QuestionareFooter = ({ steps, setSteps, allow, step }) => {
  const navigate = useNavigate();

  let text;

  steps.forEach((item) => {
    item.name === step && item.allowed && (allow = true);
  });

  if (!allow) {
    return <Navigate to="/questionare/step_one" replace={true} />;
  }
  const cur_step = steps.filter((item) => item.name === step);
  if (cur_step[0].order === steps.length) text = "Сохранить";

  const nextStepHandler = (step) => {
    if (cur_step[0].order === steps.length) {
      navigate("/");
      return;
    }
    const current_step = steps.filter((item) => item.name === step);
    const a = steps.indexOf(current_step[0]);
    const newSteps = [...steps];
    newSteps[a + 1].allowed = true;
    setSteps(newSteps);
    navigate(`/questionare/${newSteps[a + 1].name}`);
  };

  const prevStepHandler = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="flex justify-center">
        {cur_step[0].order !== 1 ? (
          <ButtonBack onClick={prevStepHandler} mr="mr-[55px]">
            Назад
          </ButtonBack>
        ) : null}
        <Button
          top="top-[10px]"
          left="left-[10px]"
          py="py-[20px]"
          onClick={() => nextStepHandler(step)}
          width="w-[220px]"
        >
          {text ?? "Далее"}
        </Button>
      </div>
      <StepDots steps={steps} />
    </div>
  );
};

export default QuestionareFooter;
