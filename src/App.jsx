import Newspaper from "./pages/newspaper";
import "./scss/app.scss";
import { Route, Routes } from "react-router";
import LiveSessions from "./pages/LiveSessions";
import Settings from "./pages/Settings";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newspaper" element={<Newspaper />} />
        <Route path="/livesessions" element={<LiveSessions />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
