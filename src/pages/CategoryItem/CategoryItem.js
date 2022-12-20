import { ExactPath, Footer, Navbar } from "../../components";
import { useParams } from "react-router-dom";
import CategoryItemList from "./components/CategoryItemList";
import { useQuery } from "../../hooks/useQuery";
import CategoryItemAnswers from "./components/CategoryItemAnswers";

const CategoryItem = () => {
  const { name, question } = useParams();
  console.log(name);
  return (
    <div>
      <div className="pt-[150px]">
        <ExactPath name={name} />
        <CategoryItemList name={name} />
      </div>
    </div>
  );
};

export default CategoryItem;
