import fetcher from "../../../libs/fetcher";
import useSWR from "swr";
import { useRouter } from "next/router";
import { Skeleton } from "@mui/material";
import styles from "../../../style/animeID.module.css";
import { useEffect } from "react";
import { FaExclamationCircle, FaTimesCircle } from "react-icons/fa";
import ReactPlayer from "react-player/youtube";

function Id({ setPreviousCall, previousCall }) {
  const router = useRouter();
  const { data } = useSWR(
    `https://api.jikan.moe/v4/anime/${router.query.id}`,
    fetcher
  );

  useEffect(() => {
    if (data) {
      const removingWarning = setTimeout(() => {
        if (document.querySelector(`.${styles.warning}`)) {
          document.querySelector(`.${styles.warning}`).remove();
        }
        return;
      }, 60000);
      setPreviousCall(removingWarning);
    }
  }, [data, setPreviousCall]);

  if (!data) {
    return (
      <div className={styles.animeContainer}>
        <Skeleton
          animation={"wave"}
          variant="text"
          sx={{ bgcolor: "#242424", width: "200px", height: "50px" }}
        />
        <Skeleton
          variant="rectangular"
          animation={"wave"}
          width={"auto"}
          height={"200px"}
          sx={{ bgcolor: "#242424", borderRadius: 2 }}
        />
        <Skeleton
          animation={"wave"}
          variant="text"
          sx={{ bgcolor: "#242424", width: "200px", height: "50px" }}
        />
        <Skeleton
          variant="rectangular"
          animation={"wave"}
          width={"auto"}
          height={"200px"}
          sx={{ bgcolor: "#242424", borderRadius: 2 }}
        />
        <Skeleton
          animation={"wave"}
          variant="text"
          sx={{ bgcolor: "#242424", width: "200px", height: "50px" }}
        />
        <Skeleton
          variant="rectangular"
          animation={"wave"}
          width={"auto"}
          height={"200px"}
          sx={{ bgcolor: "#242424", borderRadius: 2 }}
        />
      </div>
    );
  }

  return (
    <div className={styles.animeContainer}>
      <h1>{data.title}</h1>
      {data.trailer.embed_url === null ? null : (
        <>
          <div className={styles.warning}>
            <FaExclamationCircle className={styles.icons} />
            <p className={styles.warningText}>
              Some trailer is not available other countries
            </p>
            <FaTimesCircle
              className={`${styles.icons} ${styles.pointer}`}
              onClick={() => {
                document.querySelector(`.${styles.warning}`).remove();
                clearTimeout(previousCall);
                return;
              }}
            />
          </div>
          <ReactPlayer url={data.trailer.url} style={{ width: "100%" }} />
        </>
      )}
    </div>
  );
}
export default Id;
