import Newspaper from "./pages/newspaper";
import Header from "./components/Header";
import "./scss/app.scss";
import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import LiveSessions from "./pages/LiveSessions";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/newspaper" element={<Newspaper />} />
        <Route path="/livesessions" element={<LiveSessions />} />
      </Routes>
      <Footer />
      {/* <main>

        <section className="innerSpacing">

          <h1>Books Club</h1>
          <p>Космос идей. Вселенная книг.</p>
          <button>Присоединиться</button>

        </section>

        <section className="innerSpacing">

          <h2>О нас </h2>
          <p>
            Arête — это постоянное стремление к совершенству и полной реализации своего потенциала.
            Мы начали с книг, ведь именно они зажигают в нас первые звезды любознательности.
            Но наш путь не заканчивается на этом — он только начинается.
          </p>

          <p>Наш клуб — это созвездие искателей.  </p>

          <p>Мы — навигаторы в безграничном космосе искусства, дизайна, кино, литературы и многого другого.</p>

          <p>
            Здесь мы помогаем друг другу прокладывать путь к своим звездам,
            делимся взглядами для расширения кругозора и вдохновением для души.
          </p>

          <p>Мы оставляем границы позади, чтобы достичь своей Arête.</p>

        </section>

      </main> */}
    </>
  );
}

export default App;
