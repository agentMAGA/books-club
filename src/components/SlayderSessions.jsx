// SlayderSessions.tsx
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import styles from "../scss/components/slayderSessions.module.scss";
import { slaiderTime } from '../data/slaiderTime';

const SlayderSessions = () => {
  return (
    <div className={styles.visualBackdrop}>
      <h4 className={styles.titleEvents}>Мероприятия</h4>

            <div key={currentSlide.id} className={styles.subtextOfTheEvent}>

                <nav className={styles.leftArrow}>
                    <button onClick={() => setEventsMinus()} aria-label="Предыдущий">‹</button>
                </nav>

                <div style={{flex:1}}>
                    <article>
                        <p><strong className={styles.monstratStyls400}>{currentSlide.title}</strong></p>
                        <p className={styles.monstratStyls300 + " " + styles.positionSlaiderFiks}>
                            {currentSlide.text}
                        </p>
                    </article>
                    <article className={styles.timeRangeDate}>
                        <p className={styles.monstratStyls300}>{currentSlide.dateStart} {currentSlide.timeStart} -<br />
                            {currentSlide.dateFinish} {currentSlide.timeFinish}</p>
                        <div className={styles.usersIcon}>
                            <img src="img\usersIcons.svg" alt="usersIcons" />
                            <span className={styles.numberUsers}>{currentSlide.users}</span>
                        </div>
                    </article>
                </div>
              </article>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default SlayderSessions;