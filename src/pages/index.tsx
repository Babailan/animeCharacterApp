import useSWR from "swr";
import Greetings from "../components/greeting";
import AnimeRecommendation from "../components/sliderCard/sliderCard";
import { trailer } from "../libs/fetcher";
import fetcher, { fetchCharacterFav } from "../libs/fetcher";
import { Skeleton } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import Component from "../components/InView";

function Index() {
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

  return (
    <>
      {/* greetings entry */}

      <Greetings data={videoTrailer.data} />
      <div
        style={{
          marginTop: "-10%",
          padding: "0 10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Component />
      </div>
    </>
  );
}

export default Index;
