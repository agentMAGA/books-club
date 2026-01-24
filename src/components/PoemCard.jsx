import styles from "../scss/components/poemCard.module.scss";
import { useSliderPoem } from "../API/UseSliderLogic";

const PoemCard = () => {

  const { slaiderPoem, neumbersPoem, setPoemPlus, setPoemMinus } = useSliderPoem();
  const currentSlide = slaiderPoem.find(item => item.id === neumbersPoem);

  return (
    <div className={styles.visualBackdrop}>
      <nav className={styles.leftArrow} onClick={setPoemMinus}>
        <button aria-label="Предыдущий">‹</button>
      </nav>
      <div>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.cardType + " " + styles.monstratStyls300}>{currentSlide.thips}</span>
            <span className={styles.cardAuthor + " " + styles.monstratStyls300}>{currentSlide.autor}</span>
          </div>
          <div className={styles.cardBody}>
            {/* Первая строка жирная, остальное обычным pre */}
            <div className={styles.titleLine}>{currentSlide.title}</div>
            <pre className={styles.cardContent}>{currentSlide.text.replace(/^.*\n/, "")}</pre>
          </div>
          <div className={styles.cardFooter}>
            <span className={styles.date}>{currentSlide.dateStart}</span>
          </div>
        </div>

      </div>

      <nav className={styles.rightArrow} onClick={setPoemPlus}>
        <button aria-label="Следующий">›</button>
      </nav>

    </div>


  )
};

export default PoemCard;