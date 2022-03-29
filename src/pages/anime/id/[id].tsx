import fetcher, { normalAxios } from "../../../libs/axiosFetch";
import useSWR from "swr";
import { useRouter } from "next/router";
import { Skeleton } from "@mui/material";
import styles from "../../../style/animeID.module.css";
import { useEffect } from "react";

export default () => {
  const router = useRouter();
  const { data } = useSWR(
    `https://api.jikan.moe/v4/anime/${router.query.id}`,
    fetcher
  );
  useEffect(() => {
    console.log(data);
  }, [data]);
  if (!data)
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
  return (
    <div className={styles.animeContainer}>
      {data.trailer.embed_url === null ? null : (
        <iframe
          src={data.trailer.embed_url}
          height="450px"
          width={"100%"}
          allowFullScreen
        />
      )}
    </div>
  );
};
