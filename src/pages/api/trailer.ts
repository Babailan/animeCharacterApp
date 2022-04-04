import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import ytdl from "ytdl-core";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await hayopkaBabi();
    res.end(JSON.stringify({ url: data[data.length - 1].url }));
  } catch (err) {
    console.log(err);
    res.status(500).send("somethings wrong");
  }
}

async function hayopkaBabi() {
  const topAnime = await axios.get("https://api.jikan.moe/v4/seasons/now");
  let urls = "";
  let data: any;
  for (let i = 0; i < topAnime.data.data.length; i++) {
    if (topAnime.data.data[i].trailer.url !== null) {
      urls = topAnime.data.data[Math.floor(Math.random() * 25)].trailer.url;
      const info = await ytdl.getInfo(urls);
      const url = new URL(info.formats[i].url);
      const typevideo = url.searchParams.get("mime");
      if (typevideo !== "video/webm" || !typevideo) {
        continue;
      }
      data = info;
      break;
    } else {
      continue;
    }
  }

  const sortedVideoQuality = data.formats.sort((a: any, b: any) => {
    if (a.qualityLabel === null) {
      a.qualityLabel = "0";
    }
    if (b.qualityLabel === null) {
      b.qualityLabel = "0";
    }
    return (
      a.qualityLabel.replace(/[a-z]/gi, "") -
      b.qualityLabel.replace(/[a-z]/gi, "")
    );
  });
  return sortedVideoQuality;
}

export default handler;
