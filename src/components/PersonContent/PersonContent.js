import friends_icon from "../../assets/images/friends.svg";
import { Button } from "../Button/Button";

const PersonContent = ({ img, buttonTrue, children, width }) => {
  return (
    <>
      <div
        className={`bg-aqua-light rounded-20 grid ${
          width?.grid ?? "grid-cols-2"
        }  p-[80px]`}
      >
        <div className={`${width?.content ?? "col-span-1"}`}>{children}</div>
        <div className="relative">
          <div className="flex justify-end absolute -top-[120px] right-0">
            <img src={img ?? friends_icon} alt="" />
          </div>
        </div>
      </div>
      {buttonTrue ? (
        <div className="flex justify-center w-full bg-aqua-light pb-[80px]">
          <Button>{buttonTrue}</Button>
        </div>
      ) : null}
    </>
  );
};

export default PersonContent;
