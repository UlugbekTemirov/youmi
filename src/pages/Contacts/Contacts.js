import Container from "../../layout/Container";

const Contacts = () => {
  return (
    <div className="pt-[200px] pb-[120px]">
      <Container>
        <div className="flex items-center">
          <span className="icon icon-telephone"></span>
          <h1 className="text-40 text-purple font-extrabold ml-[55px]">
            Контакты
          </h1>
        </div>
        <div className="grid grid-cols-2 mt-[70px]">
          <div className="col-span-1">
            <div className="mb-[60px]">
              <h1 className="mb-[15px] font-semibold text-24">
                Поддержка клиентов
              </h1>
              <p className="text-20">+ 7 916 635 83 31</p>
            </div>
            <div className="mb-[60px]">
              <h1 className="mb-[15px] font-semibold text-24">
                Сотрудничество со СМИ
              </h1>
              <p className="text-20">+ 7 916 635 83 31</p>
            </div>
            <div>
              <h1 className="mb-[15px] font-semibold text-24">
                Сотрудничество с блоггерами
              </h1>
              <p className="text-20">+ 7 916 635 83 31</p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="mb-[60px]">
              <h1 className="mb-[15px] font-semibold text-24">
                Для предложений
              </h1>
              <p className="text-20">+ 7 916 635 83 31</p>
            </div>
            <div className="mb-[60px]">
              <h1 className="mb-[15px] font-semibold text-24">
                Сотрудничество с психологами
              </h1>
              <p className="text-20">+ 7 916 635 83 31</p>
            </div>
            <div>
              <h1 className="mb-[15px] font-semibold text-24">
                Работа в YouMi
              </h1>
              <p className="text-20">+ 7 916 635 83 31</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contacts;
