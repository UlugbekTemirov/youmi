import calendarbg from "../../../assets/images/calendarbg.svg";
import { Button } from "../../../components/Button/Button";

const FourStepFooter = () => {
  return (
    <div className="grid grid-cols-2 mt-[140px]">
      <div className="col-span-1 flex items-center">
        <div className="relative z-0">
          <span className="icon icon-calendar"></span>
          <img
            className="absolute -z-10 top-0 left-[50px]"
            src={calendarbg}
            alt="bg"
          />
        </div>
        <h1 className="relative z-10 ml-[20px] text-20 max-w-[318px]">
          Мы напомним вам о сессии за сутки и за час до начала
        </h1>
      </div>
      <div className="col-span-1 flex justify-end items-center">
        <Button>Сделать первый шаг</Button>
      </div>
    </div>
  );
};

export default FourStepFooter;
