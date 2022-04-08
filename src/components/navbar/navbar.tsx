import { useEffect } from "react";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { FaSearch } from "react-icons/fa";
import styles from "../../style/navbar.module.css";
import Link from "next/link";

export default function Navbar({ setThereIs }) {
  const router = useRouter();

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
      }
      if (!event.target.closest(`.${styles.inputContainer}`)) {
        document
          .querySelector(`.${styles.inputContainer}`)
          .classList.remove(styles.inputContainer_active);
        document
          .querySelector(`.${styles.input}`)
          .classList.remove(styles.input_active);
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
          <span className={styles.designInputSearch}></span>
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
