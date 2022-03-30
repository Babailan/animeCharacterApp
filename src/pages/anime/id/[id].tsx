import fetcher from "../../../libs/axiosFetch";
import useSWR from "swr";
import { useRouter } from "next/router";
import { Skeleton } from "@mui/material";
import styles from "../../../style/animeID.module.css";
import { useEffect } from "react";
import { FaExclamationCircle, FaTimesCircle } from "react-icons/fa";

export default ({ setPreviousCall }) => {
  const router = useRouter();
  const { data, error } = useSWR(
    `https://api.jikan.moe/v4/anime/${router.query.id}`,
    fetcher
  );

  useEffect(() => {
    console.log(data);
    if (data) {
      if (document.querySelector(`.${styles.warning}`)) {
        const removingWarning = setTimeout(() => {
          document.querySelector(`.${styles.warning}`).remove();
        }, 60000);
        setPreviousCall(removingWarning);
      }
    }
  }, [data]);

  if (data) {
    return (
      <div className={styles.animeContainer}>
        <h1>{data.title}</h1>
        {data.trailer.embed_url === null ? null : (
          <>
            <div className={styles.warning}>
              <FaExclamationCircle className={styles.icons} />
              <p>Some trailer is not available other countries</p>
              <FaTimesCircle
                className={`${styles.icons} ${styles.pointer}`}
                onClick={() =>
                  document.querySelector(`.${styles.warning}`).remove()
                }
              />
            </div>
            <iframe
              src={data.trailer.embed_url}
              height="450px"
              width={"100%"}
              allowFullScreen
            />
          </>
        )}
      </div>
    );
  }

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
};
