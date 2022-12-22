import { useParams } from "react-router-dom";
import Container from "../../../layout/Container";
import woman from "../../../assets/images/woman.svg";
import {
  ExactPath,
  HugeImg,
  HugPhone,
  TripleCarousel,
} from "../../../components";
import { Button } from "../../../components";
import hugphone from "../../../assets/images/hugphone.svg";

const data = {
  tags: ["#отношения"],
  question: "Как побороть тревогу?",
  content:
    "В работе с психологом очень важно чувствовать себя в безопасности, а конфиденциальность — важная составляющая этого вопроса. Профессионалы очень серьезно к этому относятся. На хороших обучающих программах этому посвящено много времени. То, что происходит в стенах кабинета психолога, должно там остаться — в том числе факт самих встреч с психологом. Какие у вас права и как обезопасить себя? Именно клиент решает, оставлять факт работы с психологом конфиденциальным или нет.   Например, вы встретились со своим психологов в публичном месте, в окружении других знакомых лиц. Вы можете подойти к психологу, поздороваться и тем самым раскрыть факт вашей терапии. Психолог же такое сделать не может. То есть, если вы к нему не подойдете, он будет делать вид, что не знает вас. Как мы писали раньше, важным показателем профессионализма будет, если специалист предложит вам подписать информированное согласие. В нем будет в том числе указана политика конфиденциальности. Да, в России нет закона о психологической помощи и нет лицензирования, но есть специалисты, которые придерживаются международных правил — и это обычно хороший знак. В этом очень много уважения к клиенту. Если вы не подписывали информированное согласие, но опасаетесь разглашения информации, попросите психолога подписать с вами отдельное соглашение о конфиденциальности.",
  pic: woman,
  date: "12 сентября 2022, 19:15",
};

const CategoryItemAnswers = () => {
  const { name, question } = useParams();

  return (
    <div className="pt-[150px]">
      <Container>
        <ExactPath name={name} question={question} />
        <div className="text-20 w-[800px] mx-auto">
          <div>
            <span>Тэги</span>
            {data.tags.map((item, index) => (
              <span
                key={index}
                className="inline-block w-[180px] bg-aqua ml-6 rounded-[30px] text-center py-[6px]"
              >
                {item}
              </span>
            ))}
          </div>
          <h1 className="text-purple text-40 font-extrabold mt-[60px]">
            {data.question}
          </h1>
          <p className="mt-[30px] text-18 leading-8">{data.content}</p>
          <div className="mt-[60px]">
            <HugeImg />
          </div>
          {/* <div className="h-[450px] border mt-[60px] rounded-[30px]"></div> */}
          <div className="flex justify-between mt-10">
            <p className="text-purple font-semibold text-20">Поделиться</p>
            <p className="text-20">{data.date}</p>
          </div>
        </div>
      </Container>
      <TripleCarousel />
      <HugPhone />
    </div>
  );
};

export default CategoryItemAnswers;
