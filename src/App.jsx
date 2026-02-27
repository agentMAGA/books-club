import { useEffect } from "react";
import Newspaper from "./pages/Newspaper";
import "./scss/app.scss";
import { Route, Routes } from "react-router";
import Settings from "./pages/Settings";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import SingUp from "./pages/SingUp";
import Happenings from "./pages/Happenings";
import EventDetails from "./pages/EventDetails";
import Rating from "./pages/Rating";
import AdminPanel from "./pages/AdminPanel";
import { useTheme } from "./store/useTheme";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import { useAuthStore } from "./store/authStore";
import { getTokenExpiryMs, isTokenExpired } from "./utils/jwt";

function App() {
  const { theme } = useTheme();
  const token = useAuthStore((state) => state.token);
  const logout = useAuthStore((state) => state.logout);

  useEffect(() => {
    if (!token) return;

    if (isTokenExpired(token)) {
      logout();
      return;
    }

    const expiryMs = getTokenExpiryMs(token);
    if (!expiryMs) return;

    const timeout = expiryMs - Date.now();
    if (timeout <= 0) {
      logout();
      return;
    }

    const timerId = setTimeout(() => {
      logout();
    }, timeout);

    return () => clearTimeout(timerId);
  }, [token, logout]);

  return (
    <div className={theme === "black" ? "app" : "appColor"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newspaper" element={<Newspaper />} />
        <Route path="/happenings" element={<Happenings />} />
        <Route path="/happenings/:id" element={<EventDetails />} />
        <Route path="/rating" element={<Rating />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/registration" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
