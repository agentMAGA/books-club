import Header from "../components/Header";
import styles from "../scss/pages/rating.module.scss";
import Footer from "../components/Footer";
import Search from "../components/Search";
import { useTheme } from "../store/useTheme";

const USERS = [
  {
    firstName: "Иван",
    lastName: "Иванов",
    position: 1,
    avatar: null,
  },
  {
    firstName: "Иван",
    lastName: "Иванов",
    position: 2,
    avatar: null,
  },
  {
    firstName: "Иван",
    lastName: "Иванов",
    position: 3,
    avatar: null,
  },
  {
    firstName: "Иван",
    lastName: "Иванов",
    position: 4,
    avatar: null,
  },
  {
    firstName: "Иван",
    lastName: "Иванов",
    position: 5,
    avatar: null,
  },
  {
    firstName: "Иван",
    lastName: "Иванов",
    position: 6,
    avatar: null,
  },
  {
    firstName: "Иван",
    lastName: "Иванов",
    position: 7,
    avatar: null,
  },
  {
    firstName: "Иван",
    lastName: "Иванов",
    position: 8,
    avatar: null,
  },
  {
    firstName: "Иван",
    lastName: "Иванов",
    position: 9,
    avatar: null,
  },
  {
    firstName: "Иван",
    lastName: "Иванов",
    position: 10,
    avatar: null,
  },
];

const Rating = () => {
  const getCardClassName = (position) => {
    const baseClass = styles.card; 
    
    switch(position) {
      case 1:
        return `${baseClass} ${styles.firstPosition}`;
      case 2:
        return `${baseClass} ${styles.twoPosition}`;
      case 3:
        return `${baseClass} ${styles.threePosition}`;
      default:
        return baseClass;
    }
  };

  const { theme } = useTheme();

  return (
    <>
      <Header />
      <div className={theme === 'black' ? styles.container : `${styles.container} ${styles.containerColor}`}>
        <h1 className={theme === 'black' ? styles.title : `${styles.title} ${styles.titleColor}`}>
          Рейтинг
        </h1>

        <Search/>

        <div className={styles.cards}>
          {USERS.map((item) => (
            <article className={getCardClassName(item.position)} key={item.position}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                {item.avatar ? (
                  <img src={item.avatar} alt="" />
                ) : (
                  <div className={styles.avatarCircle}>
                    {item.firstName.slice(0, 1) + item.lastName.slice(0, 1)}
                  </div>
                )}
                <div>
                  <p>{item.firstName}</p>
                  <p>{item.lastName}</p>
                </div>
              </div>
              <span className={styles.cardPosition}>{item.position}</span>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Rating;