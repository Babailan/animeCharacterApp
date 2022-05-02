import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import ytdl from "ytdl-core";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await hayopkaBabi();

    res.end(JSON.stringify({ url: data[data.length - 1].url }));
  } catch (err) {
    res.status(500).end(JSON.stringify({ message: "somethings wrong" }));
  }
}

async function hayopkaBabi() {
  const seasonAnime = await axios.get("https://api.jikan.moe/v4/seasons/now");
  let urls = "";
  let data: any;
  for (let i = 0; i < seasonAnime.data.data.length; i++) {
    if (seasonAnime.data.data[i].trailer.url !== null) {
      urls = seasonAnime.data.data[Math.floor(Math.random() * 25)].trailer.url;
      data = await ytdl.getInfo(urls);
      break;
    } else {
      continue;
    }
  }

  const sortedVideoQuality = data.formats.sort((a: any, b: any) => {
    if (a.qualityLabel === null || a.container !== "webm") {
      a.qualityLabel = "0";
    }
    if (b.qualityLabel === null || b.container !== "webm") {
      b.qualityLabel = "0";
    }

    return (
      parseInt(a.qualityLabel.replace(/[a-z]/gi, "")) -
      parseInt(b.qualityLabel.replace(/[a-z]/gi, ""))
    );
  });
  return sortedVideoQuality;
}

export default handler;
