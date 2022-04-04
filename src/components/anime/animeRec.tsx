//manga Recommentations
//className={styles.Recommendation_list}
import Cards from "../cardRecommendations";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import styles from "../../style/Recommendations.module.css";

function AnimeRecommendation({ animeRec }) {
  return (
    <div className={styles.Recommendation_container}>
      <h2 className={styles.titles}>Popular Anime</h2>
      <div>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          centeredSlides={false}
          slidesPerGroupAuto={true}
          pagination={{
            clickable: true,
            type: "progressbar",
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
          loop={true}
        >
          {animeRec.map(({ entry }, index: number) => {
            return (
              <SwiperSlide
                style={{ width: "fit-content" }}
                key={entry[0].mal_id}
              >
                <Cards
                  mal_id={entry[0].mal_id}
                  images={entry[0].images.webp.image_url}
                  name={entry[0].title}
                  index={index}
                  lastId={animeRec.length - 1}
                  category={"anime"}
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
