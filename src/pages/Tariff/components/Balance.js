import { useState } from "react";
import Container from "../../../layout/Container";

const Balance = () => {
  const [payment, setPayment] = useState("");

  return (
    <div className="py-[100px]">
      <Container>
        <div>
          <h1 className="text-24 font-semibold max-w-[680px]">
            Пополняйте баланс для оплаты сессий заранее и не беспокойтесь
            о состоянии банковской карты.
          </h1>
          <div className="mt-[50px]">
            <label className="font-medium text-18 block">Сумма</label>
            <input
              className="border border-purple rounded-10 w-[280px] h-[50px] mt-[15px] py-1 px-4"
              type="number"
            />
          </div>
          <div className="mt-[50px]">
            <label className="text-18 font-medium">
              Выберите способ оплаты
            </label>
            <div className="mt-[15px] flex">
              <button
                onClick={() => setPayment("qiwi")}
                className={`w-[159px] h-[50px] flex justify-center items-center border border-purple rounded-10 mr-8 ${
                  payment === "qiwi" && "bg-purple"
                }`}
              >
                <span className="icon icon-qiwi"></span>
              </button>
              <button
                onClick={() => setPayment("webmoney")}
                className={`w-[191px] h-[50px] flex justify-center items-center border border-purple rounded-10 mr-8 ${
                  payment === "webmoney" && "bg-purple"
                }`}
              >
                <span className="icon icon-webmoney"></span>
              </button>
              <button
                onClick={() => setPayment("bankcard")}
                className={`w-[258px] h-[50px] flex justify-center items-center border border-purple rounded-10 mr-8 ${
                  payment === "bankcard" && "bg-purple"
                }`}
              >
                <h1
                  className={` font-medium ${
                    payment === "bankcard" ? "text-white" : "text-purple"
                  }`}
                >
                  Банковской картой
                </h1>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Balance;
