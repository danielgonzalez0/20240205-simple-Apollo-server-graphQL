"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loadData_1 = require("../data/loadData");
const quizzes = (0, loadData_1.loadQuizzesData)();
const resolvers = {
    Query: {
        quizzes: () => quizzes,
        quiz: (parent, args) => {
            return quizzes.find((quiz) => quiz.id === Number(args.id));
        }
        // users: () => userList,
        // user: (_, args: { id: number | string }) =>
        //   userList.find((user) => user.id === Number(args.id)),
        // userByNationality: (parent, args: { nationality: string }) => {
        //   return userList.filter((user) => user.nationality === args.nationality);
        // },
        // //movies resolvers
        // movies: () => MovieList,
        // movie: (_, args: { title: string }) =>
        //   MovieList.find((movie) => movie.title === args.title),
    }, // Add a comma here
};
exports.default = resolvers;
