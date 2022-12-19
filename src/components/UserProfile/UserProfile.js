import { useState } from "react";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div className="flex items-center">
        <div>
          <span className="icon icon-messages mr-[22px] cursor-pointer"></span>
        </div>
        <div
          onClick={() => setOpen((prev) => !prev)}
          className={`flex items-center hover:bg-aqua ${
            open && "bg-aqua"
          } p-2 pr-4 rounded-15 cursor-pointer duration-100`}
        >
          <span className="icon icon-profile mr-[25px]"></span>
          <div className="flex items-cente">
            <div>
              <h1 className="text-20 font-bold text-purple">Екатерина</h1>
              <p className="text-16 font-medium">Личный кабинет</p>
            </div>
          </div>
          <div>
            <span
              className={`icon icon-profiletoggle ml-4 duration-300 ${
                open ? "-rotate-[540deg]" : null
              }`}
            ></span>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-20 right-0 bg-aqua w-1/2 duration-200 overflow-hidden rounded-15  shadow-navbar ${
          open ? "h-[100px]" : "h-0"
        }`}
      >
        <div className="my-2 mx-4 flex items-center justify-center">
          <ul className="text-center font-medium text-18 w-full">
            <li className="cursor-pointer w-full hover:bg-aqua-dark duration-100 rounded-15 py-1">
              <Link className="w-full block" to="/profile">
                Profile
              </Link>
            </li>
            <li className="mt-2 cursor-pointer w-full hover:bg-aqua-dark duration-100 rounded-15 py-1">
              <Link to="/settings" className="w-full block">
                Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
