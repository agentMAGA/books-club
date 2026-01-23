import Newspaper from "./pages/Newspaper";
import "./scss/app.scss";
import { Route, Routes } from "react-router";
import Settings from "./pages/Settings";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import SingUp from "./pages/SingUp"
import Happenings from "./pages/Happenings";
import Rating from "./pages/Rating";
import AdminPanel from "./pages/AdminPanel"
import { useTheme } from "./store/useTheme";

function App() {
  const { theme } = useTheme();
  return (
    <div className={ theme === 'black' ? "app" : "appColor" }>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newspaper" element={<Newspaper />} />
        <Route path="/happenings" element={<Happenings />} />
        <Route path="/rating" element={<Rating/>} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </div>
  );
}

export default App;
 