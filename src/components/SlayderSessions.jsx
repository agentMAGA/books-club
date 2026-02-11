import styles from "../scss/components/slayderSessions.module.scss";
import { useEffect } from "react";
import { useSliderEvents } from '../API/UseSliderLogic';
import { useTheme } from "../store/useTheme";

const SlayderSessions = function () {
    const { theme } = useTheme();
    const { slaiderTime, setEventsPlus, setEventsMinus, numberMas, fetchSliderEvents, loading, error } = useSliderEvents();
    const currentSlide = slaiderTime?.[numberMas];

    useEffect(() => {
        fetchSliderEvents();
    }, [fetchSliderEvents]);

    // Ранний возврат при загрузке
    if (loading) {
        return (
            <div className={theme === 'black' ? styles.visualBackdrop : `${styles.visualBackdrop} ${styles.visualBackdropColor}`}>
                <p style={{ textAlign: "center" }}>Загрузка...</p>
            </div>
        );
    }

    // Ранний возврат при ошибке
    if (error) {
        return (
            <div className={theme === 'black' ? styles.visualBackdrop : `${styles.visualBackdrop} ${styles.visualBackdropColor}`}>
                <p style={{ color: "red", textAlign: "center" }}>
                    {typeof error === 'string' ? error : error?.message || 'Ошибка загрузки'}
                </p>
            </div>
        );
    }

    // Ранний возврат при отсутствии данных
    if (!currentSlide) {
        return (
            <div className={theme === 'black' ? styles.visualBackdrop : `${styles.visualBackdrop} ${styles.visualBackdropColor}`}>
                <p style={{ textAlign: "center", color: "#999" }}>Нет мероприятий</p>
            </div>
        );
    }

    return (
        <div className={theme === 'black' ? styles.visualBackdrop : `${styles.visualBackdrop} ${styles.visualBackdropColor}`}>
            <h4 className={theme === 'black' ? styles.titleEvents : `${styles.titleEvents} ${styles.titleColor}`}>
                Мероприятия
            </h4>

            <div className={theme === 'black' ? styles.subtextOfTheEvent : `${styles.subtextOfTheEvent} ${styles.subtextColor}`}>

                <nav className={theme === 'black' ? styles.leftArrow : `${styles.leftArrow} ${styles.arrowColor}`}>
                    <button onClick={setEventsMinus} aria-label="Предыдущий">‹</button>
                </nav>

                <div style={{ flex: 1 }}>
                    <article>
                        <p>
                            <strong className={styles.monstratStyls400}>
                                {currentSlide.title || 'Без названия'}
                            </strong>
                        </p>
                        <p className={`${styles.monstratStyls300} ${styles.positionSlaiderFiks}`}>
                            {currentSlide.description || 'Описание отсутствует'}
                        </p>
                    </article>
                    
                    <article className={styles.timeRangeDate}>
                        <p className={styles.monstratStyls300}>
                            {currentSlide.plannedAt 
                                ? new Date(currentSlide.plannedAt).toLocaleDateString('ru-RU', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                  }) + ' в ' + new Date(currentSlide.plannedAt).toLocaleTimeString('ru-RU', {
                                    hour: '2-digit',
                                    minute: '2-digit'
                                  })
                                : 'Дата не указана'
                            }
                        </p>
                    </article>
                </div>

                <nav className={theme === 'black' ? styles.rightArrow : `${styles.rightArrow} ${styles.arrowColor}`}>
                    <button onClick={setEventsPlus} aria-label="Следующий">›</button>
                </nav>

            </div>
        </div>
    );
};
export default SlayderSessions;