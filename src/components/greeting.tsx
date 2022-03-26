import { Button } from "@mui/material";
import styles from "../style/greeting.module.css";

function Greeting() {
  const images = ["../images/background1.webp"];
  return (
    //greetings entry
    <div className={styles.greetings_container}>
      <div className={styles.image_background_greeting}></div>
      <div className={styles.greeting_left_right}></div>
      <div className={styles.greeting_right_left}></div>
      <div className={styles.greeting_top_bottom}></div>
      <div className={styles.greetings_container_letters}>
        <h1 className={styles.stroke}>
          Welcome to{" "}
          <span className={styles.stroke} style={{ color: "#2a99b4" }}>
            Anime-World
          </span>
        </h1>
        <h4 className={styles.stroke} style={{ marginTop: 5 }}>
          Discover anime and manga, track your progress, watch anime, read
          manga.
        </h4>
        <Button
          style={{ marginTop: 10 }}
          href={"https://github.com/Babailan/animeCharacterApp/tree/master"}
          target={"_blank"}
          variant={"contained"}
          size={"medium"}
        >
          Project Repository
        </Button>
      </div>
    </div>
  );
}

export default Greeting;
