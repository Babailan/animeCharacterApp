import useSWR from "swr";
import Greetings from "../components/greeting";
import Home from "../components/home";
import fetcher, { fetchCharacterFav } from "../libs/axiosFetch";
import { Skeleton } from "@mui/material";
import RemoveElementsDuplicated from "../libs/removeElementDuplicated";

const Index = () => {
  const mangaRec = useSWR(
    "https://api.jikan.moe/v4/recommendations/manga",
    fetcher
  );
  const animeRec = useSWR(
    "https://api.jikan.moe/v4/recommendations/anime",
    fetcher
  );
  const character = useSWR(
    "https://api.jikan.moe/v4/characters",
    fetchCharacterFav
  );
  if (mangaRec.error || animeRec.error || character.error)
    return (
      <>
        <Greetings />
        <Skeleton
          animation={"wave"}
          variant="text"
          sx={{ bgcolor: "#c5c7c9" }}
        />
        <Skeleton
          variant="rectangular"
          animation={"wave"}
          width={"auto"}
          height={"200px"}
          sx={{ bgcolor: "#c5c7c9", marginBottom: "10px" }}
        />
        <Skeleton
          variant="rectangular"
          animation={"wave"}
          width={"auto"}
          height={"200px"}
          sx={{ bgcolor: "#c5c7c9", marginBottom: "10px" }}
        />
        <Skeleton
          variant="rectangular"
          animation={"wave"}
          width={"auto"}
          height={"200px"}
          sx={{ bgcolor: "#c5c7c9", marginBottom: "10px" }}
        />
      </>
    );
  if (!mangaRec.data || !animeRec.data || !character.data)
    return (
      <>
        <Greetings />
        <Skeleton
          animation={"wave"}
          variant="text"
          sx={{ bgcolor: "#c5c7c9" }}
        />
        <Skeleton
          variant="rectangular"
          animation={"wave"}
          width={"auto"}
          height={"200px"}
          sx={{ bgcolor: "#c5c7c9", marginBottom: "10px" }}
        />
        <Skeleton
          variant="rectangular"
          animation={"wave"}
          width={"auto"}
          height={"200px"}
          sx={{ bgcolor: "#c5c7c9", marginBottom: "10px" }}
        />
        <Skeleton
          variant="rectangular"
          animation={"wave"}
          width={"auto"}
          height={"200px"}
          sx={{ bgcolor: "#c5c7c9", marginBottom: "10px" }}
        />
      </>
    );
  return (
    <>
      {/* greetings entry */}
      <Greetings />
      <Home
        mangaRec={RemoveElementsDuplicated(mangaRec.data)}
        animeRec={RemoveElementsDuplicated(animeRec.data)}
        character={character.data}
      />
    </>
  );
};

export default Index;
