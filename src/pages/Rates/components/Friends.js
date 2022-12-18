import friends_icon from "../../../assets/images/friends.svg";

const Friends = () => {
  return (
    <div className="bg-aqua-light rounded-20 grid grid-cols-2 p-[80px]">
      <div>
        <p className="text-24 font-semibold mb-3">Реферальная программа</p>
        <h1 className="text-purple text-40 font-extrabold mb-5">
          Позаботьтесь о других
        </h1>
        <p className="leading-loose">
          С помощью реферальной программы вы можете приглашать своих друзей
          по вашей индивидуальной ссылке и получать 500 рублей за каждого, кто
          пройдет первую сессию. Деньги поступают на ваш баланс, с которого вы
          можете оплачивать сесии.
        </p>
      </div>
      <div className="relative">
        <div className="flex justify-end absolute -top-[120px] right-0">
          <img src={friends_icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Friends;
