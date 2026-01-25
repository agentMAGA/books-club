import styles from "../scss/components/slayderSessions.module.scss";
import { useSliderEvents } from '../API/UseSliderLogic';
import { useTheme } from "../store/useTheme";

const SlayderSessions = function () {
    const { theme } = useTheme();
    const { slaiderTime, setEventsPlus, setEventsMinus, numberMas } = useSliderEvents();
    const currentSlide = slaiderTime.find(item => item.id === numberMas);

    return (
        <div className={theme === 'black' ? styles.visualBackdrop : `${styles.visualBackdrop } ${styles.visualBackdropColor }`}>
            <h4 className={theme === 'black' ? styles.titleEvents : `${styles.titleEvents} ${styles.titleColor}`}>Мероприятия</h4>

            <div key={currentSlide.id} className={theme === 'black' ? styles.subtextOfTheEvent : `${styles.subtextOfTheEvent} ${styles.subtextColor}`}>

                <nav className={theme === 'black' ? styles.leftArrow : `${styles.leftArrow} ${styles.arrowColor}`}>
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
                        <div className={theme === 'black' ? styles.usersIcon : `${styles.usersIcon} ${styles.arrowColor}`}>
                            <img src="img\usersIcons.svg" alt="usersIcons" />
                            <span className={styles.numberUsers}>{currentSlide.users}</span>
                        </div>
                    </article>
                </div>

                <nav className={theme === 'black' ? styles.rightArrow : `${styles.rightArrow} ${styles.arrowColor}`}>
                    <button onClick={() => setEventsPlus()} aria-label="Следующий">›</button>
                </nav>

            </div>
        </div>
    )
}
export default SlayderSessions;