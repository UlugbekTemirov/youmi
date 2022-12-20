import Container from "../../layout/Container";
import brand_logo from "../../assets/images/youmilogo.svg";
import vk from "../../assets/icons/vk.svg";
import telegram from "../../assets/icons/telegram.svg";
import dzen from "../../assets/icons/dzen.svg";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const path = location.pathname;

  if (path.includes("submited_screen") || path.includes("entry")) return null;

  return (
    <div className="bg-aqua-light py-[80px]">
      <Container>
        <div className="grid grid-cols-5 box-border">
          <div className="flex flex-col justify-between">
            <img src={brand_logo} className="w-[170px]" alt="" />
            <div className="grid grid-cols-3 gap-3 w-[170px]">
              <img className="w-[40px]" src={vk} alt="" />
              <img className="w-[40px]" src={telegram} alt="" />
              <img className="w-[40px]" src={dzen} alt="" />
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="mb-4">
              <h1 className="text-sm text-charcoal mb-1">Сотрудничество</h1>
              <a href="!#" className="text-purple text-18 font-semibold">
                @youmiwork
              </a>
            </div>
            <div>
              <h1 className="text-sm text-charcoal mb-1">Поддержка клиентов</h1>
              <a href="!#" className="text-purple text-18 font-semibold">
                @youmi
              </a>
            </div>
          </div>
          <ul className="flex flex-col justify-between">
            <li className="text-purple text-18 font-semibold">
              <Link to="/about">О нас</Link>
            </li>
            <li className="text-purple text-18 font-semibold">
              <Link to="/tarif">Тарифы</Link>
            </li>
            <li className="text-purple text-18 font-semibold">
              <Link to="/psychologists">Психологам</Link>
            </li>
          </ul>
          <ul className="flex flex-col justify-between">
            <li className="text-purple text-18 font-semibold">
              <Link to="/blog">Блог</Link>
            </li>
            <li className="text-purple text-18 font-semibold">
              <Link to="/questionare">Вопрос - ответ</Link>
            </li>
            <li className="text-purple text-18 font-semibold">
              <Link to="/contact">Контакты</Link>
            </li>
          </ul>
          <div className="flex flex-col justify-between">
            <h1 className="text-sm text-charcoal underline">
              Обработка персональных данных
            </h1>
            <h1 className="text-sm text-charcoal underline">
              Пользовательское соглашение
            </h1>
            <h1 className="text-sm text-charcoal underline">
              Юридические документы
            </h1>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
