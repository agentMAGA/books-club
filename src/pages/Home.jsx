import styles from "../scss/pages/home.module.scss";
import Header from "../components/Header";
import SlayderSessions from '../components/SlayderSessions';
import Footer from '../components/Footer';
import PoemCard from '../components/PoemCard';
import { useNavigate } from "react-router-dom"

function Home() {
const navigate = useNavigate();
  return (
    <>
      <Header />
      <main>
        <section className={styles.innerSpacing}>
          <h1 className={styles.titleStyls}>Books Club</h1>
          <p className={styles.subtextTitle + " " +styles.tecstUppercase}>Космос идей. Вселенная книг.</p>
          <button className={styles.tecstUppercase + " " + styles.buttonFonts}  onClick={()=>navigate("/singup")}>Присоединиться</button>
        </section>
        <section className={styles.innerSpacing}>
          <h2 className={styles.titleCenter}>О нас </h2>
          <p className={styles.textRegulirovca}>
            Arête — это постоянное стремление к совершенству и полной реализации своего потенциала.
            Мы начали с книг, ведь именно они зажигают в нас первые звезды любознательности.
            Но наш путь не заканчивается на этом — он только начинается.
          </p>
          <p className={styles.textRegulirovca}>Наш клуб — это созвездие искателей.  </p>
          <p className={styles.textRegulirovca}>Мы — навигаторы в безграничном космосе искусства, дизайна, кино, литературы и многого другого.</p>
          <p className={styles.textRegulirovca}>
            Здесь мы помогаем друг другу прокладывать путь к своим звездам,
            делимся взглядами для расширения кругозора и вдохновением для души.
          </p>
          <p className={styles.textRegulirovca}>Мы оставляем границы позади, чтобы достичь своей Arête.</p>
        </section>

          <SlayderSessions />

        <div className={styles.cards}>
          <div className={styles.h3title}>
            <img src="img/zvezda.svg" alt="zvezda" />
            <h3>Газета</h3>
            <img src="img/zvezda.svg" alt="zvezda" />
          </div>

              <PoemCard />

        </div>

      </main>
      <Footer />
    </>
  )
}
export default Home;