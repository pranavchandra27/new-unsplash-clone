import { NextApiRequest, NextApiResponse } from "next/types";
import unsplashAPI from "@utils/unsplashAPI";

const getRandomPhoto = async (req: NextApiRequest, res: NextApiResponse) => {
  const { status, response, errors } = await unsplashAPI.photos.getRandom({
    query: "landscape",
    count: 1,
    featured: true,
  });

  if (errors) {
    res.status(status).json({ msg: errors });
  } else {
    res.status(status).json({ response });
  }
};

export default getRandomPhoto;
