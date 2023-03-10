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
import UserProfile from "../UserProfile/UserProfile";

//actions
import { setShowPage } from "./navbar_slice";
import { setLoggedIn } from "./navbar_slice";

const Navbar = () => {
  const { showPage, loggedIn } = useSelector((state) => state.navbar);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoggedIn(localStorage.getItem("logged_in")));
  }, [loggedIn]);

  const style = "font-semibold mr-[70px] cursor-pointer";
  const location = useLocation();

  // when page scrolled this function gets top value of page
  const [top, setTop] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setTop(window.scrollY);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let path = location.pathname;
  if (
    path.includes("questionare") ||
    path.includes("submited_screen") ||
    path.includes("session_screen")
  ) {
    return (
      <div
        className={`pt-[50px] box-border w-full z-50 flex justify-center bg-transparent`}
      >
        <img className="w-[180px]" src={youmiLogo} alt="logo" />
      </div>
    );
  }

  return (
    <div
      className={`py-[30px] box-border fixed top-0 left-1/2 -translate-x-1/2 w-full z-50 ${
        top > 50 ? "bg-white shadow-navbar" : null
      }`}
    >
      <Container>
        <div className="flex justify-between items-center">
          <Link to="/">
            <img src={youmiLogo} alt="logo" />
          </Link>
          <div>
            {loggedIn !== "true" ? (
              <div className="flex items-center">
                <ul className="flex">
                  <li
                    className={`${style} ${
                      path.includes("about") && "text-purple"
                    }`}
                  >
                    <Link to="/about">?? ??????</Link>
                  </li>
                  <li
                    className={`${style} ${
                      path.includes("tarif") && "text-purple"
                    }`}
                  >
                    <Link to="/tarif">????????????</Link>
                  </li>
                  <li
                    className={`${style} ${
                      path.includes("psychologists") && "text-purple"
                    }`}
                  >
                    <Link to="/psychologists">????????????????????</Link>
                  </li>
                  <li className={`${style} flex items-center relative`}>
                    <span
                      className={`mr-2 ${
                        showPage ||
                        location.pathname.substring(0, 5) === "/blog" ||
                        location.pathname === "/webinar"
                          ? "text-purple"
                          : " text-charcoal"
                      }`}
                      onClick={() => dispatch(setShowPage())}
                    >
                      ??????????????????
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
                              ????????
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
                              ????????????????
                            </Link>
                          </li>
                        </ul>
                      </>
                    ) : null}
                  </li>
                </ul>
                <Link to="/entry">
                  <ButtonProfile>???????????? ??????????????</ButtonProfile>
                </Link>
              </div>
            ) : (
              <UserProfile />
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
