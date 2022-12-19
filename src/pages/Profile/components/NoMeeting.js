const NoMeeting = () => {
  return (
    <div className="flex justify-end bg-aqua-light h-full rounded-20">
      <div className="py-[50px] px-[90px]">
        <h1 className="text-24 font-semibold mb-[40px] max-w-[307px]">
          У вас нет запланированных сессий
        </h1>
        <span className="icon icon-cross"></span>
      </div>
    </div>
  );
};

export default NoMeeting;
