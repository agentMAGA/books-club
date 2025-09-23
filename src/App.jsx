import Newspaper from "./pages/newspaper";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./scss/app.scss";
import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import LiveSessions from "./pages/LiveSessions";

function App() {
  return (
    <>

      <Header />
      <Home />
      <Routes>
        <Route path="/newspaper" element={<Newspaper />} />
        <Route path="/livesessions" element={<LiveSessions />} />
      </Routes>
      <Footer />
      {/* <main>

      <div className="visualBackdrop">
        <h4 className="titleEvents">Мероприятия</h4>
        <div className="subtextOfTheEvent">
          <nav>
            <button aria-label="Предыдущий">‹</button>
          </nav>

          <div>

            <article>
              <p><strong>Собрание книжного клуба</strong></p>
              <p>
                Morem ipsum dolor sit amet,
                consectetur adipiscing elit.
                Etiam eu turpis molestie, dictum est a, mattis tellus.
                Sed dignissim, metus nec...
              </p>
            </article>
            <article className="timeRangeDate">
              <p>24.08.2025 13:00 -<br />24.08.2025 14:00</p>
            </article>

            <div>
              <span><img src="img\usersIcons.svg" alt="usersIcons" /></span>
              <span>14</span>
            </div>

          </div>

          <nav>
            <button aria-label="Следующий">›</button>
          </nav>
        </div>
      </div>
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
