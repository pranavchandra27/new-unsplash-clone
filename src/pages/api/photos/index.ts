import { NextApiRequest, NextApiResponse } from "next/types";
import unsplashAPI from "@utils/unsplashAPI";

const getPhotosList = async (req: NextApiRequest, res: NextApiResponse) => {
  const { page } = req.body;
  const { status, response, errors } = await unsplashAPI.photos.list({
    page,
    perPage: 30,
  });

  if (errors) {
    res.status(status).json({msg: errors });
  } else {
    res.status(status).json({ response });
  }
};

export default getPhotosList;
