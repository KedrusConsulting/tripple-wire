import GlobalStyle from "./GlobalStyles";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import { Suspense, lazy } from "react";
import Loader from "./components/Loader";

const Homepage = lazy(() => import("./pages/Homepage"));
const Privacypage = lazy(() => import("./pages/Privacypage"));
const Aboutpage = lazy(() => import("./pages/Aboutpage"));
const Termspage = lazy(() => import("./pages/Termspage"));
const Playpage = lazy(() => import("./pages/Playpage"));

function App() {
  const { pathname } = useLocation();
  return (
    <Suspense fallback={<Loader />}>
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
    </Suspense>
  );
}

export default App;
