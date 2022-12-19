import { useState } from "react";
import { Calendar } from "react-calendar";
import { Popup } from "../../../components";
import PopupBackdrop from "../../../components/Backdrop/PopupBackdrop";
import { Button } from "../../../components/Button/Button";

const SelectTime = ({
  open,
  setOpen,
  setWhichHour,
  whichHour,
  onChange,
  value,
}) => {
  const hours = ["12:00", "13:00", "15:00", "16:00", "17:00", "18:00", "20:00"];

  window.scrollTo({
    top: 0,
  });

  const [xhour, setHour] = useState();
  const [day, setDay] = useState();

  const selectTimeHandler = () => {
    setOpen(false);
    onChange(day);
    setWhichHour(xhour);
  };

  return (
    <>
      <PopupBackdrop onClick={() => setOpen(false)} open={open} />
      <Popup open={open} onClick={() => setOpen(false)}>
        <div className="py-[50px] px-[80px]">
          <h1 className="text-18 font-medium">Выберите дату и время</h1>
          <div className="w-full flex justify-center my-[50px] ">
            <Calendar className="scale-[1.3]" onChange={setDay} value={day} />
          </div>
          <div className="grid grid-cols-4">
            {hours.map((hour) => (
              <div
                onClick={() => setHour(hour)}
                className={`border cursor-pointer mt-4 border-purple rounded-10 py-[9px] text-center w-[90px] text-16 text-purple ${
                  xhour === hour && "bg-purple text-white font-medium"
                }`}
              >
                {hour}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-[40px]">
            <Button
              onClick={selectTimeHandler}
              width="w-[220px]"
              top="top-[10px]"
              left="left-[10px]"
            >
              Выбрать
            </Button>
          </div>
        </div>
      </Popup>
    </>
  );
};

export default SelectTime;
