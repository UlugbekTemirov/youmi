import Container from "../../layout/Container";
import AppStoreSection from "../../layout/AppStoreSection";
import AppStoreContent from "../../pages/Home/components/AppStoreContent";
import { Button } from "../Button/Button";

const AppStore = ({ buttonCentered }) => {
  return (
    <>
      <AppStoreSection>
        <AppStoreContent>
          <h1 className="text-purple font-extrabold text-40">
            YouMi заботиться о вас даже вне сессий
          </h1>
          <p className="font-semibold text-20 mt-[35px] max-w-[580px]">
            Работая с YouMi от 4 сессий мы дарим доступ к приложению
            с виртуальным психологом.
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
        </AppStoreContent>
      </AppStoreSection>
      <div
        className={`mt-[120px] ${
          buttonCentered ? "justify-center" : "justify-start"
        } flex `}
      >
        <Button>Доступно в App Store</Button>
      </div>
    </>
  );
};

export default AppStore;
