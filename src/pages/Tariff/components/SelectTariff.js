import { AppStore } from "../../../components";
import Container from "../../../layout/Container";
import Tarif from "../../Rates/components/Tarifs";
import sessionimg from "../../../assets/images/sessionplanwoman.svg";

const SelectTariff = () => {
  return (
    <div>
      <div className="-mt-[200px] pt-[300px] pb-[100px] bg-aqua-light">
        <Container>
          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <h1 className="text-40 font-extrabold mb-[30px] max-w-[700px] text-purple">
                Выберите количество сессий, которое вы хотите оплатить.{" "}
              </h1>
              <p className="max-w-[580px] text-24 font-medium">
                Если у вас есть промокод, обязательно им воспользуйтесь.
              </p>
              <div className="flex items-center mt-[60px]">
                <h1 className="text-purple mr-10 text-20 font-semibold">
                  На балансе:
                </h1>
                <span className="rounded-[30px] bg-purple w-[170px] py-[11px] text-center text-white font-extrabold">
                  4 сессии
                </span>
              </div>
            </div>
            <div className="col-span-1">
              <img src={sessionimg} alt="" />
            </div>
          </div>
        </Container>
      </div>
      <div className="pt-[120px] pb-[135px]">
        <Container>
          <Tarif autoPro />
        </Container>
      </div>
      <div className="py-[120px] bg-aqua-light">
        <AppStore>
          <h1 className="text-purple font-extrabold text-40">
            Оплачивая пакет от 4 сессий
          </h1>
          <p className="font-semibold text-20 mt-[35px] max-w-[580px]">
            мы дарим доступ к приложению с виртуальным психологом.
          </p>
          <div className="flex items-center mt-[45px]">
            <span className="icon icon-correct"></span>
            <h1 className="ml-[30px] max-w-[440px] pr-20 text-18">
              Прорабатывайте себя с помощью упражнений и аудиопрактик
            </h1>
          </div>
          <div className="flex items-center mt-[45px]">
            <span className="icon icon-correct"></span>
            <h1 className="ml-[30px] max-w-[440px] text-18">
              Ведите личный дневник настроения и получайте подробную статистику
              о себе
            </h1>
          </div>
          <div className="flex items-center mt-[45px]">
            <span className="icon icon-correct"></span>
            <h1 className="ml-[30px] max-w-[440px] text-18">
              Расскажите виртуальному психологу о своих чувствах и он подберет
              актуальный материал
            </h1>
          </div>
        </AppStore>
      </div>
    </div>
  );
};

export default SelectTariff;
