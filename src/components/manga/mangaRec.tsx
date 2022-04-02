//manga Recommentations

import Cards from "../cardRecommendations";
import styles from "../../style/Recommendations.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";

function MangaRecomendation({ mangaRec }) {
  return (
    <div>
      <h1 className={styles.titles}>Manga Recommendation</h1>
      <div>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          pagination={{
            clickable: true,
            type: "progressbar",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          loop={true}
        >
          {mangaRec.map(({ mal_id, entry }, index: number) => {
            return (
              <SwiperSlide style={{ width: "fit-content" }}>
                <Cards
                  mal_id={mal_id}
                  images={entry[0].images.webp.image_url}
                  name={entry[0].title}
                  index={index}
                  lastId={mangaRec.length - 1}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default MangaRecomendation;
