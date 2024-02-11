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
        }
    }
};
exports.default = resolvers;
