import axios from "axios";
import Greetings from "../components/greeting";
import Home from "../components/home";
import RemoveElementsDuplicated from "../libs/removeElementDuplicated";

type Props = {
  mangaRec: any;
  animeRec: any;
  character: any;
};

const Index = ({ mangaRec, animeRec, character }: Props) => {
  return (
    <>
      {/* greetings entry */}
      <Greetings
        background={animeRec[0].entry[0].images.webp.large_image_url}
      />
      <Home mangaRec={mangaRec} animeRec={animeRec} character={character} />
    </>
  );
};

export async function getStaticProps() {
  const animeRecommendations = await axios.get(
    "https://api.jikan.moe/v4/recommendations/anime"
  );
  const mangaRecommendations = await axios.get(
    "https://api.jikan.moe/v4/recommendations/manga"
  );
  const characterFavorites = await axios.get(
    "https://api.jikan.moe/v4/characters",
    {
      params: { order_by: "favorites", sort: "desc" },
    }
  );
  let anime = RemoveElementsDuplicated(animeRecommendations.data.data);
  let manga = RemoveElementsDuplicated(mangaRecommendations.data.data);

  return {
    props: {
      animeRec: anime,
      mangaRec: manga,
      character: characterFavorites.data.data,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 300, // In seconds
  };
}

export default Index;
