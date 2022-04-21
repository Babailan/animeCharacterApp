import Greetings from "../components/greeting";
import "swiper/css";
import "swiper/css/pagination";
import { GetServerSideProps } from "next";
import InView from "../components/sliderCard/inView";
import Swiper from "../components/sliderCard/sliderParent";
import { SwiperSlide } from "swiper/react";
import Card from "../components/sliderCard/card";
import shuffle from "../libs/shuffle";
import animeSeason from "../interface/animeSeason";

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
        <InView getUrlData="https://api.jikan.moe/v4/seasons/now">
          {({ data }) => {
            console.log(data);
            return (
              <Swiper title={"Popular Anime"}>
                {shuffle(data).map(({ title, images, mal_id }: animeSeason) => (
                  <SwiperSlide style={{ width: "fit-content" }} key={mal_id}>
                    <Card title={title} imgUrl={images.webp.large_image_url} />
                  </SwiperSlide>
                ))}
              </Swiper>
            );
          }}
        </InView>
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
