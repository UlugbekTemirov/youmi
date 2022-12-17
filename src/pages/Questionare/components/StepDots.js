import { useParams } from "react-router-dom";

const StepDots = ({ steps }) => {
  const { step } = useParams();

  const dots_style = `w-[16px] h-[16px] rounded-full mr-[49px] last:mr-0`;

  return (
    <div className="flex justify-center mt-[80px]">
      <div className="flex">
        {steps.map((item, index) => (
          <div
            key={index}
            className={`${dots_style} ${
              item.name === step ? "bg-purple" : "bg-aqua-dark"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default StepDots;
