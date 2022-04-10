import styles from "../../../style/character.module.css";
import download from "../../../libs/downloadImage";
import { useContext } from "react";
import { Query } from "../../../hooks/sizeQuery";
import useSWR from "swr";
import fetcher from "../../../libs/fetcher";
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
  return <h1>CharacterId</h1>;
}

export default Character;
