import { Button } from "../../../components";
import Container from "../../../layout/Container";

const tarifs = [
  {
    seesionCount: 1,
    cost: 2900,
    benefit: 0,
    discount: false,
  },
  {
    seesionCount: 4,
    cost: 2800,
    benefit: 400,
    discount: false,
  },
  {
    seesionCount: 8,
    cost: 2750,
    benefit: 1200,
    discount: true,
  },
  {
    seesionCount: 16,
    cost: 2690,
    benefit: 3360,
    discount: true,
  },
  {
    seesionCount: 32,
    cost: 2550,
    benefit: 11200,
    discount: true,
  },
  {
    seesionCount: 64,
    cost: 2490,
    benefit: 26240,
    discount: true,
  },
  {
    seesionCount: 96,
    cost: 2320,
    benefit: 55680,
    discount: true,
  },
  {
    seesionCount: 128,
    cost: 2200,
    benefit: 89600,
    discount: true,
  },
];

const Tarif = () => {
  return (
    <Container>
      <h1 className="text-center text-purple font-extrabold text-40 mb-[50px]">
        Тарифы
      </h1>
      <div className="grid grid-cols-4 gap-6">
        {tarifs.map((item, index) => (
          <div key={index}>
            <div className="flex flex-col rounded-15 bg-aqua-light overflow-hidden h-full">
              <div className="bg-aqua py-[16px]">
                <p className="text-18 font-medium text-center">{`${item.seesionCount} сесии`}</p>
              </div>
              <div className="flex flex-col px-[30px] justify-between h-[292px]">
                <div>
                  <div className="text-purple">
                    <h1 className=" text-24 font-bold leading-7 text-center mt-4 mb-2">{`${item.cost}₽`}</h1>
                    <p className="text-20 font-medium leading-4 text-center mb-5">
                      за сессию
                    </p>
                  </div>
                  <button className="bg-purple rounded-10 text-white text-18 font-semibold py-[10px] mb-4 w-full">
                    {`Оплатить`} <br /> {`${item.seesionCount * item.cost}₽`}
                  </button>
                </div>
                {item.discount ? (
                  <button className="rounded-[8px] bg-pale-light text-18 font-medium py-[10px] mb-6">
                    В рассрочку
                  </button>
                ) : null}
                {item.benefit ? (
                  <p className="text-purple font-medium text-18 text-center mb-[16px]">{`выгода ${item.benefit}₽`}</p>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center">
        <input
          type="text"
          className="border-2 rounded-15 px-[30px] border-purple w-[380px] min-h-[70px] max-h-[70px] outline-none"
          placeholder="Введите промокод"
        />
        <div className="flex justify-center mt-8">
          <Button>Отправить</Button>
        </div>
      </div>
    </Container>
  );
};

export default Tarif;
