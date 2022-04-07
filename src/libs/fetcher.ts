import axios from "axios";
const fetcher = (url: string) =>
  axios.get(url, { params: { limit: 15 } }).then((res) => res.data.data);
const fetchCharacterFav = (url: string) =>
  axios
    .get(url, { params: { order_by: "favorites", sort: "desc", limit: 15 } })
    .then((res) => res.data.data);

const trailer = (url: string) =>
  axios.get(url, { params: { limit: 15 } }).then((res) => res.data);

export default fetcher;
export { fetchCharacterFav, trailer };
