import { MovieList, userList } from '../data/fakedata';

interface CreateUserInput {
  id: number;
  name: string;
  username: string;
  age: number;
  nationality: string;
}
interface updateUserNameInput {
  id: number;
  newUserName: string;
}

const resolvers = {
  Query: {
    hello: () => 'Hello, World!',
    test: () => 'Test1',
    users: () => userList,
    user: (_, args: { id: number | string }) =>
      userList.find((user) => user.id === Number(args.id)),
    userByNationality: (parent, args: { nationality: string }) => {
      return userList.filter((user) => user.nationality === args.nationality);
    },
    //movies resolvers
    movies: () => MovieList,
    movie: (_, args: { title: string }) =>
      MovieList.find((movie) => movie.title === args.title),
  }, // Add a comma here

  User: {
    favoriteMovies: () => {
      return MovieList.filter(
        (movie) => movie.yearOfRelease >= 2000 && movie.yearOfRelease <= 2010
      );
    },
  },

  Mutation: {
    createUser: (parent, args: { input: CreateUserInput }) => {
      const user = args.input;
      const lastId = userList[userList.length - 1].id;
      user.id = lastId + 1;
      userList.push(user);
      return user;
    },

    updateUserName: (parent, args: { input: updateUserNameInput }) => {
      const { id, newUserName } = args.input;
  
      const user = userList.find((user) => user.id === Number(id));

      user.username = newUserName;
      return user;
    },

    deleteUser: (parent, args: { id: number }) => {
      const userIndex = userList.findIndex((user) => user.id === Number(args.id));
      if (userIndex === -1) {
        throw new Error('User not found.');
      }
      userList.splice(userIndex, 1);
      return args.id
    }
  },
};

export default resolvers;
