import { ApolloServer } from 'apollo-server';
import resolvers from './resolvers/resolvers';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';

//charge les variables d'environnement
dotenv.config();

const pathSchema = '../src/graphql/schema.graphql';
const schema = path.join(__dirname, pathSchema);
const typeDefs = fs.readFileSync(schema, 'utf-8');

const corsUrls = process.env.CORS_URLS.split(',');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cache: 'bounded',
  cors: {
    origin: corsUrls,
    credentials: true,
  },
});

const port = process.env.PORT || 4000;

server.listen({ port }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
