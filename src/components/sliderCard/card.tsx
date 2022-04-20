import styles from "../../style/card.module.css";
import { Card as CardContainer, CardActionArea, Tooltip } from "@mui/material";
import Image from "next/image";

function Card({ title, imgUrl }) {
  return (
    <Tooltip title={title} arrow placement={"top"}>
      <CardContainer className={styles.container}>
        <CardActionArea style={{ padding: "10px", background: "transparent" }}>
          <p className={styles.title}>{title}</p>
          <div className={styles.image}>
            <Image
              src={imgUrl}
              loading={"lazy"}
              layout={"responsive"}
              width={125}
              height={150}
            />
          </div>
        </CardActionArea>
      </CardContainer>
    </Tooltip>
  );
}

export default Card;
