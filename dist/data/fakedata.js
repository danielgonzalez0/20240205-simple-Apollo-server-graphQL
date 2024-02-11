"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieList = exports.userList = void 0;
exports.userList = [
    {
        id: 1,
        name: 'John',
        username: 'john',
        age: 20,
        nationality: 'CANADA',
        friends: [
            {
                id: 2,
                name: 'Pedro',
                username: 'PedroTeche',
                age: 20,
                nationality: 'BRAZIL',
            },
            {
                id: 5,
                name: 'Kelly',
                username: 'kelly2019',
                age: 5,
                nationality: 'CHILE',
            },
        ],
    },
    {
        id: 2,
        name: 'Pedro',
        username: 'PedroTech',
        age: 20,
        nationality: 'BRAZIL',
    },
    {
        id: 3,
        name: 'Sarah',
        username: 'cameron',
        age: 25,
        nationality: 'INDIA',
        friends: [
            {
                id: 2,
                name: 'Pedro',
                username: 'PedroTech',
                age: 20,
                nationality: 'BRAZIL',
            },
        ],
    },
    {
        id: 4,
        name: 'Rafe',
        username: 'rafe123',
        age: 60,
        nationality: 'CANADA',
    },
    {
        id: 5,
        name: 'Kelly',
        username: 'kelly2019',
        age: 5,
        nationality: 'CHILE',
    },
];
exports.MovieList = [
    {
        id: 1,
        title: 'Avengers Endgame',
        yearOfRelease: 2019,
        isInTheaters: true,
    },
    {
        id: 2,
        title: 'Interstellar',
        yearOfRelease: 2007,
        isInTheaters: true,
    },
    {
        id: 3,
        title: 'Superbad',
        yearOfRelease: 2009,
        isInTheaters: true,
    },
    {
        id: 4,
        title: 'PedroTech The Movie',
        yearOfRelease: 2035,
        isInTheaters: false,
    },
];
