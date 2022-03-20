import axios from "axios";
import Router from "next/router";

const searchData = (
  value: string,
  setPreviousCall: Function,
  setData: Function,
  previousCall: any,
  category: string
) => {
  if (category === "characters") {
    if (value && value.length >= 1) {
      let previousTime = setTimeout(async () => {
        const req = await axios.get(`https://api.jikan.moe/v4/${category}?`, {
          params: { sort: "desc", order_by: "favorites", limit: 15, q: value },
        });

        const character = req.data.data;
        setData(character);
      }, 1000);
      console.log("YES");
      clearTimeout(previousCall);
      setPreviousCall(previousTime);
      return;
    } else {
      setData([]);
      clearTimeout(previousCall);
      return;
    }
  } else if (category === "anime") {
    if (value && value.length >= 1) {
      let previousTime = setTimeout(async () => {
        const req = await axios.get(`https://api.jikan.moe/v4/${category}`, {
          params: { limit: 6, q: value },
        });

        const character = req.data.data;
        console.log(character);
        setData(character);
      }, 1000);
      clearTimeout(previousCall);
      setPreviousCall(previousTime);
      return;
    } else {
      setData([]);
      return;
    }
  } else {
    console.log("NONE CATEGORY");
  }
};
const logoOnClick = async (e: any) => {
  e.preventDefault();
  await Router.push(`/`);
};
const onSubmitSearch = async (
  e: any,
  value: string,
  setData: Function,
  setText: Function,
  setSearchBox: Function
) => {
  e.preventDefault();
  setSearchBox((p: boolean) => !p);
  setData([]);
  setText("");
  await Router.push(`/character/${value}`);
};
export { logoOnClick, searchData, onSubmitSearch };
