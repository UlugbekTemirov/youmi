import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// pages
import { Home } from "../pages";

// components
import { Navbar } from "../components";

// layout
import Container from "../layout/Container";

const Router = () => {
  return (
    <BrowserRouter>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default Router;
