import Newspaper from "./pages/newspaper";
import Home from "./pages/Home";
import "./scss/app.scss";
import { Route, Routes } from "react-router";
import LiveSessions from "./pages/LiveSessions";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newspaper" element={<Newspaper />} />
        <Route path="/livesessions" element={<LiveSessions />} />
      </Routes>
    </>
  );
}

export default App;
