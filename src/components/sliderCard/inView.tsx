import styles from "../../style/inView.module.css";
import ObserverHook from "../../hooks/observerHook";
import useSWR from "swr";
import fetcher from "../../libs/fetcher";
import SkeletonLoading from "../skeletons/SliderSkeleton";
import { useEffect } from "react";

type Props = {
  title?: string;
  children?: JSX.Element | JSX.Element[] | string;
  getUrlData?: string;
  setData?: Function;
};

function Inview({ children, getUrlData, setData }: Props) {
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
  useEffect(() => {
    if (data) {
      setData((p: any) => {
        return {
          ...p,
          seasonAnime: data,
        };
      });
    }
  }, [data]);

  return (
    <>
      {!visible || !data ? <SkeletonLoading element={ref} /> : <>{children}</>}
    </>
  );
}

export default Inview;
