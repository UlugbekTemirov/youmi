// components
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";

const SwitchSteps = ({ step }) => {
  let whichStep;
  switch (step) {
    case "step_one":
      whichStep = <StepOne />;
      break;
    case "step_two":
      whichStep = <StepTwo />;
      break;
    case "step_three":
      whichStep = <StepThree />;
      break;
    case "step_four":
      whichStep = <StepFour />;
      break;
    case "step_five":
      whichStep = <StepFive />;
      break;
    default:
      whichStep = null;
  }

  return whichStep;
};

export default SwitchSteps;
