const UsersSidebar = ({ contacts, setChat, chat }) => {
  return (
    <div className="py-[30px] relative pl-4">
      <h1 className="text-18 font-semibold ml-10 text-purple">Сообщения</h1>
      <div className="h-full w-full">
        {contacts.map((contact, index) => (
          <div
            onClick={() => setChat(contact.id)}
            key={index}
            className={`flex items-center p-5 cursor-pointer rounded-10 duration-100 ${
              chat === contact.id && "bg-white"
            }`}
          >
            <img className="mr-4" src={contact.ava} alt={contact.name} />
            <div>
              <h1 className="mb-[5px] font-medium text-16">{contact.name}</h1>
              <p className="text-14 font-light">Подскажите пожалуйс...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersSidebar;
