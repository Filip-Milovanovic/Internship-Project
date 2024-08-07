import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// database
import db from "./_db.js";

//types
import { typeDefs } from "./schema.js";

//resolvers
import { resolvers } from "./resolvers.js";

// Server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});
