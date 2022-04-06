//manga Recommentations

import Cards from "../cardRecommendations";
import styles from "../../style/Recommendations.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

function MangaRecomendation({ mangaRec }) {
  return (
    <div className={styles.Recommendation_container}>
      <h2 className={styles.titles}>Top Manga</h2>
      <div>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          slidesPerGroupAuto={true}
          centeredSlides={false}
          autoplay={{
            delay: 60000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
          loop={true}
        >
          {mangaRec.map(({ mal_id, images, title }, index: number) => {
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

export default MangaRecomendation;
