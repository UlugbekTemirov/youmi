import { Button } from "../../components/Button/Button";
import Container from "../../layout/Container";
import { useNavigate } from "react-router-dom";

const SubmitedScreen = () => {
  const navigate = useNavigate();
  const toHomeHandler = () => {
    navigate("/");
  };

  return (
    <div className="pt-[220px] -mt-[150px] bg-aqua-light h-screen">
      <Container>
        <div className="grid grid-cols-3">
          <div className="col-span-2 flex items-center justify-center">
            <div className="max-w-[580px]">
              <h1 className="text-40  font-extrabold text-purple mb-[30px]">
                Спасибо! Ваша анкета успешно отправлена.
              </h1>
              <p className="font-medium text-24">
                Средний срок ожидания ответа 5-7 дней.
              </p>
            </div>
          </div>
          <div className="col-span-1 flex items-center justify-start">
            <span className="icon icon-papper-airplane"></span>
          </div>
        </div>
        <div className="flex justify-center mt-[90px]">
          <Button width="w-[320px]" onClick={toHomeHandler}>
            На главную
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default SubmitedScreen;
