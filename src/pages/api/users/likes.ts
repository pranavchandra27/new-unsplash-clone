import { NextApiRequest, NextApiResponse } from "next/types";
import unsplashAPI from "@utils/unsplashAPI";

const getUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, page } = req.query;
  const { status, response, errors } = await unsplashAPI.users.getLikes({
    username: id.toString(),
    page: Number(page),
    perPage: 30,
  });

  if (errors) {
    res.status(status).json({ errors });
  } else {
    res.status(status).json({ response });
  }
};

export default getUser;
