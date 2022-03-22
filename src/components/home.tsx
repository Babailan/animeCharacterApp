import AnimeRecomendation from "./animeRec";
import Greeting from "./greeting";
import MangaRecomendation from "./mangaRec";

function Home({ mangaRec, animeRec }) {
  console.log(animeRec);
  return (
    <>
      <AnimeRecomendation animeRec={animeRec} />
      <MangaRecomendation mangaRec={mangaRec} />
    </>
  );
}

export default Home;
