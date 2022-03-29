//manga Recommentations

import Cards from "../cardRecommendations";
import styles from "../../style/Recommendations.module.css";
import { useRouter } from "next/router";

function AnimeRecomendation({ animeRec }) {
  const router = useRouter();
  const onClickBox = (e: any, mal_id: string) => {
    e.preventDefault();
    router.push(`/anime/id/${mal_id}`, undefined, { shallow: true });
  };
  return (
    <div className={styles.Recommendation_container}>
      <h1 className={styles.titles}>Anime Recommendations</h1>
      <div className={styles.Recommendation_list}>
        {animeRec.map(({ mal_id, entry }) => {
          return (
            <div
              style={{
                height: "fit-content",
                width: "fit-content",
              }}
              onClick={(e) => onClickBox(e, entry[0].mal_id)}
              key={mal_id}
            >
              <Cards
                key={mal_id}
                mal_id={mal_id}
                images={entry[0].images.webp.image_url}
                name={entry[0].title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AnimeRecomendation;
