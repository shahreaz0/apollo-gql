import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./schema";
import Query from "./schemas/query.schema";
import Employee from "./schemas/employee.schema";
import Worklog from "./schemas/worklog.schema";

import { resolvers } from "./resolver";

const server = new ApolloServer({
  typeDefs: [Query, typeDefs, Employee, Worklog],
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: {
    port: 4000,
  },
});

console.log(url);
