import axios from "axios";
import styles from "../../../style/character.module.css";
import download from "../../../libs/downloadImage";
import { FaDownload } from "react-icons/fa";

function Character({ character, picture }) {
  console.log(picture);
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
            <span className={styles.kanji}>
              {JSON.stringify(character.name_kanji)}
            </span>
          </p>
        </div>
      </div>
      <p className={styles.about}>{character.about}</p>
      <div className={styles.pictures_container}>
        <h2 className={styles.Picture_titles}>Pictures</h2>
        <div className={styles.pictures_container}>
          {picture.map(({ jpg, mal_id }) => (
            <div className={styles.image_container} key={mal_id}>
              <img src={jpg.image_url} className={styles.pictures} />
              <span
                className={styles.download_image}
                onClick={() => download(jpg.image_url)}
              >
                <FaDownload /> Download
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const character = await axios.get(
    `https://api.jikan.moe/v4/characters/${context.params.character}`
  );
  const picture = await axios.get(
    `https://api.jikan.moe/v4/characters/${context.params.character}/pictures`
  );
  return {
    props: { character: character.data.data, picture: picture.data.data }, // will be passed to the page component as props
  };
}

export default Character;
