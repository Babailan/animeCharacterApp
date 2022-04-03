//character Recommentations

import Cards from "../cardRecommendations";
import styles from "../../style/Recommendations.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

function CharacterRecomendation({ character }) {
  return (
    <div className={styles.Recommendation_container}>
      <h2 className={styles.titles}>Most Favorite Characeters</h2>
      <div>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          pagination={{
            clickable: true,
            type: "progressbar",
          }}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
          loop={true}
        >
          {character.map(({ name, images, mal_id }, index: number) => {
            return (
              <SwiperSlide style={{ width: "fit-content" }}>
                <Cards
                  mal_id={mal_id}
                  images={images.webp.image_url}
                  name={name}
                  lastId={character.length - 1}
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
