import db from "../db";

export const resolvers = {
  Query: {
    reviews: () => db.reviews,
    authors: () => db.authors,
    games: () => db.games,
    game: (_: any, args: { id: string }) => db.games.find((game) => game.id === args.id),
  },
  Game: {
    reviews: (parent: { id: string }) =>
      db.reviews.filter((review) => review.game_id === parent.id),
  },
  Review: {
    game: (parent: { game_id: string }) =>
      db.games.find((game) => game.id === parent.game_id),

    author: (parent: { author_id: string }) =>
      db.authors.find((author) => author.id === parent.author_id),
  },

  Author: {
    reviews: (parent: { id: string }) =>
      db.reviews.filter((review) => review.author_id === parent.id),
  },

  Mutation: {
    addGame: async (
      _: any,
      args: { newGame: { id: string; title: string; platform: string[] } }
    ) => {
      db.games.push(args.newGame);

      return args.newGame;
    },
    deleteGame: async (_: any, args: { id: string }) => {
      const deleted = db.games.find((game) => game.id === args.id);

      console.log({ args, deleted });

      const filtered = db.games.filter((game) => game.id !== args.id);

      db.games = [...filtered];

      return deleted;
    },

    updateGame: (
      _: any,
      args: { id: any; game: { title: string; platform: string[] } }
    ) => {
      db.games = db.games.map((game) => {
        if (game.id === args.id) {
          return {
            ...game,
            ...args.game,
          };
        }

        return {
          ...game,
        };
      });

      return db.games.find((game) => game.id === args.id);
    },
  },
};
