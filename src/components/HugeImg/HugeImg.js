import woman from "../../assets/images/woman.svg";
import play_icon from "../../assets/icons/play.svg";
const HugeImg = ({ video }) => {
  return (
    <div className="w-[780px] h-[450px] relative rounded-20 overflow-hidden">
      <div className="w-full h-full border rounded-20">
        {/* <img src={woman} className="w-full h-full" alt="" /> */}
      </div>
      {video ? (
        <div className="w-full h-full absolute top-0 left-0 border bg-black opacity-50 rounded-20 flex justify-center items-center">
          <img src={play_icon} className="w-[50px] h-[50px]" alt="" />
        </div>
      ) : null}
    </div>
  );
};

export default HugeImg;
