import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import styles from "../../../style/searchCharacter.module.css";

export default ({ list }) => {
  const router = useRouter();
  const action = (e: any, mal_id: string) => {
    e.preventDefault();
    router.push(`/character/id/${mal_id}`);
  };
  return (
    <div className={styles.searchList}>
      {list.map(({ mal_id, images, name }) => {
        return (
          <Card sx={{ maxWidth: 225 }} key={mal_id}>
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
      })}
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const res = await axios.get(`https://api.jikan.moe/v4/characters`, {
    params: { q: context.params.text, sort: "desc", order_by: "favorites" },
  });

  return {
    props: {
      list: res.data.data,
    }, // will be passed to the page component as props
  };
}
