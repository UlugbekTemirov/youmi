import { ExactPath, Footer, Navbar } from "../../components";
import { useParams } from "react-router-dom";
import CategoryItemList from "./components/CategoryItemList";
import { useQuery } from "../../hooks/useQuery";
import CategoryItemAnswers from "./components/CategoryItemAnswers";

const CategoryItem = () => {
  const { name } = useParams();
  let query = useQuery();
  const question = query.get("question");
  return (
    <div>
      <div className="pt-[150px]">
        <ExactPath name={name} question={question ? question : null} />
        {question ? <CategoryItemAnswers /> : <CategoryItemList name={name} />}
      </div>
    </div>
  );
};

export default CategoryItem;
