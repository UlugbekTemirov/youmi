import Container from "../../../layout/Container";
import { useRef, useState, useEffect } from "react";

const StepFive = () => {
  const [range, setRange] = useState(9);

  const rangeConfig = useRef();
  const rangeCircle = useRef();
  const [target, setTarget] = useState(rangeConfig?.current);
  const [circle, setCircle] = useState(rangeCircle?.current);

  useEffect(() => {
    setTarget(rangeConfig?.current);
    setCircle(rangeCircle?.current);
  }, [rangeConfig, rangeCircle]);

  const max = target?.max;
  const min = target?.min;
  const val = target?.value;

  const rangeHandler = (value) => {
    setRange(value);
  };
  if (target && circle) {
    target.style.backgroundSize = `${((val - min) * 100) / (max - min)}% 100%`;
    circle.style.left = `${(380 / 29) * (val - 1) - 16}px`;
  }
  return (
    <div>
      <Container>
        <div className="max-w-[580px] mx-auto">
          <h1 className="text-20 font-semibold text-purple">
            Шаг 5 <br />
            Дополнительные вопросы
          </h1>

          <div className="w-[380px] relative mb-[30px]">
            <input
              id="range"
              className="stepRange"
              value={range}
              min={2}
              max={30}
              ref={rangeConfig}
              type="range"
              onChange={(e) => rangeHandler(e.target.value)}
            />
            <span className="absolute left-0 top-5 text-16 text-purple font-medium">
              2
            </span>
            <span className="absolute right-0 top-5 text-16 text-purple font-medium">
              30
            </span>
            <span
              ref={rangeCircle}
              className="absolute text-16 text-purple font-medium rangeCircle w-[16px] text-center"
            >
              {target?.value != 30 ? target.value : null}
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default StepFive;
