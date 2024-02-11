import { MovieList, userList } from '../data/fakedata';

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
      return MovieList.filter((movie) => movie.yearOfRelease >= 2000 && movie.yearOfRelease <= 2010);
    }
  }
};


export default resolvers;
