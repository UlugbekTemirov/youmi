import Container from "../../layout/Container";
import AppStoreSection from "../../layout/AppStoreSection";
import AppStoreContent from "../../pages/Home/components/AppStoreContent";
import { Button } from "../Button/Button";

const AppStore = ({ buttonCentered, children }) => {
  return (
    <Container>
      <AppStoreSection>
        <AppStoreContent>{children}</AppStoreContent>
      </AppStoreSection>
      <div
        className={`mt-[120px] ${
          buttonCentered ? "justify-center" : "justify-start"
        } flex `}
      >
        <Button>Доступно в App Store</Button>
      </div>
    </Container>
  );
};

export default AppStore;
