import Container from "../../../layout/Container";

import pro1 from "../../../assets/images/professionals1.svg";
import pro2 from "../../../assets/images/professionals2.svg";
import pro3 from "../../../assets/images/professionals3.svg";
import pro4 from "../../../assets/images/professionals4.svg";

const pros = [
  { img: pro2, name: "Светлана", exp: "5 лет опыта" },
  { img: pro1, name: "Александр", exp: "12 лет опыта" },
  { img: pro3, name: "Мария", exp: "8 лет опыта" },
  { img: pro4, name: "Елена", exp: "10 лет опыта" },
];

const Professionals = () => {
  return (
    <div className="py-[80px] bg-aqua-light">
      <Container>
        <h1 className="font-semibold text-24">Мы работаем только с</h1>
        <h1 className="font-extrabold text-40 text-purple max-w-[1080px] mt-[10px]">
          квалифицированными специалистами, которые прошли наш{" "}
          <span className="relative">
            строгий отбор
            <span className="icon icon-underline absolute -bottom-4 right-1"></span>
          </span>
        </h1>
        <div className="grid grid-cols-4 mt-[93px]">
          {pros.map((pro, ind) => (
            <div className="col-span-1" key={ind}>
              <img className="mx-auto" src={pro.img} alt="professionals" />
              <h1 className="text-center mt-[30px] font-semibold text-24 mb-[10px]">
                {pro.name}
              </h1>
              <p className="text-center text-18">{pro.exp}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
export default Professionals;
