import styles from "../scss/pages/newspaper.module.scss";
import stylesPoem from "../scss/components/poemCard.module.scss";
import Search from "../components/Search";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { slaiderPoem } from "../data/slaiderPoem";


const Newspaper = () => {
  return (
    <>
        <Header />

      <div className={styles.container}>
        <h1 className={styles.title}>Газета</h1>
        <div className={styles.search}>
          <Search />
        </div>
        <div className={styles.cards}>
          {slaiderPoem.map((poems) =>
            <div className={stylesPoem.card}>
              <div className={stylesPoem.cardHeader}>
                <span className={stylesPoem.cardType + " " + stylesPoem.monstratStyls300}>{poems.thips}</span>
                <span className={stylesPoem.cardAuthor + " " + stylesPoem.monstratStyls300}>{poems.autor}</span>
              </div>
          
              <div className={stylesPoem.cardBody}>
                {/* Первая строка жирная, остальное обычным pre */}
                <div className={stylesPoem.titleLine}>{poems.title}</div>
                <pre className={stylesPoem.cardContent}>{poems.text.replace(/^.*\n/, "")}</pre>
              </div>
          
              <div className={stylesPoem.cardFooter}>
                <span className={stylesPoem.date}>{poems.dateStart}</span>
              </div>
            </div>
            )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Newspaper;
