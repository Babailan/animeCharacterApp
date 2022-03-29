import axios from "axios";
const fetcher = (url: string) => axios.get(url).then((res) => res.data.data);
const fetchCharacterFav = (url: string) =>
  axios
    .get(url, { params: { order_by: "favorites", sort: "desc" } })
    .then((res) => res.data.data);
const normalAxios = (url: string) => axios.get(url).then((res) => res.data);

export default fetcher;
export { fetchCharacterFav, normalAxios };
