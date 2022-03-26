import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import Image from "next/image";

type cardProps = {
  images?: any;
  name?: string;
  mal_id?: number;
  id?: any;
};

function Cards({ images, name, mal_id, id }: cardProps) {
  return (
    <>
      <Card
        sx={{
          maxWidth: 225,
          minWidth: 225,
          justifyContent: "flex-start",
          alignContent: "flex-start",
          bgcolor: "#242424",
        }}
        key={mal_id || id}
      >
        <CardActionArea
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignContent: "flex-start",
          }}
        >
          <Image
            src={images}
            loading={"lazy"}
            height="300px"
            width={"225px"}
            alt={id}
          />
          <CardContent>
            <Typography color={"#fff"} component={"div"}>
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default Cards;
