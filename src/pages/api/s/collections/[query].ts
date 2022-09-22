import { NextApiRequest, NextApiResponse } from "next/types";
import unsplashAPI from "@utils/unsplashAPI";

const searchCollections = async (req: NextApiRequest, res: NextApiResponse) => {
  const body: any = req.query

  const { status, response, errors } = await unsplashAPI.search.getCollections({
    query: body.query,
    page: parseInt(body.page),
    perPage: 30
  })

  if (errors) {
    res.status(status).json({ msg: errors });
  } else {
    res.status(status).json({ response });
  }
};

export default searchCollections;
