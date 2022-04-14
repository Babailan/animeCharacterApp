import useSWR from "swr";
import Greetings from "../components/greeting";
import SliderWrapper from "../components/sliderCard/sliderCard";
import { trailer } from "../libs/fetcher";
import fetcher, { fetchCharacterFav } from "../libs/fetcher";
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
        <SliderWrapper title={"Top Animes"}>
          <h1>YES</h1>
        </SliderWrapper>
      </div>
    </>
  );
}

export default Index;
