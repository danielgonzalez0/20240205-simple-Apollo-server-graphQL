"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const resolvers_1 = __importDefault(require("./resolvers/resolvers"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const pathSchema = '../src/graphql/schema.graphql';
const schema = path_1.default.join(__dirname, pathSchema);
const typeDefs = fs_1.default.readFileSync(schema, 'utf-8');
const server = new apollo_server_1.ApolloServer({
    typeDefs,
    resolvers: resolvers_1.default,
    cache: 'bounded',
    cors: {
        origin: [
            'http://localhost:5173',
            'https://20240119-ts-react-frontend-quizz-app.vercel.app/',
            'https://backend-app-quizz-5908c890fdf5.herokuapp.com/',
        ],
        credentials: true,
    },
});
const port = process.env.PORT || 4000;
server.listen({ port }).then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
