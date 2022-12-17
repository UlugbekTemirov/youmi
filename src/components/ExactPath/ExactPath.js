import Container from "../../layout/Container";
import right_arrow from "../../assets/icons/right-arrow.svg";
import search_icon from "../../assets/icons/search.svg";
import { useSelector, useDispatch } from "react-redux";
import { setShowSearch } from "./exactpath_slice";

const ExactPath = ({ name }) => {
  const { showSearch } = useSelector((state) => state.exactpath);
  const dispatch = useDispatch();

  const paths = [
    {
      eng: "relationship-between-partners",
      rus: "Отношения с партнером",
    },
    {
      eng: "sense-of-anxiety",
      rus: "Чувство тревоги",
    },
    {
      eng: "emotions",
      rus: "Эмоции",
    },
    {
      eng: "depressive-state",
      rus: "Депрессивное состояние",
    },
  ];
  const addedPath = paths.filter((item) => item.eng === name);

  return (
    <div>
      <Container>
        <div className="flex justify-between items-center">
          <div className="text-24 font-semibold">
            <span>Категории</span>
            <img className="inline-block mx-8" src={right_arrow} alt="" />
            <span>{addedPath.length ? addedPath[0].rus : "Not found"}</span>
          </div>
          <div
            className={`flex items-center bg-aqua px-2 duration-200 ${
              showSearch
                ? "w-[30%] h-[40px] rounded-xl"
                : "w-[40px] h-[40px] rounded-full justify-center"
            }  `}
            onClick={(e) => {
              if (e.target.classList.contains("w-[22px]" || "flex")) {
                if (showSearch) {
                  dispatch(setShowSearch(false));
                } else {
                  dispatch(setShowSearch(true));
                }
              }
            }}
          >
            <img
              src={search_icon}
              alt=""
              className={`${
                showSearch ? "mr-4" : null
              } w-[22px]  duration-300 `}
            />
            <input
              type="text"
              className={`font-medium bg-transparent ${
                showSearch ? "w-full" : "w-0"
              }  outline-none  duration-300`}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ExactPath;
