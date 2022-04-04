import AnimeRecommendation from "./anime/animeRec";
import CharacterRecomendation from "./character/characterFav";
import MangaRecomendation from "./manga/mangaRec";

function Home({ mangaRec, animeRec, character }) {
  return (
    <div
      style={{
        marginTop: "-10%",
        padding: "0 10px",
        display: "flex",
        flexDirection: "column",
        gap: "1.5em",
      }}
    >
      <AnimeRecommendation animeRec={animeRec} />
      <MangaRecomendation mangaRec={mangaRec} />
      <CharacterRecomendation character={character} />
    </div>
  );
}

export default Home;
