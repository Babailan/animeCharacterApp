import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "../../../libs/axiosFetch";
import styles from "../../../style/searchCharacter.module.css";

export default () => {
  const router = useRouter();
  const { data, error } = useSWR(
    `https://api.jikan.moe/v4/characters?q=${router.query.text}&sort=desc&order_by=favorites`,
    fetcher
  );
  const action = (e: any, mal_id: string) => {
    e.preventDefault();
    router.push(`/character/id/${mal_id}`);
  };
  if (error) return <h1>loading...</h1>;
  if (!data) return <h1>loading...</h1>;
  return (
    <div className={styles.searchList}>
      {!data.length ? (
        <h1>no result</h1>
      ) : (
        data.map(({ mal_id, images, name }) => {
          return (
            <Card
              sx={{ maxWidth: 225, minWidth: 225, bgcolor: "#B0B3B8" }}
              key={mal_id}
            >
              <CardActionArea onClick={(e) => action(e, mal_id)}>
                <CardMedia
                  component="img"
                  height="300"
                  style={{ backgroundSize: "contain" }}
                  image={images.webp.image_url}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography variant={"h6"} component={"div"}>
                    {name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })
      )}
    </div>
  );
};
