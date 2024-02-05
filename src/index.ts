import { ApolloServer } from 'apollo-server';
import resolvers from './resolvers/resolvers';
import path from 'path';
import fs from 'fs';

const pathName ="../src/graphql/schema.graphql";
const schemaPath = path.join(__dirname, pathName);
const typeDefs = fs.readFileSync(schemaPath, 'utf-8');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
