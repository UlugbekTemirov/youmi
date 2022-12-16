import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";

// react-router-dom
import { Link, useLocation } from "react-router-dom";

// assests
import youmiLogo from "../../assets/images/youmilogo.svg";
import dropdown_icon from "../../assets/icons/dropdown.svg";

// layout
import Container from "../../layout/Container";

// components
import { ButtonProfile } from "../Button/Button";

//actions
import { setShowPage } from "./navbar_slice";

const Navbar = () => {
  const style = "text-charcoal font-semibold mr-[70px] cursor-pointer";
  const { showPage } = useSelector((state) => state.navbar);
  const dispatch = useDispatch();
  const location = useLocation();

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
      className={`py-[30px] box-border fixed top-0 left-1/2 -translate-x-1/2 w-full z-20 ${
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
              <li className={`${style} flex items-center relative`}>
                <span
                  className={`mr-2 ${
                    showPage ||
                    location.pathname === "/blog" ||
                    location.pathname === "/webinar"
                      ? "text-purple"
                      : " text-charcoal"
                  }`}
                  onClick={() => dispatch(setShowPage())}
                >
                  Материалы
                </span>
                <img src={dropdown_icon} alt="" />
                {showPage ? (
                  <>
                    <ul
                      className={`w-[180px] flex flex-col justify-center rounded-10 absolute top-10 -right-[28px] py-3 bg-white shadow-nav-page items-center duration-300`}
                    >
                      <li className="mb-2">
                        <Link
                          to="/blog"
                          className={`${
                            location.pathname === "/blog"
                              ? "text-purple"
                              : "text-charcoal"
                          }`}
                          onClick={() => dispatch(setShowPage(false))}
                        >
                          Блог
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/webinar"
                          className={`${
                            location.pathname === "/webinar"
                              ? "text-purple"
                              : "text-charcoal"
                          }`}
                          onClick={() => dispatch(setShowPage(false))}
                        >
                          Вебинары
                        </Link>
                      </li>
                    </ul>
                  </>
                ) : null}
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
