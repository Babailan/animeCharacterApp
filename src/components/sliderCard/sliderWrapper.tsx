//manga Recommentations
//className={styles.Recommendation_list}
import { Swiper } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import styles from "../../style/Recommendations.module.css";
import ObserverHook from "../../hooks/observerHook";
import useSWR from "swr";
import fetcher from "../../libs/fetcher";
import SkeletonLoading from "../skeletons/SliderSkeleton";
import React from "react";

type Props = {
  title?: string;
  children?: JSX.Element | JSX.Element[] | string;
  getUrlData?: string;
};

function SliderWrapper({ title, children, getUrlData }: Props) {
  const { ref, visible } = ObserverHook({
    triggerOnce: true,
    threshold: 0.7,
  });

  const { data } = useSWR(visible && getUrlData ? getUrlData : null, fetcher, {
    shouldRetryOnError: true,
    revalidateOnReconnect: false,
    revalidateIfStale: false,
    revalidateOnMount: true,
    revalidateOnFocus: false,
    errorRetryInterval: 3000,
  });

  return (
    <>
      {!visible || !data ? (
        <SkeletonLoading element={ref} />
      ) : (
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
      )}
    </>
  );
}

export default SliderWrapper;
