import styles from "./University.module.css";
import house from "../../assets/school.png";

const University = () => {
  const description =
    "Experience, a concentration of knowledge and the ability to avoid most recruiting mistakes. We know what most local and foreign companies want and we can give it to you. And we are constantly improving our programming courses, adding something new there. You can see the success stories of our alumni for yourself to see the effectiveness of our teaching methodology. Yes, we will start with the basics and the most basic information. We know that most people come to us with zero knowledge.";
  return (
    <div className={styles.card}>
      <div className={styles.cardAvatar}>
        <img src={house} alt="Avatar" />
        <span className={styles.schoolType}>University</span>
        <span className={styles.schoolName}>MIT</span>
      </div>
      <div className={styles.cardDescription}>{description}</div>
    </div>
  );
};

export default University;
