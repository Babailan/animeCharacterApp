//manga Recommentations

import Cards from "./cardRecommendations";
import styles from "../style/Recommendations.module.css";
import RemoveElementsDuplicated from "../libs/removeElementDuplicated";

function AnimeRecomendation({ animeRec }) {
  return (
    <div className={styles.Recommendation_container}>
      <h1>Anime Recommendations</h1>
      <div className={styles.Recommendation_list}>
        {animeRec.map(({ mal_id, entry }) => {
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

export default AnimeRecomendation;
