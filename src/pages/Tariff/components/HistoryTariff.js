import Container from "../../../layout/Container";

const history = [
  {
    id: 1,
    date: "28.08.2022",
    description: "Оплата 1 сессии",
    price: "2 900₽",
  },
  {
    id: 2,
    date: "31.08.2022",
    description: "Пополнение баланса",
    price: "5 000₽",
  },
  {
    id: 3,
    date: "06.09.2022",
    description: "Пополнение по реферальной программе",
    price: "500₽",
  },
  {
    id: 4,
    date: "18.09.2022",
    description: "Оплата 4 сессий",
    price: "11 200₽",
  },
  {
    id: 5,
    date: "21.09.2022",
    description: "Пополнение баланса",
    price: "2 000₽",
  },
  {
    id: 6,
    date: "28.08.2022",
    description: "Оплата 1 сессии",
    price: "2 000₽",
  },
  {
    id: 7,
    date: "28.08.2022",
    description: "Оплата 1 сессии",
    price: "2 000₽",
  },
  {
    id: 8,
    date: "28.08.2022",
    description: "Оплата 1 сессии",
    price: "2 000₽",
  },
];

const HistoryTariff = () => {
  return (
    <div>
      <div className="py-[100px]">
        <Container>
          <div className="w-full rounded-20 py-[60px] px-[100px] bg-aqua-light">
            <div className="grid grid-cols-4 mb-[10px]">
              <h1 className="font-semibold text-20 col-span-1">Дата</h1>
              <h1 className="font-semibold text-20 col-span-2">Описание</h1>
              <h1 className="font-semibold text-20 col-span-1">Стоимость</h1>
            </div>
            <div className="max-h-[350px] overflow-auto tariffSection">
              {history.map((item, index) => (
                <div className="grid grid-cols-4 mt-[45px] items-center">
                  <div className="text-18 font-normal col-span-1" key={index}>
                    {item.date}
                  </div>
                  <div className="text-18 font-normal col-span-2" key={index}>
                    {item.description}
                  </div>
                  <div
                    key={index}
                    className="w-[160px] text-center rounded-[30px] py-[7px] bg-purple text-18 font-semibold text-white  col-span-1"
                  >
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
      <div className="-mb-[270px] pb-[270px] bg-aqua-light"></div>
    </div>
  );
};

export default HistoryTariff;
