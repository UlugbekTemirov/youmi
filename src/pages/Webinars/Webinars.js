import Container from "../../layout/Container";
import { useSelector, useDispatch } from "react-redux";
import { setActiveFilter, fetchData } from "./components/web_filter_slice";
import { useEffect } from "react";
import search_icon from "../../assets/icons/search.svg";
import { Link } from "react-router-dom";
import { Button } from "../../components";

const Webinars = () => {
  const dispatch = useDispatch();
  const { activeFilter, data, showedData } = useSelector(
    (state) => state.webfilter
  );

  useEffect(() => {
    const addedData = data.filter((item) => item.status === activeFilter);
    dispatch(fetchData(addedData));
  }, [activeFilter]);

  return (
    <div className="pt-[150px]">
      <div>
        <Container>
          <div className="flex justify-between">
            <div>
              <span
                className={`inline-block py-[8px] px-[16px] border rounded-[30px] mr-10 cursor-pointer ${
                  activeFilter === "upcoming" ? "bg-purple text-white" : null
                }`}
                onClick={() => dispatch(setActiveFilter("upcoming"))}
              >
                Предстоящие
              </span>
              <span
                className={`inline-block py-[8px] px-[16px] border rounded-[30px] mr-10 cursor-pointer ${
                  activeFilter === "archive" ? "bg-purple text-white" : null
                }`}
                onClick={() => dispatch(setActiveFilter("archive"))}
              >
                Архив
              </span>
            </div>
            <div className="w-[50px] h-[50px] bg-aqua-light rounded-full flex justify-center items-center">
              <img src={search_icon} alt="" />
            </div>
          </div>
          <div className="mt-[50px] mb-[120px] grid grid-cols-3">
            {showedData.map((item, index) => (
              <div key={index} className="flex flex-col w-[340px]">
                <div className="flex p-[25px] bg-aqua rounded-20 mb-[20px]">
                  <img src={item.pic} className="w-full" alt="" />
                </div>
                {item.status === "upcoming" ? (
                  <div className="mt-[10px] mb-[10px] flex justify-between items-center">
                    <div className="text-18">{item.lessonType}</div>
                    <div className="px-6 py-2 bg-aqua rounded-20 text-18 font-semibold">
                      {item.cost}
                    </div>
                  </div>
                ) : null}
                <h1 className="text-24 font-semibold mb-2 cursor-pointer hover:underline hover:text-purple duration-100">
                  <Link
                    to={`/webinar/category/${activeFilter}/${item.title.eng}`}
                  >
                    {item.title.rus}
                  </Link>
                </h1>
                <p className="max-w-[300px]">{item.descr}</p>
                {item.status === "upcoming" ? (
                  <>
                    <p className="mt-[20px] text-purple font-bold mb-[20px]">
                      {item.date}
                    </p>
                    <Button width={"w-[284px]"}>Записаться</Button>
                  </>
                ) : null}
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Webinars;
