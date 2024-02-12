"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fakedata_1 = require("../data/fakedata");
const resolvers = {
    Query: {
        hello: () => 'Hello, World!',
        test: () => 'Test1',
        users: () => fakedata_1.userList,
        user: (_, args) => fakedata_1.userList.find((user) => user.id === Number(args.id)),
        userByNationality: (parent, args) => {
            return fakedata_1.userList.filter((user) => user.nationality === args.nationality);
        },
        //movies resolvers
        movies: () => fakedata_1.MovieList,
        movie: (_, args) => fakedata_1.MovieList.find((movie) => movie.title === args.title),
    }, // Add a comma here
    User: {
        favoriteMovies: () => {
            return fakedata_1.MovieList.filter((movie) => movie.yearOfRelease >= 2000 && movie.yearOfRelease <= 2010);
        },
    },
    Mutation: {
        createUser: (parent, args) => {
            const user = args.input;
            const lastId = fakedata_1.userList[fakedata_1.userList.length - 1].id;
            user.id = lastId + 1;
            fakedata_1.userList.push(user);
            return user;
        },
        updateUserName: (parent, args) => {
            const { id, newUserName } = args.input;
            const user = fakedata_1.userList.find((user) => user.id === Number(id));
            user.username = newUserName;
            return user;
        },
        deleteUser: (parent, args) => {
            const userIndex = fakedata_1.userList.findIndex((user) => user.id === Number(args.id));
            if (userIndex === -1) {
                throw new Error('User not found.');
            }
            fakedata_1.userList.splice(userIndex, 1);
            return args.id;
        }
    },
};
exports.default = resolvers;
