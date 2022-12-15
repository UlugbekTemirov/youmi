import { useEffect, useState } from "react";

// react-router-dom
import { Link } from "react-router-dom";

// assests
import youmiLogo from "../../assets/images/youmilogo.svg";

// layout
import Container from "../../layout/Container";

// components
import { ButtonProfile } from "../Button/Button";

const Navbar = () => {
  const style = "text-charcoal font-semibold mr-[70px] cursor-pointer";

  // when page scrolled this function gets top value of page
  const [top, setTop] = useState(0);
  useEffect(() => {
    const handleScroll = (event) => {
      setTop(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`py-[30px] box-border fixed top-0 left-1/2 -translate-x-1/2 w-full z-10 ${
        top > 50 ? "bg-white shadow-navbar" : null
      }`}
    >
      <Container>
        <div className="flex justify-between items-center">
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
      </Container>
    </div>
  );
};

export default Navbar;
