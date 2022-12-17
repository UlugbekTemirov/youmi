import specialist from "../../../assets/images/specialist.svg";
import Container from "../../../layout/Container";

const Ambulance = () => {
  return (
    <div className="pt-[150px] pb-[120px]">
      <Container>
        <div className="w-full rounded-[25px] px-[100px] py-[55px] bg-aqua-light relative">
          <img
            className="absolute -top-[30px] right-[38px]"
            src={specialist}
            alt="specialist"
          />
          <div>
            <h1 className="font-extrabold text-40 text-purple">
              Экстренная помощь
            </h1>
            <p className="max-w-[780px] mt-[20px] mb-5 text-20">
              Если вам необходима
              <span className="font-bold">
                {" "}
                срочная психологическая помощь{" "}
              </span>
              и вы чувствуете, что не можете больше справиться самостоятельно,
              обратитесь по одному из контактов ниже.
            </p>
            <div className="grid grid-cols-2">
              <div className="col-span-1">
                <div className="mt-[30px]">
                  <h1 className="font-semibold text-24">+7 495 989 50 50</h1>
                  <p className="mt-[15px] max-w-[450px] text-20">
                    Центр экстренной психологической помощи МЧС России
                  </p>
                </div>
                <div className="mt-[30px]">
                  <h1 className="font-semibold text-24">8 800 333 44 34</h1>
                  <p className="mt-[15px] max-w-[450px] text-20">
                    Бесплатная кризисная линия доверия
                  </p>
                </div>
                <div className="mt-[30px]">
                  <h1 className="font-semibold text-24">8 800 2000 122</h1>
                  <p className="mt-[15px] max-w-[450px] text-20 pr-10">
                    Всероссийская служба детского телефона доверия
                  </p>
                </div>
              </div>
              <div className="col-span-1 flex justify-center">
                <div>
                  <div className="mt-[30px]">
                    <h1 className="font-semibold text-24">+7 499 173 09 09</h1>
                    <p className="mt-[15px] max-w-[450px] text-20">
                      Московская служба психологической помощи населению
                    </p>
                  </div>
                  <div className="mt-[30px]">
                    <h1 className="font-semibold text-24">8 800 700 06 00</h1>
                    <p className="mt-[15px] max-w-[450px] text-20">
                      Всероссийский телефон доверия для женщин, пострадавших от
                      домашнего насилия
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Ambulance;
