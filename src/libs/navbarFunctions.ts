import axios from "axios";

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
      const values = document.querySelector(".searchBox")["value"];
      if (values) {
        const req = await axios.get(`https://api.jikan.moe/v4/${category}`, {
          params: { sort: "desc", order_by: "favorites", limit: 15, q: values },
        });
        const character = req.data.data;
        setData(character);
      } else {
        setData([]);
        return;
      }
    }, 500);
    clearTimeout(previousCall);
    setPreviousCall(previousTime);
  } else if (category === "anime") {
    let previousTime = setTimeout(async () => {
      const values = document.querySelector(".searchBox")["value"];
      if (values) {
        const req = await axios.get(`https://api.jikan.moe/v4/${category}`, {
          params: { sort: "desc", order_by: "favorites", limit: 15, q: values },
        });
        const character = req.data.data;
        setData(character);
      } else {
        setData([]);
        return;
      }
    }, 500);
    clearTimeout(previousCall);
    setPreviousCall(previousTime);
  } else {
    let previousTime = setTimeout(async () => {
      const values = document.querySelector(".searchBox")["value"];
      if (values) {
        const req = await axios.get(`https://api.jikan.moe/v4/${category}`, {
          params: { sort: "desc", order_by: "favorites", limit: 15, q: values },
        });
        const character = req.data.data;
        setData(character);
      } else {
        setData([]);
        return;
      }
    }, 500);
    clearTimeout(previousCall);
    setPreviousCall(previousTime);
  }
};
const logoOnClick = async (e: any, router: any) => {
  e.preventDefault();
  router.push(`/`, undefined, { shallow: true });
};
const onSubmitSearchMobile = async (
  e: any,
  value: string,
  setData: Function,
  setText: Function,
  setSearchBox: Function,
  router: any,
  previousCall: any
) => {
  e.preventDefault();
  setSearchBox((p: boolean) => !p);
  clearTimeout(previousCall);
  setData([]);
  setText("");
  if (!value.length) {
    router.push("/", undefined, { shallow: true });
    return;
  }
  router.push(`/character/search/${value}`, undefined, { shallow: true });
};
const onSubmitSearchDesktop = async (
  e: any,
  value: string,
  setData: Function,
  setText: Function,
  router: any,
  previousCall: any
) => {
  e.preventDefault();
  setData([]);
  setText("");
  clearTimeout(previousCall);
  if (!value.length) {
    router.push("/", undefined, { shallow: true });
    return;
  }
  router.push(`/character/search/${value}`, undefined, { shallow: true });
};
export { logoOnClick, searchData, onSubmitSearchMobile, onSubmitSearchDesktop };
