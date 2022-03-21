import axios from "axios";
import styles from "../../../style/character.module.css";
import download from "../../../libs/downloadImage";
import { FaDownload, FaHeart } from "react-icons/fa";
import Image from "next/image";

function Character({ character, pictures, voiceActor, animeList }) {
  console.log(animeList);
  return (
    <div className={styles.characterContainer}>
      <h1 className={styles.name}>{character.name}</h1>
      <div className={styles.section1}>
        <div style={{ display: "flex" }}>
          <Image
            src={character.images.jpg.image_url}
            width={"225px"}
            height={"350px"}
          />
        </div>
        <div className={styles.basicInfo}>
          <p className={"align_items"}>
            {
              <span className={styles.favorites}>
                Favorites:
                {character.favorites}
              </span>
            }
          </p>
          <p className={"align_items"}>
            <span className={styles.favorites}></span>
            Nicknames:{JSON.stringify(character.nicknames)}
          </p>
          <p className={"align_items"}>
            <span className={styles.favorites}>
              Name_kanji:
              {character.name_kanji}
            </span>
          </p>
          {}
        </div>
      </div>
      <p className={styles.about}>{character.about}</p>
      <div className={styles.pictures_container}>
        <h2 className={styles.Picture_titles}>Pictures</h2>
        {pictures.length !== 0 ? (
          <div className={styles.pictures_list}>
            {pictures.map(({ jpg }, index: number) => (
              <div className={styles.image_container} key={index}>
                <div
                  style={{
                    width: "100%",
                    border: "1px solid #000",
                    position: "relative",
                  }}
                  className={styles.image}
                >
                  <Image
                    src={jpg.image_url}
                    objectFit={"fill"}
                    layout={"fill"}
                    loading={"lazy"}
                    className={styles.images}
                  />
                </div>
                <span
                  className={styles.download_image}
                  onClick={() => download(jpg.image_url)}
                >
                  <FaDownload /> Download
                </span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className={styles.pictures_container}>
        <h2 className={styles.Picture_titles}>Pictures</h2>
        {pictures.length !== 0 ? (
          <div className={styles.pictures_list}>
            {animeList.map(({ anime }, index: number) => (
              <div key={index}>
                <div className={styles.image_container}>
                  <div
                    style={{
                      width: "100%",
                      border: "1px solid #000",
                      position: "relative",
                    }}
                    className={styles.image}
                  >
                    <Image
                      src={anime.images.jpg.image_url}
                      objectFit={"fill"}
                      layout={"fill"}
                      loading={"lazy"}
                      className={styles.images}
                    />
                  </div>
                </div>
                <p>Title : {anime.title}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      {voiceActor.length !== 0 ? (
        <div className={styles.voiceActor_container}>
          <h2 className={styles.voice_actor_titles}>Voice Actors</h2>
          <div className={styles.voice_actor_list}>
            {voiceActor.map(({ name, person, language }, index) => {
              return (
                <div className={styles.voiceActor} key={index}>
                  <div className={styles.image_container}>
                    <div
                      className={styles.image}
                      style={{
                        border: "1px solid #000",
                        width: "100%",
                        position: "relative",
                      }}
                    >
                      <Image
                        src={person.images.jpg.image_url}
                        alt={name}
                        objectFit={"fill"}
                        layout={"fill"}
                        loading={"lazy"}
                      />
                    </div>
                  </div>
                  <p>Name: {person.name}</p>
                  <p>Language: {language}</p>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
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
  const voiceActor = await axios.get(
    `https://api.jikan.moe/v4/characters/${context.params.character}/voices`
  );
  const animeList = await axios.get(
    `https://api.jikan.moe/v4/characters/${context.params.character}/anime`
  );
  return {
    props: {
      character: character.data.data,
      pictures: picture.data.data,
      voiceActor: voiceActor.data.data,
      animeList: animeList.data.data,
    }, // will be passed to the page component as props
  };
}

export default Character;
