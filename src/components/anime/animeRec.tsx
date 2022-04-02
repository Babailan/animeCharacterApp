//manga Recommentations
//className={styles.Recommendation_list}
import Cards from "../cardRecommendations";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import styles from "../../style/Recommendations.module.css";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";

function AnimeRecommendation({ animeRec }) {
  return (
    <div className={styles.Recommendation_container}>
      <h1 className={styles.titles}>Anime Recommendation</h1>
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
          {animeRec.map(({ mal_id, entry }, index: number) => {
            return (
              <SwiperSlide style={{ width: "fit-content" }}>
                <Cards
                  key={mal_id}
                  mal_id={mal_id}
                  images={entry[0].images.webp.image_url}
                  name={entry[0].title}
                  index={index}
                  lastId={animeRec.length - 1}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default AnimeRecommendation;
