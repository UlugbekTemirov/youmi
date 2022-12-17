import Container from "../../../layout/Container";
import AppStoreSection from "../../../layout/AppStoreSection";
import AppStoreContent from "./AppStoreContent";
import { Button } from "../../../components/Button/Button";

const AppStore = () => {
  return (
    <div className="py-[120px] bg-aqua-light">
      <Container>
        <AppStoreSection>
          <AppStoreContent />
        </AppStoreSection>
        <div className="mt-[120px] flex justify-center">
          <Button>Доступно в App Store</Button>
        </div>
      </Container>
    </div>
  );
};

export default AppStore;
