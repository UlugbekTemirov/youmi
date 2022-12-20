import Container from "../../layout/Container";
import UsersSidebar from "./components/UsersSidebar";

import contact1 from "../../assets/images/contact1.svg";
import contact2 from "../../assets/images/contact2.svg";
import contact3 from "../../assets/images/contact3.svg";
import { useState } from "react";

const contacts = [
  {
    id: 1,
    ava: contact1,
    name: "Инна Ильина",
    messages: {
      user: [
        {
          id: 1,
          content:
            "Часто бывает так, что смысл текста не имеет большого значения, а важен только его объем или структура.",
          time: new Date(),
        },
        {
          id: 2,
          content:
            "Часто бывает так, что смысл текста не имеет большого значения, а важен только его объем или структура.",
          time: new Date(),
        },
        {
          id: 3,
          content:
            "Часто бывает так, что смысл текста не имеет большого значения, а важен только его объем или структура.",
          time: new Date(),
        },
      ],
      admin: [
        {
          id: 4,
          content:
            "Часто бывает так, что смысл текста не имеет большого значения, а важен только его объем или структура.",
          time: new Date(),
        },
        {
          id: 5,
          content:
            "Часто бывает так, что смысл текста не имеет большого значения, а важен только его объем или структура.",
          time: new Date(),
        },
        {
          id: 6,
          content:
            "Часто бывает так, что смысл текста не имеет большого значения, а важен только его объем или структура.",
          time: new Date(),
        },
      ],
    },
  },
  {
    id: 2,
    ava: contact2,
    name: "Павел Дмитриев",
    messages: {
      user: [
        {
          id: 1,
          content:
            "Часто бывает так, что смысл текста не имеет большого значения, а важен только его объем или структура.",
          time: new Date(),
        },
        {
          id: 2,
          content:
            "Часто бывает так, что смысл текста не имеет большого значения, а важен только его объем или структура.",
          time: new Date(),
        },
        {
          id: 3,
          content:
            "Часто бывает так, что смысл текста не имеет большого значения, а важен только его объем или структура.",
          time: new Date(),
        },
      ],
      admin: [
        {
          id: 4,
          content:
            "Часто бывает так, что смысл текста не имеет большого значения, а важен только его объем или структура.",
          time: new Date(),
        },
        {
          id: 5,
          content:
            "Часто бывает так, что смысл текста не имеет большого значения, а важен только его объем или структура.",
          time: new Date(),
        },
        {
          id: 6,
          content:
            "Часто бывает так, что смысл текста не имеет большого значения, а важен только его объем или структура.",
          time: new Date(),
        },
      ],
    },
  },
  {
    id: 3,
    ava: contact3,
    name: "Артем Александров",
    messages: {
      user: [
        {
          id: 1,
          content:
            "Часто бывает так, что смысл текста не имеет большого значения, а важен только его объем или структура.",
          time: new Date(),
        },
        {
          id: 2,
          content:
            "Часто бывает так, что смысл текста не имеет большого значения, а важен только его объем или структура.",
          time: new Date(),
        },
        {
          id: 3,
          content:
            "Часто бывает так, что смысл текста не имеет большого значения, а важен только его объем или структура.",
          time: new Date(),
        },
      ],
      admin: [
        {
          id: 4,
          content:
            "Часто бывает так, что смысл текста не имеет большого значения, а важен только его объем или структура.",
          time: new Date(),
        },
        {
          id: 5,
          content:
            "Часто бывает так, что смысл текста не имеет большого значения, а важен только его объем или структура.",
          time: new Date(),
        },
        {
          id: 6,
          content:
            "Часто бывает так, что смысл текста не имеет большого значения, а важен только его объем или структура.",
          time: new Date(),
        },
      ],
    },
  },
];

const Messages = () => {
  const [chat, setChat] = useState(null);

  const contact = contacts.filter((item) => item.id === chat);
  console.log(contact);

  return (
    <div className="pt-[200px] pb-[100px]">
      <Container>
        <div className="rounded-20 w-full h-[560px] bg-aqua-light grid grid-cols-7">
          <div className="col-span-2">
            <UsersSidebar setChat={setChat} chat={chat} contacts={contacts} />
          </div>
          <div className="col-span-5 p-10 relative">
            <div></div>
            <div className="absolute bottom-0 left-0 w-full p-10">
              <input
                type="text"
                placeholder="type your messges here..."
                className="w-full rounded-10 border px-4 py-1"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Messages;
