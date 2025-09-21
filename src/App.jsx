import "./scss/app.scss";
import Header from "./components/Header";

function App() {

  return (
    <>
      <Header />
      <main>

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

{/* ////////////////////////////////////////////////////////////////////////////// просто разделение, при жеалании можно удалить*/}

        <div className="visualBackdrop">

          <h4 className="titleEvents">Мероприятия</h4>

          <nav>
            <button aria-label="Предыдущий">‹</button>
          </nav>

          <div>

            <article>
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

      </main>
    </>
  )
}

export default App
