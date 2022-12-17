// components
import { Button } from "../../components/Button/Button";

// layout
import Container from "../../layout/Container";

// react-router-dom
import { useNavigate } from "react-router-dom";

const SuccessScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-[220px] pb-[135px]">
      <Container>
        <div className="grid grid-cols-3 mb-[100px]">
          <div className="col-span-2 flex justify-center">
            <div>
              <h1 className="text-40 font-extrabold text-purple max-w-[580px]">
                Регистрация прошла успешно!
              </h1>
              <p className="mt-[25px] max-w-[580px] text-24 font-[500px]">
                Ждём Вас на нашем бесплатном вебинаре «Как побороть тревогу?»
                20 августа в 19.00.
              </p>
            </div>
          </div>
          <div className="col-span-1 flex items-center">
            <span className="icon icon-checkmark width-[240px] height-[240px]"></span>
          </div>
        </div>
        <div className="flex justify-center">
          <Button onClick={() => navigate(-1)} width="w-[320px]">
            Назад
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default SuccessScreen;
