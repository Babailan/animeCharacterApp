import axios from "axios";
import Router from "next/router";

const searchData = async (
  value: string,
  setPreviousCall: Function,
  setData: Function,
  previousCall: any,
  category: string
) => {
  clearTimeout(previousCall);
  if (category === "characters") {
    let previousTime = setTimeout(async () => {
      if (value.length) {
        const req = await axios.get(`https://api.jikan.moe/v4/${category}?`, {
          params: { sort: "desc", order_by: "favorites", limit: 15, q: value },
        });
        if (document.querySelector(".searchBox")["value"].length === 0) {
          setData([]);
          return;
        }
        const character = req.data.data;
        setData(character);
      }
    }, 500);
    clearTimeout(previousCall);
    setPreviousCall(previousTime);
  } else if (category === "anime") {
    if (value && value.length >= 1) {
      const req = await axios.get(`https://api.jikan.moe/v4/${category}`, {
        params: { limit: 6, q: value },
      });

      const character = req.data.data;
      console.log(character);
      setData(character);

      clearTimeout(previousCall);
    } else {
      setData([]);
    }
  } else {
  }
};
const logoOnClick = async (e: any) => {
  e.preventDefault();
  Router.push(`/`);
};
const onSubmitSearchMobile = async (
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
  if (value.length === 0) {
    Router.push("/character");
  }
  Router.push(`/character/search/${value}`);
};
const onSubmitSearchDesktop = async (
  e: any,
  value: string,
  setData: Function,
  setText: Function
) => {
  e.preventDefault();
  setData([]);
  setText("");
  if (value.length === 0) {
    Router.push("/character");
  }
  Router.push(`/character/search/${value}`);
};
export { logoOnClick, searchData, onSubmitSearchMobile, onSubmitSearchDesktop };
