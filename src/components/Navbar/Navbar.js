import { Link } from "react-router-dom";
import youmiLogo from "../../assets/images/youmilogo.svg";
import { ButtonProfile } from "../Button/Button";

const Navbar = () => {
  const style = "text-charcoal font-semibold mr-[70px] cursor-pointer";

  return (
    <div className="mt-[50px] flex items-center justify-between">
      <Link to="/">
        <img src={youmiLogo} alt="logo" />
      </Link>
      <div className="flex items-center">
        <ul className="flex">
          <li className={style}>
            <Link to="/about">О нас</Link>
          </li>
          <li className={style}>
            <Link to="/tarif">Тарифы</Link>
          </li>
          <li className={style}>
            <Link to="/psychologists">Психологам</Link>
          </li>
          <li className={style}>
            <Link to="/materials">Материалы</Link>
          </li>
        </ul>
        <ButtonProfile>Личный кабинет</ButtonProfile>
      </div>
    </div>
  );
};

export default Navbar;
