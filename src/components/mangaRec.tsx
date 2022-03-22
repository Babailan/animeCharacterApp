//manga Recommentations

import Cards from "./cardRecommendations";
import styles from "../style/Recommendations.module.css";

function MangaRecomendation({ mangaRec }) {
  return (
    <div className={styles.Recommendation_container}>
      <h1>Manga Recommendations</h1>
      <div className={styles.Recommendation_list}>
        {mangaRec.map(({ mal_id, entry }) => {
          return (
            <Cards
              key={mal_id}
              mal_id={mal_id}
              images={entry[0].images.webp.image_url}
              name={entry[0].title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MangaRecomendation;
