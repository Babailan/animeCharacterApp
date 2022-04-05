import useSWR from "swr";
import Greetings from "../components/greeting";
import Home from "../components/home";
import fetcher, { fetchCharacterFav, trailer } from "../libs/axiosFetch";
import { Skeleton } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";

const Index = () => {
  const mangaRec = useSWR("https://api.jikan.moe/v4/top/manga", fetcher);
  const animeRec = useSWR("https://api.jikan.moe/v4/top/anime", fetcher);
  const character = useSWR(
    "https://api.jikan.moe/v4/top/characters",
    fetchCharacterFav
  );
  const videoTrailer = useSWR("/api/trailer", trailer);

  if (!mangaRec.data || !animeRec.data || !character.data || !videoTrailer.data)
    return (
      <>
        <Greetings />
        <div style={{ padding: "0 10px 10px 10px " }}>
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
      </>
    );
  return (
    <>
      {/* greetings entry */}

      <Greetings trailerUrl={videoTrailer.data.url} />
      <Home
        mangaRec={mangaRec.data}
        animeRec={animeRec.data}
        character={character.data}
      />
    </>
  );
};

export default Index;
