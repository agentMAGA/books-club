import Newspaper from "./pages/Newspaper";
import "./scss/app.scss";
import { Route, Routes } from "react-router";
import LiveSessions from "./pages/LiveSessions";
import Settings from "./pages/Settings";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import SingUp from "./pages/SingUp"
import Happenings from "./pages/Happenings";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newspaper" element={<Newspaper />} />
        <Route path="/happenings" element={<Happenings />} />
        <Route path="/livesessions" element={<LiveSessions />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/singup" element={<SingUp />} />
      </Routes>
    </>
  );
}

export default App;
 