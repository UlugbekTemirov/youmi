import StepDots from "./StepDots";

import { Button, ButtonBack } from "../../../components/Button/Button";

import { Navigate, useNavigate } from "react-router-dom";

const QuestionareFooter = ({ steps, allow, cur_step }) => {
  const navigate = useNavigate();

  if (!allow) return <Navigate to="/questionare/step_one" replace={true} />;

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
          type="submit"
          top="top-[10px]"
          left="left-[10px]"
          py="py-[20px]"
          width="w-[220px]"
        >
          {cur_step[0].order === steps.length ? "Сохранить" : "Далее"}
        </Button>
      </div>
      <StepDots steps={steps} />
    </div>
  );
};

export default QuestionareFooter;
