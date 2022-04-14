//manga Recommentations
//className={styles.Recommendation_list}
import { Swiper } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import styles from "../../style/Recommendations.module.css";

function SliderCard({ title, children }) {
  return (
    <div className={styles.Recommendation_container}>
      <h2 className={styles.titles}>{title}</h2>
      <div>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          autoplay={{
            delay: 60000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          centeredSlides={false}
          slidesPerGroup={2}
          pagination={{
            clickable: true,
            type: "bullets",
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
          loop={true}
        >
          {children}
        </Swiper>
      </div>
    </div>
  );
}

export default SliderCard;
