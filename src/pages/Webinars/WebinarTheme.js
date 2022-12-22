import { useParams } from "react-router-dom";
import { ExactPath, HugeImg, HugPhone, TripleCarousel } from "../../components";
import Container from "../../layout/Container";

const data = {
  tags: ["#отношения"],
  date: "12.09.2022",
  title: "Как побороть тревогу?",
  content:
    "В работе с психологом очень важно чувствовать себя в безопасности, а конфиденциальность — важная составляющая этого вопроса. Профессионалы очень серьезно к этому относятся. На хороших обучающих программах этому посвящено много времени. То, что происходит в стенах кабинета психолога, должно там остаться — в том числе факт самих встреч с психологом. Какие у вас права и как обезопасить себя?",
};

const WebinarTheme = () => {
  const { status, question } = useParams();

  return (
    <div className="pt-[150px]">
      <ExactPath name={status} question={question} />
      <div className="w-[780px] mx-auto">
        <HugeImg video />
        <div className="mt-[60px]">
          <div className="flex justify-between">
            <div>
              <span className="mr-2">Тэги</span>
              {data.tags.map((item, index) => (
                <span
                  key={index}
                  className="mr-2 px-4 py-2 rounded-[30px] bg-aqua-light"
                >
                  {item}
                </span>
              ))}
            </div>
            <div>Эфир от {data.date}</div>
          </div>
        </div>
        <h1 className="mt-[50px] text-purple text-40 font-extrabold">
          {data.title}
        </h1>
        <p className="mt-[30px] leading-8">{data.content}</p>
        <p className="text-purple text-20 font-semibold mt-[60px] mb-[120px]">
          Поделиться
        </p>
      </div>
      <TripleCarousel />
      <HugPhone />
    </div>
  );
};

export default WebinarTheme;
