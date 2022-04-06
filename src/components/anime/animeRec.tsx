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
            delay: 60000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          centeredSlides={false}
          slidesPerGroupAuto={true}
          pagination={{
            clickable: true,
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
          loop={true}
        >
          {animeRec.map(({ mal_id, images, title }, index: number) => {
            return (
              <SwiperSlide style={{ width: "fit-content" }} key={index}>
                <Cards
                  mal_id={mal_id}
                  images={images.webp.image_url}
                  name={title}
                  index={index}
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
