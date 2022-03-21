import styles from "../style/character.module.css";

interface aboutProps {
  about?: string;
}

function About({ about }: aboutProps) {
  return <p className={styles.about}>{about}</p>;
}
export default About;
