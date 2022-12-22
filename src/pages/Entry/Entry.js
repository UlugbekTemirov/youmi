import Container from "../../layout/Container";

import woman_laptop from "../../assets/images/woman_with_laptop.svg";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { setLoggedIn } from "../../components/Navbar/navbar_slice";

const Entry = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = () => {
    localStorage.setItem("logged_in", true);
    dispatch(setLoggedIn(localStorage.getItem("logged_in")));
    navigate("/profile");
  };

  return (
    <div className="pt-[210px] bg-aqua-light h-screen">
      <Container>
        <div className="grid grid-cols-2">
          <div>
            <h1 className="text-44 font-extrabold text-purple mb-[18px]">
              Вход в YouMi
            </h1>
            <h1 className="text-24 font-medium">
              Введите свой номер телефона с кодом страны, мы пришлём вам
              проверочный код.
            </h1>
            <div className="max-w-[380px]">
              <input
                type="tel"
                placeholder="+7 (___)"
                className="py-[14px] px-[20px] mt-[40px] w-full border-2 border-purple rounded-10 bg-transparent"
              />
            </div>
            <Link
              to="/register"
              className="text-purple mt-[20px] block font-semibold"
            >
              Зарегистрироваться
            </Link>
            <div className="mt-[37px]">
              <Button onClick={loginHandler}>Отправить код</Button>
            </div>
          </div>
          <div className="flex justify-end items-center">
            <img src={woman_laptop} alt="woman_with_laptop" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Entry;
