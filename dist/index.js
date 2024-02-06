"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const resolvers_1 = __importDefault(require("./resolvers/resolvers"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const pathName = "../src/graphql/schema.graphql";
const schemaPath = path_1.default.join(__dirname, pathName);
const typeDefs = fs_1.default.readFileSync(schemaPath, 'utf-8');
const server = new apollo_server_1.ApolloServer({ typeDefs, resolvers: resolvers_1.default });
const port = process.env.PORT || 4000;
server.listen({ port }).then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
