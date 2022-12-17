import Container from "../../../../layout/Container";
import apathy from "../../../../assets/images/apathy 1.svg";
import depression from "../../../../assets/images/depression 1.svg";
import emotions from "../../../../assets/images/emotions 1.svg";
import partners from "../../../../assets/images/partners 1.svg";
import { Link } from "react-router-dom";

//categories list
const categoriesList = [
  {
    name: "Отношения с партнером",
    eng: "relationship-between-partners",
    img: partners,
  },
  {
    name: "Эмоции",
    eng: "emotions",
    img: emotions,
  },
  {
    name: "Чувство тревоги",
    eng: "sense-of-anxiety",
    img: apathy,
  },
  {
    name: "Депрессивное состояние",
    eng: "depressive-state",
    img: depression,
  },
  {
    name: "Отношения с партнером",
    eng: "relationship-between-partners",
    img: partners,
  },
  {
    name: "Эмоции",
    eng: "emotions",
    img: emotions,
  },
  {
    name: "Чувство тревоги",
    eng: "sense-of-anxiety",
    img: apathy,
  },
  {
    name: "Депрессивное состояние",
    eng: "depressive-state",
    img: depression,
  },
];

const Categories = () => {
  return (
    <div className="mt-4">
      <Container>
        <div className="grid grid-cols-4 gap-6">
          {categoriesList.map((item, index) => (
            <Link
              to={`/blog/category/${item.eng}`}
              key={index}
              className="col-span-1 rounded-[20px] bg-aqua p-4 flex flex-col justify-between cursor-pointer"
            >
              <p className="text-20 text-charcoal font-medium">{item.name}</p>
              <div className="flex justify-end w-full ">
                <img src={item.img} alt="" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Categories;
