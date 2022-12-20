import ProfileButton from "./ProfileButton";
import { useState } from "react";

import psyimg from "../../../assets/images/psyimg.svg";
import { Popup } from "../../../components";
import PopupBackdrop from "../../../components/Backdrop/PopupBackdrop";
import MeetingDate from "./MeetingDate";

// const months = [
//   "yanvar",
//   "fevral",
//   "mart",
//   "aprel",
//   "may",
//   "iyun",
//   "iyul",
//   "avgust",
//   "sentabr",
//   "oktabr",
//   "noyabr",
//   "dekabr",
// ];

const ProfileInfo = ({ meeting, setMeeting, setOpen, date, whichHour }) => {
  const [confW, setConfW] = useState(false);
  const [changePsy, setChangePsy] = useState(false);
  const cancelMeetingHandler = () => {
    setMeeting(false);
    setConfW(false);
  };

  const changePsyHandler = () => {
    setChangePsy(true);
  };

  return (
    <div className="py-[50px] px-[90px] bg-aqua-light rounded-20 h-full">
      <div>
        <h1 className="text-24 font-semibold">Ваш психолог:</h1>
        <div>
          <div className="flex items-center my-5">
            <img src={psyimg} alt="psyimg" />
            <h1 className="ml-5 text-18">Инна Ильина</h1>
          </div>
          <div>
            <ProfileButton variant="contained">Связаться</ProfileButton>
            <ProfileButton onClick={changePsyHandler}>Поменять</ProfileButton>
          </div>
        </div>
      </div>
      <MeetingDate
        setConfW={setConfW}
        setOpen={setOpen}
        whichHour={whichHour}
        meeting={meeting}
        date={date}
      />
      {/* <div className="mt-10">
        <h1 className="text-24 font-semibold">Ближайшая сессия:</h1>
        <div>
          <div className="flex items-center my-5">
            <span className="icon icon-calendar-mini"></span>
            <h1 className="ml-5 text-18">
              {meeting
                ? `${date.getDate()} ${months[date.getMonth()]} | ${whichHour}`
                : "Не назначена"}
            </h1>
          </div>
          <div>
            {!meeting ? (
              <ProfileButton onClick={() => setOpen(true)} variant="contained">
                Выбрать время
              </ProfileButton>
            ) : (
              <>
                <ProfileButton
                  variant="contained"
                  onClick={() => setOpen(true)}
                >
                  Перенести
                </ProfileButton>
                <ProfileButton onClick={() => setConfW(true)}>
                  Отменить
                </ProfileButton>
              </>
            )}
          </div>
        </div>
      </div> */}
      <div>
        <Popup onClick={() => setConfW(false)} open={confW}>
          <div className="py-[50px] px-[100px]">
            <h1 className="text-center max-w-[380px] mx-auto text-24 font-medium">
              Уверены, что хотите отменить сессию?
            </h1>
            <div className="flex justify-between items-center mt-[30px]">
              <ProfileButton variant="contained" onClick={cancelMeetingHandler}>
                Да
              </ProfileButton>
              <ProfileButton
                variant="contained"
                onClick={() => setConfW(false)}
              >
                Нет
              </ProfileButton>
            </div>
          </div>
        </Popup>
        <PopupBackdrop open={confW} onClick={() => setConfW(false)} />
      </div>
      <div>
        <Popup onClick={() => setChangePsy(false)} open={changePsy}>
          <div className="py-[50px] px-[100px]">
            <h1 className="text-center max-w-[380px] mx-auto text-24 font-medium">
              Уверены, что хотите поменять психолога?
            </h1>
            <div className="flex justify-between items-center mt-[30px]">
              <ProfileButton variant="contained">Да</ProfileButton>
              <ProfileButton
                variant="contained"
                onClick={() => setChangePsy(false)}
              >
                Нет
              </ProfileButton>
            </div>
          </div>
        </Popup>
        <PopupBackdrop open={changePsy} onClick={() => setChangePsy(false)} />
      </div>
    </div>
  );
};

export default ProfileInfo;
