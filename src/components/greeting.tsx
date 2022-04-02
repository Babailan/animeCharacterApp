import styles from "../style/greeting.module.css";

type props = {
  trailerUrl?: any;
};

function Greeting({ trailerUrl }: props) {
  return (
    //greetings entry
    <div className={styles.greetings_container}>
      {trailerUrl ? (
        <div className={styles.videotrailer}>
          <video autoPlay loop muted style={{ width: "100%" }}>
            <source src={trailerUrl} type="video/mp4" />
          </video>
        </div>
      ) : null}
      <div className={styles.greeting_bottom_top}></div>
      <div className={styles.greeting_left_right}></div>
      <div className={styles.greeting_right_left}></div>
      <div className={styles.greeting_top_bottom}></div>
    </div>
  );
}

export default Greeting;
