import ObserverHook from "../../hooks/observerHook";
import useSWR from "swr";
import fetcher from "../../libs/fetcher";
import SkeletonLoading from "../skeletons/SliderSkeleton";

type Props = {
  children?: JSX.Element | JSX.Element[] | string | any;
  getUrlData?: string;
  setData?: Function;
};

function Inview({ children, getUrlData }: Props) {
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
        <>{children({ data: data })}</>
      )}
    </>
  );
}

export default Inview;
