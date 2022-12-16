import screen1 from "../assets/images/screen1.svg";
import screen2 from "../assets/images/screen2.svg";

const AppStoreSection = ({ children }) => {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-3 flex flex-col justify-start">{children}</div>

      <div className="col-span-2 flex justify-end  items-center">
        <div className="relative z-20 mt-10">
          <img
            className="w-full absolute -z-10 -top-[34px] -left-[190px]"
            src={screen2}
            alt="screen"
          />
          <img className="w-full" src={screen1} alt="screen" />
        </div>
      </div>
    </div>
  );
};

export default AppStoreSection;
