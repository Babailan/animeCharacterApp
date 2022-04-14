import fetcher from "../../../libs/fetcher";
import useSWR from "swr";
import { useRouter } from "next/router";
import { Skeleton } from "@mui/material";

function Id() {
  const router = useRouter();
  const { data } = useSWR(
    `https://api.jikan.moe/v4/anime/${router.query.id}`,
    fetcher
  );

  if (!data) {
    return (
      <div>
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

  return <div></div>;
}
export default Id;
