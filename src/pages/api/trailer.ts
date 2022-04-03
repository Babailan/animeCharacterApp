import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import ytdl from "ytdl-core";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const topAnime = await axios.get("https://api.jikan.moe/v4/seasons/now");
    let urls = "";
    console.log(topAnime.data.data.length);
    for (let i = 0; i < topAnime.data.data.length; i++) {
      if (topAnime.data.data[i].trailer.url !== null) {
        urls = topAnime.data.data[Math.floor(Math.random() * 25)].trailer.url;
      } else {
        continue;
      }
      if (urls) {
        break;
      }
    }
    const video = ytdl(urls, {
      quality: "highestvideo",
    });
    video.on("info", (info, format) => {
      res.status(200).send(JSON.stringify({ url: format.url }));
    });
  } catch (err) {
    console.log(err);
  }
}

export default handler;
