import AnimeRecomendation from "./anime/animeRec";
import CharacterRecomendation from "./character/characterFav";
import MangaRecomendation from "./manga/mangaRec";

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
