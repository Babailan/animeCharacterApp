//manga Recommentations

import Cards from "../cardRecommendations";
import styles from "../../style/Recommendations.module.css";

function AnimeRecomendation({ animeRec }) {
  return (
    <div className={styles.Recommendation_container}>
      <h1 className={styles.titles}>Anime Recommendations</h1>
      <div className={styles.Recommendation_list}>
        {animeRec.map(({ mal_id, entry }, index: number) => {
          return (
            <Cards
              key={mal_id}
              mal_id={mal_id}
              images={entry[0].images.webp.image_url}
              name={entry[0].title}
              index={index}
              lastId={animeRec.length - 1}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AnimeRecomendation;
