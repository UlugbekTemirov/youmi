// react
import { useState } from "react";
// layout
import Container from "../../layout/Container";
// react-router-dom
import { Link } from "react-router-dom";
// react-calendar
import { Calendar } from "react-calendar";
// components
import ProfileInfo from "./components/ProfileInfo";
import NoMeeting from "./components/NoMeeting";
import SelectTime from "./components/SelectTime";

const Profile = () => {
  const [value, onChange] = useState(new Date());
  const [meeting, setMeeting] = useState(false);
  const [whichHour, setWhichHour] = useState(null);
  const [open, setOpen] = useState(false);

  const date = new Date(value);
  const now = new Date().getDate();
  const day = date.getDate() - now;

  return (
    <div className="pt-[200px] pb-[100px]">
      <Container>
        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <ProfileInfo
              setOpen={setOpen}
              meeting={meeting}
              setMeeting={setMeeting}
              date={date}
              whichHour={whichHour}
            />
          </div>
          <div className="col-span-1 flex justify-end items-center">
            {meeting ? (
              <div className="max-w-[510px] h-full bg-aqua-light rounded-20 flex items-center">
                <div className="mx-[110px]">
                  <h1 className="text-24 font-semibold">{`До сессии ${day} дня`}</h1>
                  <Calendar value={value} />
                  <Link className="underline mt-[10px] block" to="/appointment">
                    Ссылка на встречу
                  </Link>
                </div>
              </div>
            ) : (
              <NoMeeting />
            )}
          </div>
        </div>
      </Container>
      <SelectTime
        setWhichHour={setWhichHour}
        whichHour={whichHour}
        setOpen={setOpen}
        open={open}
        onChange={onChange}
        value={value}
        setMeeting={setMeeting}
      />
    </div>
  );
};

export default Profile;
