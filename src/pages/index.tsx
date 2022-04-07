import useSWR from "swr";
import Greetings from "../components/greeting";
import Home from "../components/home";
import { trailer } from "../libs/fetcher";
import fetcher, { fetchCharacterFav } from "../libs/fetcher";
import { Skeleton } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";

const Index = () => {
  const videoTrailer = useSWR("/api/trailer", trailer, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    shouldRetryOnError: true,
    errorRetryInterval: 0,
  });
  const mangaRec = useSWR("https://api.jikan.moe/v4/top/manga", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    shouldRetryOnError: true,
    errorRetryInterval: 0,
  });
  const animeRec = useSWR("https://api.jikan.moe/v4/top/anime", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    shouldRetryOnError: true,
    errorRetryInterval: 0,
  });
  const character = useSWR(
    "https://api.jikan.moe/v4/top/characters",
    fetchCharacterFav,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      shouldRetryOnError: true,
      errorRetryInterval: 0,
    }
  );

  if (
    !mangaRec.data ||
    !animeRec.data ||
    !character.data ||
    !videoTrailer.data
  ) {
    return (
      <>
        <div style={{ padding: "10% 10px 10px 10px " }}>
          <Skeleton
            animation={"wave"}
            variant="text"
            sx={{ bgcolor: "#242424", width: "30%", height: "50px" }}
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
            sx={{ bgcolor: "#242424", width: "30%", height: "50px" }}
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
            sx={{ bgcolor: "#242424", width: "30%", height: "50px" }}
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
  }
  return (
    <>
      {/* greetings entry */}

      <Greetings data={videoTrailer.data} />
      <Home
        mangaRec={mangaRec.data}
        animeRec={animeRec.data}
        character={character.data}
      />
    </>
  );
};

export default Index;
