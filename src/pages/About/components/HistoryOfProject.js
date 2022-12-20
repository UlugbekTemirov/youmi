import pro1 from "../../../assets/images/professionals5.svg";
import pro2 from "../../../assets/images/professionals6.svg";

import probg from "../../../assets/images/probg.svg";
import Container from "../../../layout/Container";

const HistoryOfProject = () => {
  return (
    <div className="pt-[80px] pb-[100px] bg-aqua-light">
      <Container>
        <h1 className="text-center text-purple font-extrabold text-40">
          История проекта
        </h1>
        <div>
          <div className="grid grid-cols-5 mt-[90px]">
            <div className="col-span-2 z-20 flex items-center justify-center">
              <div className="relative">
                <img src={pro1} alt="professional" />
                <img
                  className="absolute top-4 left-4 -z-10"
                  src={probg}
                  alt="probg"
                />
              </div>
            </div>
            <div className="col-span-3 flex items-center justify-center">
              <div>
                <div className="relative">
                  <span className="icon icon-quoteup absolute -top-4 -left-[66px]"></span>
                  <span className="icon icon-quotedown absolute -bottom-4 -right-[66px]"></span>
                  <p className="max-w-[470px] text-20">
                    Каждое наше действие основано на заботе о наших клиентах
                    и психотерапевтах. Мы гарантируем защиту и тем, и другим.
                  </p>
                </div>
                <div className="flex w-full justify-end mt-[50px]">
                  <div>
                    <h1 className="text-right text-24 text-purple font-bold">
                      Мария Литвинова
                    </h1>
                    <p className="text-right text-16">Соосновательница YouMi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-5 mt-[135px]">
            <div className="col-span-3 flex items-center justify-center">
              <div>
                <div className="relative">
                  <span className="icon icon-quoteup absolute -top-4 -left-[66px]"></span>
                  <span className="icon icon-quotedown absolute -bottom-4 -right-[66px]"></span>
                  <p className="max-w-[470px] text-20">
                    Наша миссия — сделать психотерапию понятной для каждого и
                    убрать барьеры перед обращением за психологической помощью.
                  </p>
                </div>
                <div className="flex w-full justify-end mt-[50px]">
                  <div>
                    <h1 className="text-right text-24 text-purple font-bold">
                      Иван Никитин
                    </h1>
                    <p className="text-right text-16">Сооснователь YouMi</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2 z-20 flex items-center justify-center">
              <div className="relative">
                <img src={pro2} alt="professional" />
                <img
                  className="absolute top-4 left-4 -z-10"
                  src={probg}
                  alt="probg"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HistoryOfProject;
