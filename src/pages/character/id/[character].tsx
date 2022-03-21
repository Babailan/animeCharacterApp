import axios from "axios";
import styles from "../../../style/character.module.css";
import download from "../../../libs/downloadImage";
import { FaDownload } from "react-icons/fa";
import Image from "next/image";
import { useContext } from "react";
import { Query } from "../../../hooks/sizeQuery";
import dynamic from "next/dynamic";
import Media from "react-media";
const About = dynamic(() => import("../../../components/character"), {
  ssr: false,
});

function Character({ character, pictures, voiceActor, animeList, mangaList }) {
  const query = useContext(Query);

  return (
    <div className={styles.characterContainer}>
      <h1 className={styles.name}>{character.name}</h1>
      <div className={styles.section1}>
        {/* images character */}
        <div
          style={{
            display: "flex",
            border: "1px solid #000",
            width: "fit-content",
            maxWidth: "225px",
            maxHeight: "350px",
          }}
        >
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
          <Media query={query.DesktopNav}>
            <About about={character.about} />
          </Media>
        </div>
      </div>
      <Media query={query.mobileNav}>
        <About about={character.about} />
      </Media>
      {animeList.length !== 0 && (
        <div className={styles.pictures_container}>
          <h2 className={styles.Picture_titles}>Anime</h2>
          <div className={styles.pictures_list}>
            {animeList.map(({ anime }, index: number) => (
              <div key={index} className={styles.eachPicture_container}>
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
        </div>
      )}
      {mangaList.length !== 0 && (
        <div className={styles.pictures_container}>
          <h2 className={styles.Picture_titles}>Manga</h2>
          <div className={styles.pictures_list}>
            {mangaList.map(({ manga }, index: number) => (
              <div key={index} className={styles.eachPicture_container}>
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
                      src={manga.images.webp.image_url}
                      objectFit={"fill"}
                      layout={"fill"}
                      loading={"lazy"}
                      className={styles.images}
                    />
                  </div>
                </div>
                <p className={styles.picture_titles}>Title : {manga.title}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {pictures.length !== 0 && (
        <div className={styles.pictures_container}>
          <h2 className={styles.Picture_titles}>Pictures</h2>
          <div className={styles.pictures_list}>
            {pictures.map(({ jpg }, index: number) => (
              <div key={index} className={styles.eachPicture_container}>
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
                      src={jpg.image_url}
                      objectFit={"fill"}
                      layout={"fill"}
                      loading={"lazy"}
                      className={styles.images}
                    />
                  </div>
                </div>
                <span
                  className={styles.download_image}
                  onClick={() => download(jpg.image_url)}
                >
                  {<FaDownload />}Download
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
      {voiceActor.length !== 0 && (
        <div className={styles.pictures_container}>
          <h2 className={styles.Picture_titles}>Voice Actor</h2>
          <div className={styles.pictures_list}>
            {voiceActor.map(({ person, language }, index: number) => (
              <div key={index} className={styles.eachPicture_container}>
                <div className={styles.image_container}>
                  <div
                    style={{
                      width: "100%",
                      border: "1px solid #000",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={person.images.jpg.image_url}
                      objectFit={"fill"}
                      layout={"fill"}
                      loading={"lazy"}
                      className={styles.images}
                    />
                  </div>
                </div>
                <p>Language : {language}</p>
                <p>name : {person.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
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
  const mangaList = await axios.get(
    `https://api.jikan.moe/v4/characters/${context.params.character}/manga`
  );
  return {
    props: {
      character: character.data.data,
      pictures: picture.data.data,
      voiceActor: voiceActor.data.data,
      animeList: animeList.data.data,
      mangaList: mangaList.data.data,
    }, // will be passed to the page component as props
  };
}

export default Character;
