import ProfileButton from "./ProfileButton";

const MeetingDate = ({ date, whichHour, setOpen, setConfW, meeting }) => {
  const months = [
    "yanvar",
    "fevral",
    "mart",
    "aprel",
    "may",
    "iyun",
    "iyul",
    "avgust",
    "sentabr",
    "oktabr",
    "noyabr",
    "dekabr",
  ];

  return (
    <div className="mt-10">
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
              <ProfileButton variant="contained" onClick={() => setOpen(true)}>
                Перенести
              </ProfileButton>
              <ProfileButton onClick={() => setConfW(true)}>
                Отменить
              </ProfileButton>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MeetingDate;
