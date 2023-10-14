import db from "../db.json";

import {} from "@apollo/server";

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
};
