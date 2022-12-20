import sessionpsy from "../../assets/images/psyimg.svg";
import { Button } from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const SessionScreen = () => {
  const navigate = useNavigate();

  const navigateToPaymentHandler = () => {
    navigate("/payment_screen");
  };

  return (
    <div className="pt-[120px] pb-[120px]">
      <div className="rounded-20 bg-aqua-light py-[70px] px-[80px] max-w-[980px] mx-auto">
        <h1 className="text-40 font-extrabold text-purple mb-[40px]">
          За вами закреплено время сессии
        </h1>
        <div className="flex items-center mb-[42px]">
          <span className="icon icon-calendar-mini"></span>
          <h1 className="ml-[25px] text-24 font-medium">14 августа в 14:00</h1>
        </div>
        <div className="flex items-center">
          <img src={sessionpsy} alt="sessionpsy" />
          <h1 className="ml-[25px] text-24 font-medium">
            Ваш психотерапевт: Инна Ильина
          </h1>
        </div>
        <p className="text-18 font-normal mt-[30px] max-w-[595px] italic">
          Для подтверждения времени произведите оплату в течении часа, после
          ваше время станет свободным для записи.
        </p>
      </div>
      <div className="flex justify-center mt-[90px]">
        <Button onClick={navigateToPaymentHandler} width="w-[320px]">
          Оплатить
        </Button>
      </div>
    </div>
  );
};

export default SessionScreen;
