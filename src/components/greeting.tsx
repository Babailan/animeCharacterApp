import { useEffect } from "react";
import styles from "../style/greeting.module.css";

function Greeting() {
  useEffect(() => {
    stars();
  }, []);
  return (
    //greetings entry
    <div className={styles.greetings_container}>
      <div className={styles.greetings_container_letters}>
        <h1>Welcome to Anime-World</h1>
        <p>
          Discover anime and manga, track your progress, watch anime, read
          manga.
        </p>
      </div>
    </div>
  );
}

function stars() {
  const containerStar = document.querySelector(
    `.${styles.greetings_container}`
  );
  const count = 50;
  for (let i = 0; i < count; i++) {
    const star = document.createElement("i");
    const x = Math.floor(Math.random() * containerStar.clientWidth);
    const y = Math.floor(Math.random() * containerStar.clientHeight);
    star.className = styles.stars;

    const size = Math.random() * 4;
    star.style.left = x + "px";
    star.style.top = y + "px";
    star.style.width = 1 + size + "px";
    star.style.height = 1 + size + "px";
    containerStar.appendChild(star);
  }

  window.addEventListener("resize", () => {
    const containerStar = document.querySelector(
      `.${styles.greetings_container}`
    );
    for (let i = 0; i < containerStar.childNodes.length; i++) {
      if (containerStar.childNodes[i].nodeName.toLowerCase() === "i") {
        containerStar.removeChild(containerStar.childNodes[i]);
        i--;
      }
    }
    for (let i = 0; i < count; i++) {
      const star = document.createElement("i");
      const x = Math.floor(Math.random() * containerStar.clientWidth);
      const y = Math.floor(Math.random() * containerStar.clientHeight);

      const size = Math.random() * 4;
      star.className = styles.stars;
      star.style.left = x + "px";
      star.style.top = y + "px";
      star.style.width = 1 + size + "px";
      star.style.height = 1 + size + "px";
      containerStar.appendChild(star);
    }
  });
}

export default Greeting;
