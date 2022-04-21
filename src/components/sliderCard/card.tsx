import styles from "../../style/card.module.css";
import { Card as CardContainer, CardActionArea, Tooltip } from "@mui/material";
import Image from "next/image";

function Card({ title, imgUrl }) {
  return (
    <Tooltip title={title} arrow placement={"top"}>
      <CardContainer className={styles.container}>
        <CardActionArea style={{ background: "transparent" }}>
          <p className={styles.title}>{title}</p>
          <div className={styles.imageContainer}>
            <Image
              src={imgUrl}
              loading={"lazy"}
              width={100}
              layout={"responsive"}
              height={150}
              className={styles.image}
            />
          </div>
        </CardActionArea>
      </CardContainer>
    </Tooltip>
  );
}

export default Card;
