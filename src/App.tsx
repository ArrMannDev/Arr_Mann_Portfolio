import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroPage from "./components/HeroPage";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <div className="portfolio-shell">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/:section" element={<HeroPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
