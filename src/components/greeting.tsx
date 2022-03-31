import { Button } from "@mui/material";
import styles from "../style/greeting.module.css";

function Greeting() {
  const images = ["../images/background1.webp"];
  return (
    //greetings entry
    <div className={styles.greetings_container}>
      <div className={styles.videotrailer}>
        <video autoPlay loop muted style={{ width: "100%" }}>
          <source src={"/api/trailer"} type="video/mp4" />
        </video>
      </div>
      <div className={styles.greeting_bottom_top}></div>
      <div className={styles.greeting_left_right}></div>
      <div className={styles.greeting_right_left}></div>
      <div className={styles.greeting_top_bottom}></div>
    </div>
  );
}

export default Greeting;
