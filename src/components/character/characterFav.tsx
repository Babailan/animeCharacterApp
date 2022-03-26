//character Recommentations

import Cards from "../cardRecommendations";
import styles from "../../style/Recommendations.module.css";
import { useRouter } from "next/router";

function CharacterRecomendation({ character }) {
  const router = useRouter();
  const onClickBox = (e: any, mal_id: string) => {
    e.preventDefault();
    router.push(`/character/id/${mal_id}`, undefined, { shallow: true });
  };
  return (
    <div className={styles.Recommendation_container}>
      <h1 className={styles.titles}>Most Favorite Characeters</h1>
      <div className={styles.Recommendation_list}>
        {character.map(({ name, images, mal_id }) => {
          return (
            <div
              style={{
                height: "fit-content",
                width: "fit-content",
              }}
              onClick={(e) => onClickBox(e, mal_id)}
              key={mal_id}
            >
              <Cards
                mal_id={mal_id}
                images={images.webp.image_url}
                name={name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CharacterRecomendation;
