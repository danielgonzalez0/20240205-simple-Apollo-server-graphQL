import { ApolloServer } from 'apollo-server';
import resolvers from './resolvers/resolvers';
import path from 'path';
import fs from 'fs';

const pathSchema = '../src/graphql/schema.graphql';
const schema = path.join(__dirname, pathSchema);
const typeDefs = fs.readFileSync(schema, 'utf-8');


const server = new ApolloServer({
  typeDefs,
  resolvers,
  cache: 'bounded',
});

const port = process.env.PORT || 4000;

server.listen({ port }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
