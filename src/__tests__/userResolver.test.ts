
import { ApolloServer } from 'apollo-server';
import resolvers from '../resolvers/resolvers';
import fs from 'fs';
import path from 'path';
import { makeExecutableSchema } from '@graphql-tools/schema';

// Load your schema
const pathName = '../../src/graphql/schema.graphql';
const schemaPath = path.join(__dirname, pathName);
const typeDefs = fs.readFileSync(schemaPath, 'utf-8');

// Make an executable schema
const schema = makeExecutableSchema({ typeDefs, resolvers });

// Create an instance of ApolloServer
const testServer = new ApolloServer({ schema });

// Write your tests
describe('Resolvers', () => {
  it('should resolve the `user` query', async () => {
    const response = await testServer.executeOperation({
      query: `
        query GetUser($id: ID!) {
          user(id: $id) {
            id
            name
          }
        }
      `,
      variables: { id: '1' },
    });

    expect(response.errors).toBeUndefined();
    expect(response.data?.user).toEqual({
      id: '1',
      name: 'John Doe',
    });
  });
});