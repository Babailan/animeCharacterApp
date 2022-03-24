import axios from "axios";
import useSWR from "swr";
import Greetings from "../components/greeting";
import Home from "../components/home";
import fetcher, { fetchCharacterFav } from "../libs/axiosFetch";
import RemoveElementsDuplicated from "../libs/removeElementDuplicated";

const Index = () => {
  const mangaRec = useSWR(
    "https://api.jikan.moe/v4/recommendations/manga",
    fetcher
  );
  const animeRec = useSWR(
    "https://api.jikan.moe/v4/recommendations/anime",
    fetcher
  );
  const character = useSWR(
    "https://api.jikan.moe/v4/characters",
    fetchCharacterFav
  );
  if (mangaRec.error || animeRec.error || character.error)
    return <p>Loading..</p>;
  if (!mangaRec.data || !animeRec.data || !character.data)
    return <p>Loading..</p>;
  return (
    <>
      {/* greetings entry */}
      <Greetings />
      <Home
        mangaRec={RemoveElementsDuplicated(mangaRec.data)}
        animeRec={RemoveElementsDuplicated(animeRec.data)}
        character={character.data}
      />
    </>
  );
};

export default Index;
