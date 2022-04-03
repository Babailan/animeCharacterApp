import { Card, CardActionArea, Tooltip } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

type cardProps = {
  images?: any;
  name?: string;
  mal_id?: any;
  id?: any;
  index?: number;
  lastId?: number;
  category?: string;
};

function Cards({ images, name, mal_id, id, category }: cardProps) {
  const router = useRouter();

  const onClickBox = (e: any, mal_id: string) => {
    e.preventDefault();
    router.push(`/${category}/id/${mal_id}`);
  };

  return (
    <>
      <div
        style={{
          height: "fit-content",
          width: "fit-content",
        }}
        onClick={(e) => onClickBox(e, mal_id)}
        key={mal_id}
      >
        <Tooltip title={name} arrow placement={"top"}>
          <Card
            sx={{
              justifyContent: "flex-start",
              alignContent: "flex-start",
              bgcolor: "transparent",
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
              <div style={{ minWidth: "225px", minHeight: "300px" }}>
                <Image src={images} loading={"lazy"} layout={"fill"} alt={id} />
              </div>
            </CardActionArea>
          </Card>
        </Tooltip>
      </div>
    </>
  );
}

export default Cards;
