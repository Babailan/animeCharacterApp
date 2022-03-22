import { Button } from "@mui/material";
import styles from "../style/greeting.module.css";

function Greeting({ background }) {
  return (
    //greetings entry
    <div className={styles.greetings_container}>
      <div className={styles.greeting_left_right}></div>
      <div className={styles.greetings_container_letters}>
        <h1>Welcome to Anime-World</h1>
        <p>
          Discover anime and manga, track your progress, watch anime, read
          manga.
        </p>
        <Button
          style={{ marginTop: 20 }}
          href={"https://github.com/Babailan/animeCharacterApp/tree/revamp-2"}
          target={"_blank"}
          variant={"contained"}
          size={"large"}
        >
          Project Repository
        </Button>
      </div>
    </div>
  );
}

export default Greeting;
