import styles from "../scss/components/poemCard.module.scss";

const poem = `В бескрайних страницах Вселенной
Сквозь звёздный туман и тишину,
Я открываю книгу, как окно —
И буквы, будто искры, в вышину
Взлетают, загораясь ярким сном.

В словах — галактик тайный круговерть,
В абзацах — свет далеких маяков.
И каждый том — как новая планета,
Где оживают вечность и любовь.

Читать — значит странствовать без края,
Скользить сквозь время, звезды и года.
В библиотеке мира, открывая
Бесконечность — снова и всегда.`;

const PoemCard = () => (
  <div className={styles.card}>
    <div className={styles.cardHeader}>
      <span className={styles.cardType}>Стих</span>
      <span className={styles.cardAuthor}>Иванов И.</span>
    </div>
    <pre className={styles.cardContent}>{poem}</pre>
  </div>
);

export default PoemCard;