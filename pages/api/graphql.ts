import { ApolloServer } from "apollo-server-micro";
import { MicroRequest } from "apollo-server-micro/dist/types";
import { ServerResponse } from "http";
import Cors from "micro-cors";
import { typeDefs } from "../../graphql/schema";
import { resolvers } from "../../graphql/resolvers";

const cors = Cors();

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const startServer = apolloServer.start();

const handler = async (req: MicroRequest, res: ServerResponse) => {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  await startServer;

  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default cors(handler);
