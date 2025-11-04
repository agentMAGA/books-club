import React from 'react'
import styles from "../scss/components/slayderSessions.module.scss";

 const SlayderSessions = function() {
    return (

        <div className={styles.visualBackdrop}>
            <h4 className={styles.titleEvents}>Мероприятия</h4>
            <div className={styles.subtextOfTheEvent}>
                <nav className={styles.leftArrow}>
                    <button aria-label="Предыдущий">‹</button>
                </nav>
                <div>
                    <article>
                        <p><strong className={styles.monstratStyls400}>Собрание книжного клуба</strong></p>
                        <p className={styles.monstratStyls300}> 
                            Morem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            Etiam eu turpis molestie, dictum est a, mattis tellus.
                            Sed dignissim, metus nec...
                        </p>
                    </article>
                    <article className={styles.timeRangeDate}>
                        <p className={styles.monstratStyls300}>24.08.2025 13:00 -<br />24.08.2025 14:00</p>
                        <div className={styles.usersIcon}>
                            <img src="img\usersIcons.svg" alt="usersIcons" />
                            <span className={styles.numberUsers}>14</span>
                        </div>
                    </article>
                </div>
                <nav className={styles.rightArrow}>
                    <button aria-label="Следующий">›</button>
                </nav>

            </div>
        </div>

    )
}
export default SlayderSessions;