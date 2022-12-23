import { Footer, HugPhone, TripleCarousel } from "../../components";
import Categories from "./components/Categories/Categories";
import Filters from "./components/Filters/Filters";
import Container from "../../layout/Container";
import search_icon from "../../assets/icons/search.svg";
import { Button } from "../../components";
import hugphone from "../../assets/images/hugphone.svg";

const Blog = () => {
  window.scrollTo({
    top: 0,
  });

  return (
    <div className="pt-[150px]">
      <Container>
        <div className="flex justify-between">
          <h1 className="text-24 font-semibold text-charcoal">Категории</h1>
          <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-aqua-dark">
            <img src={search_icon} alt="" />
          </div>
        </div>
      </Container>
      <Categories />
      {/* <Filters /> */}
      <TripleCarousel />
      <HugPhone />
    </div>
  );
};

export default Blog;
