import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Search from '../components/Search';
import styles from "../scss/pages/happenings.module.scss";

const Happenings = function () {
    return (
        <>
            <Header />
            <h1 className={styles.titleEvents}>Мероприятия</h1>
            <div className={styles.search}>
                <Search />
            </div>
            <div className={styles.visualBackdrop}>

                <div className={styles.subtextOfTheEvent}>
                    <div className={styles.suvent}>
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
                </div>

                <div className={styles.subtextOfTheEvent}>
                    <div className={styles.suvent}>
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
                </div>

                <div className={styles.subtextOfTheEvent}>
                    <div className={styles.suvent}>
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
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Happenings;