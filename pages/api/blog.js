import { getSession } from "next-auth/react";

const handler = async (req, res) => {
  const session = await getSession({ req }); // getSession from the client side

  session
    ? res.status(200).json(session.user)
    : res.status(401).send("Unauthorized");

  res.end(); //end response
}; // handle request made from user to the server

export default handler;
