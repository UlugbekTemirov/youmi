import "./App.css";

// owl carousel
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// calendar
// import "react-calendar/dist/Calendar.css";

// router
import Router from "./router/Router";

const App = () => {
  const width = window.innerWidth;
  const ok = width > 1180;

  if (ok) return <Router />;
  else
    return (
      <h1 className="text-2xl mt-4 text-center text-purple font-extrabold">
        Your screen resolusion is too small to open this website.
      </h1>
    );
};

export default App;
