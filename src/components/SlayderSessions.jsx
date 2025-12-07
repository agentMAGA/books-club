import styles from "../scss/components/slayderSessions.module.scss";
import { useSliderEvents } from '../API/UseSliderLogic';

const SlayderSessions = function () {

    const { slaiderTime, setEventsPlus, setEventsMinus, numberMas } = useSliderEvents();
    const currentSlide = slaiderTime.find(item => item.id === numberMas);

    return (
        <div className={styles.visualBackdrop}>
            <h4 className={styles.titleEvents}>Мероприятия</h4>

            <div key={currentSlide.id} className={styles.subtextOfTheEvent}>

                <nav className={styles.leftArrow}>
                    <button onClick={() => setEventsMinus()} aria-label="Предыдущий">‹</button>
                </nav>

                <div>
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

                <nav className={styles.rightArrow}>
                    <button onClick={() => setEventsPlus()} aria-label="Следующий">›</button>
                </nav>

            </div>
        </div>
    )
}
export default SlayderSessions;