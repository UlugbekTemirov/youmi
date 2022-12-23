import { useState, useEffect, useRef } from "react";

// layout & components
import Container from "../../layout/Container";
import UsersSidebar from "./components/UsersSidebar";
import MainSection from "./components/MainSection";

// assets
import contact1 from "../../assets/images/contact1.svg";
import contact2 from "../../assets/images/contact2.svg";
import contact3 from "../../assets/images/contact3.svg";
import { useSelector, useDispatch } from "react-redux";
import { setMessage } from "./messages_slice";

const Messages = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      ava: contact1,
      name: "Инна Ильина",
      messages: [
        {
          id: 1,
          who: "user",
          content:
            "Часто бывает так, что смысл текста не имеет большого значения, а важен только его объем или структура.",
          time: new Date(),
        },
        {
          id: 2,
          who: "admin",
          content:
            "Часто бывает так, что смысл текста не имеет большого значения, а важен только его объем или структура.",
          time: new Date(),
        },
        {
          id: 3,
          who: "user",
          content:
            "Часто бывает так, что смысл текста не имеет большого значения, а важен только его объем или структура.",
          time: new Date(),
        },
        {
          id: 4,
          who: "user",
          content:
            "Часто бывает так, что смысл текста не имеет большого значения, а важен только его объем или структура.",
          time: new Date(),
        },
        {
          id: 5,
          who: "user",
          content:
            "Часто бывает так, что смысл текста не имеет большого значения, а важен только его объем или структура.",
          time: new Date(),
        },
        {
          id: 6,
          who: "admin",
          content:
            "Часто бывает так, что смысл текста не имеет большого значения, а важен только его объем или структура.",
          time: new Date(),
        },
        {
          id: 7,
          who: "user",
          content:
            "Часто бывает так, что смысл текста не имеет большого значения, а важен только его объем или структура.",
          time: new Date(),
        },
      ],
    },
    {
      id: 2,
      ava: contact2,
      name: "Павел Дмитриев",
      messages: [
        {
          id: 1,
          who: "user",
          content:
            "Часто бывает так, что смысл текста не имеет большого значения, а важен только его объем или структура.",
          time: new Date(),
        },
        {
          id: 2,
          who: "admin",
          content:
            "Часто бывает так, что смысл текста не имеет большого значения, а важен только его объем или структура.",
          time: new Date(),
        },
        {
          id: 3,
          who: "user",
          content:
            "Часто бывает так, что смысл текста не имеет большого значения, а важен только его объем или структура.",
          time: new Date(),
        },
      ],
    },
    {
      id: 3,
      ava: contact3,
      name: "Артем Александров",
      messages: [
        {
          id: 1,
          who: "user",
          content:
            "Часто бывает так, что смысл текста не имеет большого значения, а важен только его объем или структура.",
          time: new Date(),
        },
        {
          id: 2,
          who: "admin",
          content:
            "Часто бывает так, что смысл текста не имеет большого значения, а важен только его объем или структура.",
          time: new Date(),
        },
        {
          id: 3,
          who: "user",
          content:
            "Часто бывает так, что смысл текста не имеет большого значения, а важен только его объем или структура.",
          time: new Date(),
        },
      ],
    },
  ]);

  const dispatch = useDispatch();

  const { chat, message } = useSelector((state) => state.messages);

  const contact = contacts.filter((item) => item.id === chat);

  const [tempmes, setTempmes] = useState(null);
  const mainSection = useRef();

  useEffect(() => {
    if (Boolean(message)) {
      const newMess = {
        id: 6,
        who: "admin",
        content: message,
        time: Date().now,
      };
      contact[0]?.messages.push(newMess);
      const NewContacts = contacts.filter((item) => item.id !== contact[0]?.id);
      NewContacts.unshift(contact[0]);
      setContacts(NewContacts);
      dispatch(setMessage(null));
      setTempmes("");
    }
  }, [message]);

  useEffect(() => {
    mainSection?.current?.scrollTo({
      top: mainSection?.current?.scrollHeight,
      behavior: "smooth",
    });
  }, [message, contact]);

  return (
    <div className="pt-[200px] pb-[100px]">
      <Container>
        <div className="rounded-20 w-full h-[560px] bg-aqua-light grid grid-cols-7">
          <div className="col-span-2 overflow-y-auto remove-scroll">
            <UsersSidebar contacts={contacts} />
          </div>
          <div className="col-span-5 relative">
            <div
              ref={mainSection}
              className="h-[560px] overflow-y-auto remove-scroll"
            >
              <MainSection contact={contact[0]} />
            </div>
            <div className="absolute bottom-0 p-4 left-0 w-full flex items-center bg-aqua-light">
              <input
                onKeyDown={(e) => {
                  e.keyCode === 13 && dispatch(setMessage(tempmes));
                }}
                value={tempmes}
                onChange={(e) => setTempmes(e.target.value)}
                type="text"
                placeholder="type your messages here..."
                className="w-full rounded-10 border border-purple px-5 py-2 rounded-r-none outline-none"
              />
              <button
                onClick={() => dispatch(setMessage(tempmes))}
                className="py-2 border border-purple rounded-r-10 border-l-0 px-4 bg-purple text-white font-semibold cursor-pointer active:scale-[0.95]"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Messages;
