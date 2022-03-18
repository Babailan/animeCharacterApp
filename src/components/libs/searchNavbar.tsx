import axios from "axios";

const searchData = (
  value: string,
  setPreviousCall: Function,
  setData: Function,
  previousCall: any,
  category: string
) => {
  if (category === "characters") {
    if (value && value.length >= 3) {
      let previousTime = setTimeout(async () => {
        const req = await axios.get(`https://api.jikan.moe/v4/${category}`, {
          params: { limit: 6, q: value },
        });

        const character = req.data.data;
        setData(
          character.sort((a: any, b: any) =>
            a.favorites < b.favorites ? 1 : -1
          )
        );
      }, 1000);
      clearTimeout(previousCall);
      setPreviousCall(previousTime);
      return;
    } else {
      setData([]);
      return;
    }
  } else if (category === "anime") {
    if (value && value.length >= 3) {
      let previousTime = setTimeout(async () => {
        const req = await axios.get(`https://api.jikan.moe/v4/${category}`, {
          params: { limit: 6, q: value, order_by: "rank" },
        });

        const character = req.data.data;
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
export default searchData;
