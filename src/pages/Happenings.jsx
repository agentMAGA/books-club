import Header from '../components/Header';
import Footer from '../components/Footer';
import Search from '../components/Search';
import styles from "../scss/pages/happenings.module.scss";
import { slaiderTime } from '../data/slaiderTime';

const Happenings = function () {
    return (
        <div className={styles.container}>
            <Header />
            <h1 className={styles.titleEvents}>Мероприятия</h1>

            <Search />

            <div className={styles.visualBackdrop}>

                {slaiderTime.map((item) => (
                    <div className={styles.subtextOfTheEvent} key={item.id}>
                        <div className={styles.suvent}>
                            <article>
                                <p><strong className={styles.monstratStyls400}>{item.title}</strong></p>
                                <p className={styles.monstratStyls300}>
                                    {item.text}
                                </p>
                            </article>
                            <article className={styles.timeRangeDate}>
                                <p className={styles.monstratStyls300}>
                                    {item.dateStart} {item.timeStart} -<br />
                                    {item.dateFinish} {item.timeFinish}
                                </p>
                                <div className={styles.usersIcon}>
                                    <img src="img\usersIcons.svg" alt="usersIcons" />
                                    <span className={styles.numberUsers}>{item.users}</span>
                                </div>
                            </article>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default Happenings;