// SlayderSessions.tsx
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import styles from "../scss/components/slayderSessions.module.scss";
import { slaiderTime } from '../data/slaiderTime';

const SlayderSessions = () => {
  return (
    <div className={styles.visualBackdrop}>
      <h4 className={styles.titleEvents}>Мероприятия</h4>

      <Splide
        options={{
          type: 'loop',
          perPage: 2,
          perMove: 1,
          gap: '1.5rem',
          arrows: true,
          pagination: false,
          drag: true,
          breakpoints: {
            768: {
              perPage: 1,
              gap: '1rem',
            },
          },
        }}
        // Добавим класс, чтобы стилизовать обёртку Splide
        className={styles.splideWrapper}
      >
        {slaiderTime.map((item) => (
          <SplideSlide key={item.id}>
            <div className={styles.subtextOfTheEvent}>
              <article>
                <p>
                  <strong className={styles.monstratStyls400}>
                    {item.title}
                  </strong>
                </p>
                <p className={`${styles.monstratStyls300} ${styles.positionSlaiderFiks}`}>
                  {item.text}
                </p>
              </article>
              <article className={styles.timeRangeDate}>
                <p className={styles.monstratStyls300}>
                  {item.dateStart} {item.timeStart} -<br />
                  {item.dateFinish} {item.timeFinish}
                </p>
                <div className={styles.usersIcon}>
                  <img src="img/usersIcons.svg" alt="Участники" />
                  <span className={styles.numberUsers}>{item.users}</span>
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