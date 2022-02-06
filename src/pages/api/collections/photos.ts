import { NextApiRequest, NextApiResponse } from "next/types";
import unsplashAPI from "@utils/unsplashAPI";

const getPhotosList = async (req: NextApiRequest, res: NextApiResponse) => {
  const query: any = req.query;
  let { page, id } = query;
  const { status, response, errors } = await unsplashAPI.collections.getPhotos({
    collectionId: id,
    page: page,
    perPage: 30,
  });

  if (errors) {
    res.status(status).json({ msg: errors });
  } else {
    res.status(status).json({ response });
  }
};

export default getPhotosList;
