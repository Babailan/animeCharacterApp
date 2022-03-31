import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import ytdl from "ytdl-core";
async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Content-type", "Video/mp4");

  const topAnime = await axios.get("https://api.jikan.moe/v4/seasons/now");
  let urls = "";
  for (let i = 0; i < topAnime.data.data.length; i++) {
    if (topAnime.data.data[i].trailer.url !== null) {
      urls = topAnime.data.data[i].trailer.url;
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
  video.pipe(res);
}

export default handler;
