import { NextApiRequest, NextApiResponse } from "next/types";
import unsplashAPI from "@utils/unsplashAPI";

const getPhotosList = async (req: NextApiRequest, res: NextApiResponse) => {
  const query: any = req.query;
  let { id } = query;
  const { status, response, errors } = await unsplashAPI.collections.getRelated({
    collectionId: id,
  });

  if (errors) {
    res.status(status).json({ msg: errors });
  } else {
    res.status(status).json({ response });
  }
};

export default getPhotosList;
