import { NextApiRequest, NextApiResponse } from "next";
import ytdl from "ytdl-core";
import fs from "fs";
async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Content-type", "Video/mp4");
  const video = ytdl("https://www.youtube.com/watch?v=ZQeSeYNEwHM", {
    quality: "highest",
  });

  video.pipe(res);
}

export default handler;
