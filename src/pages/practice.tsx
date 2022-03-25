import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default () => {
  const character = useSWR(
    "https://api.jikan.moe/v4/recommendations/anime",
    fetcher
  );
  console.log(character.data);
  return <h1>tulo lawa</h1>;
};
