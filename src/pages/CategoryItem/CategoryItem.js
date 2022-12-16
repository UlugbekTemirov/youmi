import { ExactPath, Navbar } from "../../components";
import { useParams } from "react-router-dom";
import Container from "../../layout/Container";

const CategoryItem = () => {
  const { name } = useParams();
  return (
    <div>
      <Navbar />
      <div className="pt-[150px]"></div>
      <Container>
        <ExactPath name={name} />
      </Container>
    </div>
  );
};

export default CategoryItem;
