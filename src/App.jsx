import GlobalStyle from "./GlobalStyles";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Privacypage from "./pages/Privacypage";
import Termspage from "./pages/Termspage";
import Playpage from "./pages/Playpage";

function App() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div
      className={`app ${
        pathname === "/terms" || pathname === "/privacy" ? "bg-white" : ""
      }`}
    >
      <GlobalStyle />
      <Navigation />

      <main>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/about" element={<Aboutpage />} />
          <Route exact path="/playnow" element={<Playpage />} />
          <Route exact path="/terms" element={<Termspage />} />
          <Route exact path="/privacy" element={<Privacypage />} />
          <Route
            exact
            path="*"
            element={<Navigate to={"/"} replace={true} />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
