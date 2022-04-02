//character Recommentations

import Cards from "../cardRecommendations";
import styles from "../../style/Recommendations.module.css";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";

function CharacterRecomendation({ character }) {
  const router = useRouter();

  return (
    <div className={styles.Recommendation_container}>
      <h1 className={styles.titles}>Most Favorite Characeters</h1>
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
