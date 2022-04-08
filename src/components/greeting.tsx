import styles from "../style/greeting.module.css";

type props = {
  data?: any;
};

function Greeting({ data }: props) {
  return (
    //greetings entry
    <div className={styles.greetings_container}>
      {data ? (
        <div className={styles.videotrailer}>
          <video autoPlay loop muted style={{ width: "100%" }}>
            <source src={data.url} type="video/mp4" />
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
