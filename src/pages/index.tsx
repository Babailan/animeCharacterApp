import Greetings from "../components/greeting";

import "swiper/css";
import "swiper/css/pagination";
import { SwiperSlide } from "swiper/react";
import { GetServerSideProps } from "next";
import SliderWrapper from "../components/sliderCard/sliderWrapper";

type Props = {
  trailer: any;
};

function Index({ trailer }: Props) {
  return (
    <>
      {/* greetings entry */}

      <Greetings data={trailer} />
      <div
        style={{
          padding: "0 10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <SliderWrapper
          title="Top Anime"
          getUrlData="https://api.jikan.moe/v4/seasons/now"
        >
          <SwiperSlide>
            <h1>YESA</h1>
          </SwiperSlide>
        </SliderWrapper>
      </div>
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const c = process.env.NODE_ENV === "development" ? "http://" : "https://";

  const trailer = await fetch(`${c}${context.req.headers.host}/api/trailer`, {
    method: "get",
  });
  const data = await trailer.json();

  return {
    props: {
      trailer: data,
    },
  };
};

export default Index;
