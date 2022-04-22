import ObserverHook from "../../hooks/observerHook";
import useSWR from "swr";
import fetcher from "../../libs/fetcher";
import SkeletonLoading from "../skeletons/SliderSkeleton";

type Props = {
  children?: JSX.Element | JSX.Element[] | string | any;
  getUrlData?: string;
  setData?: Function;
  observe: boolean;
  threshold?: number;
  triggerOnce?: boolean;
};

function Inview({
  children,
  getUrlData,
  observe,
  threshold,
  triggerOnce,
}: Props) {
  const { ref, visible } = ObserverHook({
    observe: observe ? observe : false,
    triggerOnce: triggerOnce ? triggerOnce : false,
    threshold: threshold ? threshold : 0.7,
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
