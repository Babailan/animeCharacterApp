import { Card, CardActionArea, Tooltip } from "@mui/material";
import { useState } from "react";
import styles from "../style/Recommendations.module.css";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import { useRouter } from "next/router";

type cardProps = {
  images?: any;
  name?: string;
  mal_id?: any;
  id?: any;
  index?: number;
  lastId?: number;
};

function Cards({ images, name, mal_id, id, index, lastId }: cardProps) {
  const router = useRouter();

  let [scrollAmount, setScrollAmount] = useState(0);
  const onClickBox = (e: any, mal_id: string) => {
    e.preventDefault();
    router.push(`/anime/id/${mal_id}`, undefined, { shallow: true });
  };

  function scrollToRight(slider: any) {
    if (scrollAmount <= slider.scrollWidth - slider.clientWidth) {
      slider.scrollTo({
        top: 0,
        left: (scrollAmount += slider.clientWidth),
        behavior: "smooth",
      });
      setScrollAmount((p) => p + slider.clientWidth);
    }
  }

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
              maxWidth: 150,
              minWidth: 150,
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
              <Image
                src={images}
                loading={"lazy"}
                height="300px"
                width={"225px"}
                alt={id}
              />
            </CardActionArea>
          </Card>
        </Tooltip>
      </div>
      {index === lastId ? (
        <div
          className={styles.AngleRight}
          onClick={(e) => scrollToRight(e.currentTarget.parentNode)}
        >
          <FaAngleRight />
        </div>
      ) : null}
    </>
  );
}

export default Cards;
