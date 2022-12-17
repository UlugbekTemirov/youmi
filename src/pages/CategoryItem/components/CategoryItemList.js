import Container from "../../../layout/Container";
import woman from "../../../assets/images/woman.svg";
import { Link } from "react-router-dom";

const categoryItemList = [
  {
    title: "Как побороть тревогу?",
    eng: "how-to-overcome-anxiety",
    descr: "Запишитесь к психологу на личную или онлайн-сессию",
    img: woman,
  },
  {
    title: "Как побороть тревогу?",
    eng: "how-to-overcome-anxiety",
    descr: "Запишитесь к психологу на личную или онлайн-сессию",
    img: woman,
  },
  {
    title: "Как побороть тревогу?",
    eng: "how-to-overcome-anxiety",
    descr: "Запишитесь к психологу на личную или онлайн-сессию",
    img: woman,
  },
  {
    title: "Как побороть тревогу?",
    eng: "how-to-overcome-anxiety",
    descr: "Запишитесь к психологу на личную или онлайн-сессию",
    img: woman,
  },
  {
    title: "Как побороть тревогу?",
    eng: "how-to-overcome-anxiety",
    descr: "Запишитесь к психологу на личную или онлайн-сессию",
    img: woman,
  },
  {
    title: "Как побороть тревогу?",
    eng: "how-to-overcome-anxiety",
    descr: "Запишитесь к психологу на личную или онлайн-сессию",
    img: woman,
  },
];

const CategoryItemList = ({ name }) => {
  return (
    <div className="pb-[120px]">
      <Container>
        <div className="grid grid-cols-3 gap-10">
          {categoryItemList.map((item, index) => (
            <Link
              key={index}
              to={`/blog/category/${name}?question=${item.eng}`}
            >
              <div className="flex flex-col">
                <div className="h-[170px] border rounded-15"></div>
                <h1 className="text-20 font-semibold mb-4 mt-2">
                  {item.title}
                </h1>
                <p className="text-18 ">{item.descr}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CategoryItemList;
