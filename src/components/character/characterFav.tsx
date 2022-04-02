//character Recommentations

import Cards from "../cardRecommendations";
import styles from "../../style/Recommendations.module.css";
import { useRouter } from "next/router";

function CharacterRecomendation({ character }) {
  const router = useRouter();

  return (
    <div className={styles.Recommendation_container}>
      <h1 className={styles.titles}>Most Favorite Characeters</h1>
      <div className={styles.Recommendation_list}>
        {character.map(({ name, images, mal_id }, index: number) => {
          return (
            <Cards
              mal_id={mal_id}
              images={images.webp.image_url}
              name={name}
              lastId={character.length - 1}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CharacterRecomendation;
