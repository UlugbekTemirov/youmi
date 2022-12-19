import ProfileButton from "./ProfileButton";

import psyimg from "../../../assets/images/psyimg.svg";

const ProfileInfo = ({ meeting, setMeeting, setOpen }) => {
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
            <ProfileButton>Поменять</ProfileButton>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-24 font-semibold">Ближайшая сессия:</h1>
        <div>
          <div className="flex items-center my-5">
            <span className="icon icon-calendar-mini"></span>
            <h1 className="ml-5 text-18">{meeting ?? "Не назначена"}</h1>
          </div>
          <div>
            {!meeting ? (
              <ProfileButton onClick={() => setOpen(true)} variant="contained">
                Выбрать время
              </ProfileButton>
            ) : (
              <>
                <ProfileButton variant="contained">Перенести</ProfileButton>
                <ProfileButton>Отменить</ProfileButton>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
