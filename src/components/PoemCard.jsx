import styles from "../scss/components/poemCard.module.scss";
import { useSliderPoem } from "../API/UseSliderLogic";
import { useTheme } from "../store/useTheme";

const PoemCard = () => {
    const { theme } = useTheme();
  const { slaiderPoem, neumbersPoem, setPoemPlus, setPoemMinus } = useSliderPoem();
  const currentSlide = slaiderPoem.find(item => item.id === neumbersPoem);

  return (
    <div className={styles.visualBackdrop}>
      <nav className={theme === 'black' ? styles.leftArrow  : `${styles.leftArrow } ${styles.arrowColor}`} onClick={setPoemMinus}>
        <button aria-label="Предыдущий">‹</button>
      </nav>
      <div>
        <div className={theme === 'black' ? styles.card : `${styles.card} ${styles.cardColor}`}>
          <div className={styles.cardHeader}>
            <span className={styles.cardType + " " + styles.monstratStyls300}>{currentSlide.thips}</span>
            <span className={styles.cardAuthor + " " + styles.monstratStyls300}>{currentSlide.autor}</span>
          </div>
          <div className={styles.cardBody}>
            {/* Первая строка жирная, остальное обычным pre */}
            <div className={styles.titleLine}>{currentSlide.title}</div>
            <pre className={ theme === 'black' ? styles.cardContent : `${styles.cardContent} ${styles.cardContentColor}`}>
              {currentSlide.text.replace(/^.*\n/, "")}
            </pre>
          </div>
          <div className={styles.cardFooter}>
            <span className={styles.date}>{currentSlide.dateStart}</span>
          </div>
        </div>

      </div>

      <nav className={theme === 'black' ? styles.rightArrow : `${styles.rightArrow} ${styles.arrowColor}`} onClick={setPoemPlus}>
        <button aria-label="Следующий">›</button>
      </nav>

    </div>


  )
};

export default PoemCard;