import { Swiper as Swipe } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
const Swiper = ({ children, title }) => (
  <div>
    <h1 style={{ color: "#fff", fontSize: "1.5em" }}>{title}</h1>
    <Swipe
      slidesPerView={"auto"}
      spaceBetween={15}
      centeredSlides={true}
      slidesPerGroup={2}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
      loop={true}
    >
      {children}
    </Swipe>
  </div>
);

export default Swiper;
