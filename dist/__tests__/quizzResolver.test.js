"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const resolvers_1 = __importDefault(require("../resolvers/resolvers"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const schema_1 = require("@graphql-tools/schema");
// Load your schema
const pathName = '../../src/graphql/schema.graphql';
const schemaPath = path_1.default.join(__dirname, pathName);
const typeDefs = fs_1.default.readFileSync(schemaPath, 'utf-8');
// Make an executable schema
const schema = (0, schema_1.makeExecutableSchema)({ typeDefs, resolvers: resolvers_1.default });
// Create an instance of ApolloServer
const testServer = new apollo_server_1.ApolloServer({ schema });
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
