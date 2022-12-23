import { useState } from "react";
import { Button } from "../../components/Button/Button";

// layout
import Container from "../../layout/Container";

const PaymentScreen = () => {
  const style =
    "border border-purple py-[9px] px-[20px] mt-[15px] text-16 w-full rounded-10 ";
  const labelstyle = "block text-purple text-16 font-[500]";

  const [check, setCheck] = useState(false);

  return (
    <div className="pt-[180px] pb-[160px]">
      <Container>
        <div className="grid grid-cols-5">
          <div className="col-span-3 flex justify-center">
            <div>
              <h1 className="text-24 font-semibold">
                Заполнение данных для оплаты
              </h1>
              <form className="mt-[30px] max-w-[480px]">
                <div>
                  <label className={labelstyle}>Номер карты</label>
                  <input
                    className={style}
                    placeholder="0000 0000 0000 0000"
                    type="number"
                  />
                </div>

                <div className="grid grid-cols-5 mt-[20px] gap-[30px]">
                  <div className="col-span-3">
                    <label className={labelstyle}>Действительна</label>
                    <input className={style} placeholder="01/24" type="text" />
                  </div>
                  <div className="col-span-2">
                    <label className={labelstyle}>CVV</label>
                    <input className={style} placeholder="000" type="number" />
                  </div>
                </div>

                <div className="mt-[20px]">
                  <label className={labelstyle}>Держатель карты</label>
                  <input
                    className={style}
                    placeholder="IVAN INANOV"
                    type="text"
                  />
                </div>

                <div className="mt-[30px]">
                  <div className="flex items-center">
                    <label
                      htmlFor="confirm"
                      className={`rounded-[5px] w-[30px] h-[30px] border duration-100 border-purple cursor-pointer ${
                        check && "bg-purple"
                      } flex items-center justify-center`}
                    >
                      <span className="icon icon-checked"></span>
                    </label>
                    <label
                      htmlFor="confirm"
                      className="ml-[39px] text-16 cursor-pointer"
                    >
                      Запомнить карту для последующих оплат
                    </label>
                  </div>
                  <input
                    onChange={(e) => setCheck(e.target.checked)}
                    className="hidden"
                    id="confirm"
                    type="checkbox"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="col-span-2 flex justify-center items-center">
            <span className="icon icon-coin"></span>
          </div>
        </div>
        <div className="flex justify-center">
          <Button width="w-[320px] mt-[100px]">Оплатить</Button>
        </div>
      </Container>
    </div>
  );
};

export default PaymentScreen;
