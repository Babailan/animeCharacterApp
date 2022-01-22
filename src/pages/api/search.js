const axios = require("axios").default;

export default async function handler(req, res) {
  try {
    if (req.method === "GET" || req.method === "get") {
      res.send("Only POST requests are accepted");
    }
    if (req.method === "POST" || req.method === "post") {
      const response = await axios.request({
        method: "GET",
        url: "https://api.jikan.moe/v4/characters",
        params: {
          q: req.query.q,
          limit: 10,
          order_by: "favorites",
        },
      });
      res.send(response.data);
    }
  } catch (err) {
    console.log(err);
    res.send("THERE AN ERR");
  }
}
