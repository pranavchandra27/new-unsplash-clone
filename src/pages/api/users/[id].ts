import { NextApiRequest, NextApiResponse } from "next/types";
import unsplashAPI from "@utils/unsplashAPI";

const getUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const {id} = req.query
  const { status, response, errors } = await unsplashAPI.users.get({username: id.toString()})

  if (errors) {
    res.status(status).json({ errors });
  } else {
    res.status(status).json({ response });
  }
};

export default getUser;
