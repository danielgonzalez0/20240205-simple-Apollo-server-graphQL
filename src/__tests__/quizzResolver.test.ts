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
  it('should get all quizzes', async () => {
    const response = await testServer.executeOperation({
      query: `
        query {
          quizzes {
            id
            title
          }
        }
      `,
      variables: { id: '1' },
    });

    expect(response.errors).toBeUndefined();
    expect(response.data?.quizzes[0].title).toEqual('HTML');
    expect(response.data?.quizzes[1].title).toEqual('CSS');
  });

  it('should get one specific quizz', async () => {
    const response = await testServer.executeOperation({
      query: `
        query GetQuiz($quizId: ID!) {
          quiz(id: $quizId) {
            id
            title
          }
        }
      `,
      variables: { quizId: 1 },
    });

    expect(response.errors).toBeUndefined();
    expect(response.data?.quiz).toEqual({
      id: '1',
      title: 'HTML',
    });
  });
});
