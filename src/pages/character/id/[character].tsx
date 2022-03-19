import axios from "axios";
import styles from "../../../style/character.module.css";

function Character({ character }) {
  console.log(character);
  return (
    <div className={styles.characterContainer}>
      <h1 className={styles.name}>{character.name}</h1>
      <div className={styles.section1}>
        <img
          src={character.images.jpg.image_url}
          className={styles.characterImg}
        />
        <div className={styles.basicInfo}>
          <p>Favorites: {character.favorites}</p>
          <p>Nicknames:{JSON.stringify(character.nicknames)}</p>
          <p className={styles.kanji_container}>
            Name_kanji:
            <p className={styles.kanji}>
              {JSON.stringify(character.name_kanji)}
            </p>
          </p>
        </div>
      </div>
      <p className={styles.about}>{character.about}</p>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const req = await axios.get(
    `https://api.jikan.moe/v4/characters/${context.params.character}`
  );
  return {
    props: { character: req.data.data }, // will be passed to the page component as props
  };
}

export default Character;
