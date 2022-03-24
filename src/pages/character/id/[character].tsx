import axios from "axios";
import styles from "../../../style/character.module.css";
import download from "../../../libs/downloadImage";
import { FaDownload } from "react-icons/fa";
import Image from "next/image";
import { useContext } from "react";
import { Query } from "../../../hooks/sizeQuery";
import dynamic from "next/dynamic";
import Media from "react-media";
import useSWR from "swr";
import fetcher from "../../../libs/axiosFetch";
import { useRouter } from "next/router";
const About = dynamic(() => import("../../../components/character"), {
  ssr: false,
});

function Character({ params }) {
  const router = useRouter();
  const query = useContext(Query);
  const character = useSWR(
    `https://api.jikan.moe/v4/characters/${router.query.character}`,
    fetcher
  );
  const pictures = useSWR(
    `https://api.jikan.moe/v4/characters/${router.query.character}/pictures`,
    fetcher
  );
  const voiceActor = useSWR(
    `https://api.jikan.moe/v4/characters/${router.query.character}/voices`,
    fetcher
  );
  const mangaList = useSWR(
    `https://api.jikan.moe/v4/characters/${router.query.character}/manga`,
    fetcher
  );
  const animeList = useSWR(
    `https://api.jikan.moe/v4/characters/${router.query.character}/anime`,
    fetcher
  );

  if (
    character.error ||
    pictures.error ||
    voiceActor.error ||
    mangaList.error ||
    animeList.error
  )
    return <div>Loading</div>;
  if (
    !character.data ||
    !pictures.data ||
    !voiceActor.data ||
    !mangaList.data ||
    !animeList.data
  )
    return <div>Loading...</div>;

  return (
    <div className={styles.characterContainer}>
      <h1 className={styles.name}>{character.data.name}</h1>
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
            src={character.data.images.jpg.image_url}
            width={"225px"}
            height={"350px"}
          />
        </div>

        <div className={styles.basicInfo}>
          <p className={"align_items"}>
            {
              <span className={styles.favorites}>
                Favorites:
                {character.data.favorites}
              </span>
            }
          </p>
          <p className={"align_items"}>
            <span className={styles.favorites}></span>
            Nicknames:{JSON.stringify(character.data.nicknames)}
          </p>
          <p className={"align_items"}>
            <span className={styles.favorites}>
              Name_kanji:
              {character.data.name_kanji}
            </span>
          </p>
          <Media query={query.DesktopNav}>
            <About about={character.data.about} />
          </Media>
        </div>
      </div>
      <Media query={query.mobileNav}>
        <About about={character.data.about} />
      </Media>
      {animeList.data.length !== 0 && (
        <div className={styles.pictures_container}>
          <h2 className={styles.Picture_titles}>Anime</h2>
          <div className={styles.pictures_list}>
            {animeList.data.map(({ anime }, index: number) => (
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
      {mangaList.data.length !== 0 && (
        <div className={styles.pictures_container}>
          <h2 className={styles.Picture_titles}>Manga</h2>
          <div className={styles.pictures_list}>
            {mangaList.data.map(({ manga }, index: number) => (
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

      {pictures.data.length !== 0 && (
        <div className={styles.pictures_container}>
          <h2 className={styles.Picture_titles}>Pictures</h2>
          <div className={styles.pictures_list}>
            {pictures.data.map(({ jpg }, index: number) => (
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
      {voiceActor.data.length !== 0 && (
        <div className={styles.pictures_container}>
          <h2 className={styles.Picture_titles}>Voice Actor</h2>
          <div className={styles.pictures_list}>
            {voiceActor.data.map(({ person, language }, index: number) => (
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

export default Character;
