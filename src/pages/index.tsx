import axios from "axios";
import Greetings from "../components/greeting";
import Home from "../components/home";

type Props = {
  mangaRec: any;
  animeRec: any;
};

const Index = ({ mangaRec, animeRec }: Props) => {
  return (
    <>
      {/* greetings entry */}
      <Greetings
        background={animeRec[0].entry[0].images.webp.large_image_url}
      />
      <Home mangaRec={mangaRec} animeRec={animeRec} />
    </>
  );
};

export async function getStaticProps() {
  const animeRecommendations = await axios.get(
    "https://api.jikan.moe/v4/recommendations/anime"
  );
  const mangaRecomendations = await axios.get(
    "https://api.jikan.moe/v4/recommendations/manga"
  );

  return {
    props: {
      animeRec: animeRecommendations.data.data,
      mangaRec: mangaRecomendations.data.data,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 3600, // In seconds
  };
}

export default Index;
