import { useEffect } from "react";
import { getCookie } from "cookies-next";
import { FaSearch } from "react-icons/fa";
import styles from "../../style/navbar.module.css";
import Link from "next/link";
import { NextRouter } from "next/router";
type Props = {
  router: NextRouter;
  setThereIs: any;
};
export default function Navbar({ router, setThereIs }: Props) {
  useEffect(() => {
    //eventListener for inputContainer
    document.addEventListener("click", (event: any) => {
      if (event.target.closest(`.${styles.searchIcon}`)) {
        document
          .querySelector(`.${styles.inputContainer}`)
          .classList.add(styles.inputContainer_active);
        document
          .querySelector(`.${styles.input}`)
          .classList.add(styles.input_active);
        document
          .querySelector(`.${styles.selectCategory}`)
          .classList.add(styles.selectCategory_Active);
      }

      if (!event.target.closest(`.${styles.inputContainer}`)) {
        document
          .querySelector(`.${styles.inputContainer}`)
          .classList.remove(styles.inputContainer_active);
        document
          .querySelector(`.${styles.input}`)
          .classList.remove(styles.input_active);
        document
          .querySelector(`.${styles.selectCategory}`)
          .classList.remove(styles.selectCategory_Active);
      }
    });
    const check = getCookie("user");
    if (check) {
      setThereIs(true);
    }
  }, [setThereIs]);

  return (
    <div
      className={`${styles.navbar} ${router.pathname == "/" ? "absolute" : ""}`}
    >
      <div className={styles.leftCol}>
        <p className={styles.logo}>ANIMEWORLD</p>
      </div>
      <div className={styles.rightCol}>
        <div className={styles.inputContainer}>
          <FaSearch className={styles.searchIcon} />
          <input className={styles.input} />
          <select className={styles.selectCategory} defaultValue={"anime"}>
            <option value={"anime"}>Anime</option>
            <option value={"manga"}>Manga</option>
            <option value={"character"}>Character</option>
          </select>
        </div>
        <p className={styles.links}>
          <Link href={"/"}>Login</Link>
        </p>
        <p className={styles.links}>
          <Link href={"/sign-up"}>Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
