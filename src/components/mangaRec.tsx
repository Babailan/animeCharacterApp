//manga Recommentations

import Cards from "./cardRecommendations";
import styles from "../style/Recommendations.module.css";

function MangaRecomendation({ mangaRec }) {
  console.log(mangaRec);
  return (
    <div className={styles.Recommendation_container}>
      <h1>Manga Recommendations</h1>
      <div className={styles.Recommendation_list}>
        {mangaRec.slice(0, 20).map(({ mal_id, entry }) => {
          return (
            <Cards
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
