import Greetings from "../components/greeting";
import "swiper/css";
import "swiper/css/pagination";
import { GetServerSideProps } from "next";
import InView from "../components/sliderCard/inView";
import { useState } from "react";
import animeSeason from "../interface/animeSeason";
import Swiper from "../components/sliderCard/sliderParent";
import { SwiperSlide } from "swiper/react";
import Card from "../components/sliderCard/card";
import shuffle from "../libs/shuffle";

type Props = {
  trailer: any;
};

interface list {
  seasonAnime: Array<animeSeason>;
}
function Index({ trailer }: Props) {
  const [list, setList] = useState<list>({ seasonAnime: null });
  console.log(list);
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
        <InView
          title="Top Anime"
          getUrlData="https://api.jikan.moe/v4/seasons/now"
          setData={setList}
        >
          {list.seasonAnime ? (
            <Swiper title={"Popular Anime"}>
              {shuffle(list.seasonAnime).map(({ title, images, mal_id }) => (
                <SwiperSlide style={{ width: "fit-content" }} key={mal_id}>
                  <Card title={title} imgUrl={images.webp.image_url} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : null}
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
