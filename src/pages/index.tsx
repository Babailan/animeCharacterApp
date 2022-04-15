import useSWR from "swr";
import Greetings from "../components/greeting";
import SliderWrapper from "../components/sliderCard/sliderWrapper";
import { trailer } from "../libs/fetcher";
import fetcher, { fetchCharacterFav } from "../libs/fetcher";
import "swiper/css";
import "swiper/css/pagination";
import Component from "../components/InView";
import { SwiperSlide } from "swiper/react";
import SkeletonLoading from "../components/skeletons/SliderSkeleton";

function Index() {
  const videoTrailer = useSWR("/api/trailer", trailer, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: true,

    shouldRetryOnError: true,
    errorRetryInterval: 0,
  });

  return (
    <>
      {/* greetings entry */}

      <Greetings data={videoTrailer.data} />
      <div
        style={{
          padding: "0 10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <SkeletonLoading />
      </div>
    </>
  );
}

export default Index;
