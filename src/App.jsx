import Newspaper from "./pages/newspaper";
import "./scss/app.scss";
import { Route, Routes } from "react-router";
import LiveSessions from "./pages/LiveSessions";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <Routes>
        <Route path="/newspaper" element={<Newspaper />} />
        <Route path="/livesessions" element={<LiveSessions />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
