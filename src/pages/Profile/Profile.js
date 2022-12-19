import { useState } from "react";

import { Calendar } from "react-calendar";
import Container from "../../layout/Container";

import ProfileInfo from "./components/ProfileInfo";
import { Link } from "react-router-dom";

const Profile = () => {
  const [value, onChange] = useState(new Date());
  console.log(value);

  return (
    <div className="pt-[200px] pb-[100px]">
      <Container>
        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <ProfileInfo />
          </div>
          <div className="col-span-1 flex justify-end items-center">
            <div className="max-w-[510px] h-full bg-aqua-light rounded-20 flex items-center">
              <div>
                <h1 className="text-24 font-semibold ml-[110px]">
                  До сессии 2 дня
                </h1>
                <Calendar onChange={onChange} value={value} />
                <Link
                  className="underline ml-[110px] mt-[10px] block"
                  to="/appointment"
                >
                  Ссылка на встречу
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
