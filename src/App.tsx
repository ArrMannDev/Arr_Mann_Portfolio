import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageLayOut from "./pages/PageLayOut";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PageLayOut />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
