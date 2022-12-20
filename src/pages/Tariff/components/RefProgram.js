import Container from "../../../layout/Container";
import groupPeople from "../../../assets/images/groupOfPeople.svg";
import { Button } from "../../../components/Button/Button";

const RefProgram = () => {
  const copyHandler = (link) => {
    navigator.clipboard.writeText(link);
  };

  const link = "https://youmi/signup/therapist/3BR8Fpp4";

  return (
    <>
      <div className="py-[110px]">
        <Container>
          <div className="grid grid-cols-5">
            <div className="col-span-3">
              <h1 className="mb-[10px] text-24 font-semibold">
                Реферальная программа
              </h1>
              <h1 className="mb-[20px] text-40 font-extrabold text-purple">
                Позаботьтесь о других
              </h1>
              <p className="text-18 font-normal leading-[140%]">
                С помощью реферальной программы вы можете приглашать своих
                друзей по вашей индивидуальной ссылке и получать 500 рублей
                за каждого, кто пройдет первую сессию.{" "}
                <span className="block mt-3">
                  Деньги поступают на ваш баланс, с которого вы можете
                  оплачивать сесии.
                </span>
              </p>
            </div>
            <div className="col-span-2 flex justify-end">
              <img src={groupPeople} alt="people" />
            </div>
          </div>
          <div className="mt-[70px]">
            <h1 className="text-18 mb-[15px] text-purple font-medium">
              Ваша ссылка
            </h1>
            <div className="flex items-center justify-between w-full">
              <div className="border border-purple rounded-15 w-[730px] py-[15px] px-[30px]">
                <h1 className=" text-16 text-link opacity-50">{link}</h1>
              </div>
              <Button
                width="w-[260px]"
                height="h-[50px]"
                top="top-[10px]"
                left="left-[5px]"
                py="py-[16px]"
                onClick={() => copyHandler(link)}
              >
                Копировать
              </Button>
            </div>
          </div>
          <div className="mt-[70px]">
            <div className="flex items-center">
              <h1 className="mr-10 text-18 font-medium">
                По вашей ссылке прошли первую сессию:
              </h1>
              <span className="rounded-[30px] py-[11px] text-center text-20 font-semibold w-[180px] text-white bg-purple block">
                8 человек
              </span>
            </div>
            <div className="flex items-center mt-[30px]">
              <h1 className="mr-10 text-18 font-medium">Вам отправили:</h1>
              <span className="rounded-[30px] py-[11px] text-center text-20 font-semibold w-[180px] text-white bg-purple block">
                4 000₽
              </span>
            </div>
          </div>
        </Container>
      </div>
      <div className="-mb-[270px] pb-[270px] bg-aqua-light"></div>
    </>
  );
};

export default RefProgram;
