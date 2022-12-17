import Container from "../../layout/Container";
import { Button } from "../Button/Button";
import hugphone from "../../assets/images/hugphone.svg";

const HugPhone = () => {
  return (
    <div className=" mt-40">
      <Container>
        <div className="bg-aqua-light grid grid-cols-2 box-border px-[120px] py-[80px] max-h-[400px] rounded-[20px]">
          <div className="col-span-1">
            <h1 className="text-purple text-40 font-extrabold mb-10">
              Подберите своего психолога онлайн
            </h1>
            <Button>Подобрать психолога</Button>
          </div>

          <div className="col-span-1 flex justify-end -mt-28">
            <img src={hugphone} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HugPhone;
