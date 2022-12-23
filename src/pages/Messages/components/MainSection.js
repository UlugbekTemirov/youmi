const MainSection = ({ contact }) => {
  return (
    <div className="flex flex-col justify-end w-full pb-[70px] p-4">
      {contact?.messages.map((item, index) =>
        item.who === "user" ? (
          <div key={index} className="flex justify-start">
            <div className="flex items-start w-[400px] my-1 ">
              <img src={contact?.ava} alt="avatar" />
              <div className="ml-2 rounded-10 p-2 bg-aqua-dark">
                {item.content}
              </div>
            </div>
          </div>
        ) : (
          <div key={index} className="flex justify-end my-1">
            <div className="flex items-start justify-end w-[400px]">
              <div className="mr-2 rounded-10 p-2 bg-purple text-white max-w-[100%] overflow-auto">
                {item.content}
              </div>
              <div>
                <span className="icon icon-profile"></span>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default MainSection;
