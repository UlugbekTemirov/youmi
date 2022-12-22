import Balance from "./Balance";
import HistoryTariff from "./HistoryTariff";
import RefProgram from "./RefProgram";
import SelectTariff from "./SelectTariff";

const SwitchTariff = ({ index }) => {
  switch (index) {
    case 1:
      return <SelectTariff />;
    case 2:
      return <HistoryTariff />;
    case 3:
      return <Balance />;
    case 4:
      return <RefProgram />;
    default:
      return null;
  }
};

export default SwitchTariff;
