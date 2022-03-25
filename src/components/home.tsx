import AnimeRecomendation from "./animeRec";
import CharacterRecomendation from "./characterFav";
import MangaRecomendation from "./mangaRec";

function Home({ mangaRec, animeRec, character }) {
  return (
    <>
      <AnimeRecomendation animeRec={animeRec} />
      <MangaRecomendation mangaRec={mangaRec} />
      <CharacterRecomendation character={character} />
    </>
  );
}

export default Home;
