import styles from "../../../style/character.module.css";
import download from "../../../libs/downloadImage";
import { FaDownload } from "react-icons/fa";
import Image from "next/image";
import { useContext } from "react";
import { Query } from "../../../hooks/sizeQuery";
import MediaQuery from "react-responsive";
import useSWR from "swr";
import fetcher from "../../../libs/axiosFetch";
import { useRouter } from "next/router";
import { Skeleton } from "@mui/material";

function Character() {
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
    !character.data ||
    !pictures.data ||
    !voiceActor.data ||
    !mangaList.data ||
    !animeList.data
  ) {
    return (
      <div className={styles.characterContainer}>
        <Skeleton
          animation={"wave"}
          variant="text"
          sx={{ bgcolor: "#242424", width: "200px", height: "50px" }}
        />
        <Skeleton
          variant="rectangular"
          animation={"wave"}
          width={"auto"}
          height={"200px"}
          sx={{ bgcolor: "#242424", borderRadius: 2 }}
        />
        <Skeleton
          animation={"wave"}
          variant="text"
          sx={{ bgcolor: "#242424", width: "200px", height: "50px" }}
        />
        <Skeleton
          variant="rectangular"
          animation={"wave"}
          width={"auto"}
          height={"200px"}
          sx={{ bgcolor: "#242424", borderRadius: 2 }}
        />
        <Skeleton
          animation={"wave"}
          variant="text"
          sx={{ bgcolor: "#242424", width: "200px", height: "50px" }}
        />
        <Skeleton
          variant="rectangular"
          animation={"wave"}
          width={"auto"}
          height={"200px"}
          sx={{ bgcolor: "#242424", borderRadius: 2 }}
        />
      </div>
    );
  }
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
            className={styles.images}
            height={"350px"}
          />
        </div>

        <div className={styles.basicInfo}>
          <p className={"align_items"}>
            Favorites:
            {character.data.favorites}
          </p>
          <p className={"align_items"}>
            Nicknames:{JSON.stringify(character.data.nicknames)}
          </p>
          <p className={"align_items"}>
            Name_kanji:
            {character.data.name_kanji}
          </p>
          <MediaQuery minWidth={query.DesktopNav}>
            <p className={styles.about}>
              {" "}
              {character.data.about === null
                ? "No Information"
                : character.data.about}
            </p>
          </MediaQuery>
        </div>
      </div>
      <MediaQuery maxWidth={query.mobileNav}>
        <p className={styles.about}>
          {character.data.about === null
            ? "No Information"
            : character.data.about}
        </p>
      </MediaQuery>
      <div className={styles.listofAllImages}>
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
                  <p style={{ textAlign: "center", padding: "1em" }}>
                    Title : {anime.title}
                  </p>
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
                  <p
                    style={{ textAlign: "center", padding: "1em" }}
                    className={styles.picture_titles}
                  >
                    Title : {manga.title}
                  </p>
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
                  <p style={{ textAlign: "center", padding: "10px 0 0 0 " }}>
                    Language : {language}
                  </p>
                  <p style={{ textAlign: "center", padding: "0 0 10px " }}>
                    name : {person.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Character;
