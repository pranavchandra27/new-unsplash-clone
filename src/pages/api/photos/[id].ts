import { NextApiRequest, NextApiResponse } from "next/types";
import unsplashAPI from "@utils/unsplashAPI";

const getPhoto = async (req: NextApiRequest, res: NextApiResponse) => {
  const {id} = req.query
  const { status, response, errors } = await unsplashAPI.photos.get({photoId: id.toString()})

  if (errors) {
    res.status(status).json({ errors });
  } else {
    res.status(status).json({ response });
  }
};

export default getPhoto;
