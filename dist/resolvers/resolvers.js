"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@gmail.com',
        age: 25,
    },
    { id: 2, name: 'Jane Doe', email: 'jane@gmail.com', age: 26 },
];
const resolvers = {
    Query: {
        hello: () => 'Hello, World!',
        users: () => users,
        user: (parent, args) => users.find((user) => user.id === Number(args.id))
    }, // Add a comma here
};
exports.default = resolvers;
