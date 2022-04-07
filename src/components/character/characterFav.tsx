//character Recommentations

import Cards from "../cardRecommendations";
import styles from "../../style/Recommendations.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

function CharacterRecomendation({ character }) {
  return (
    <div className={styles.Recommendation_container}>
      <h2 className={styles.titles}>Top Characeters</h2>
      <div>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          slidesPerGroup={2}
          pagination={{
            clickable: true,
            type: "bullets",
          }}
          centeredSlides={false}
          autoplay={{
            delay: 60000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
          loop={true}
        >
          {character.map(({ name, images, mal_id }, index: number) => {
            return (
              <SwiperSlide style={{ width: "fit-content" }} key={index}>
                <Cards
                  mal_id={mal_id}
                  images={images.webp.image_url}
                  name={name}
                  index={index}
                  category={"character"}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default CharacterRecomendation;
