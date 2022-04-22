import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import shuffle from "../../libs/shuffle";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const seasonAnime = await axios.get("https://api.jikan.moe/v4/seasons/now");
    res.end(JSON.stringify({ data: shuffle(seasonAnime.data.data) }));
  } catch (err) {
    res.status(500).end(JSON.stringify({ message: "somethings wrong" }));
  }
}

export default handler;
