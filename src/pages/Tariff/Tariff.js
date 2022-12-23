import { useState } from "react";
import Container from "../../layout/Container";

import TariffNav from "./components/TariffNav";
import SwitchTariff from "./components/SwitchTariff";

const navItems = [
  { id: 1, name: "Выбрать тариф" },
  { id: 2, name: "История" },
  { id: 3, name: "Пополнить баланс" },
  { id: 4, name: "Реферальная программа" },
];

const Tariff = () => {
  const [index, getIndex] = useState(1);

  window.scrollTo({
    top: 0,
  });

  return (
    <div className="pt-[150px]">
      <TariffNav navItems={navItems} getIndex={getIndex} index={index} />
      <SwitchTariff index={index} />
    </div>
  );
};

export default Tariff;
