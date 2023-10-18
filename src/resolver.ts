import db from "../db";

export const resolvers = {
  Query: {
    reviews: () => db.reviews,
    authors: () => db.authors,
    games: () => db.games,
    game: (_: any, args: { id: string }) => db.games.find((game) => game.id === args.id),
    employees: async (_: any, args: any) => {
      const url =
        "https://api.attendancekeeper.net/hr/api/v1/employee/get-all-employee?company_uuid=0148ad01-c138-42f5-9609-01d3989e92f1";
      const data = await (
        await fetch(url, {
          headers: {
            "secret-key": "6433220e-5f0b-4238-bb11-046f589e9149",
          },
        })
      ).json();

      if (args.limit) {
        return (data as any).data.slice(0, args.limit);
      }

      return (data as any).data;
    },
    worklogs: async (_: any, args: { limit: number }) => {
      const url = new URL("https://worklog.attendancekeeper.net/api/v2/worklogs");

      url.searchParams.append("sort", "datetime:desc");

      if (args.limit) {
        url.searchParams.append("limit", args.limit.toString());
      }

      const data = await (await fetch(url)).json();

      if (args.limit) {
        return (data as any).data.slice(0, args.limit);
      }

      return (data as any).data;
    },
  },

  Worklog: {
    employee: async (parent: any) => {
      console.log(parent.employee_uuid);

      const url = `https://api.attendancekeeper.net/hr/api/v1/employee/single-employee/${parent.employee_uuid}/`;

      const data = await (
        await fetch(url, {
          headers: {
            "secret-key": "6433220e-5f0b-4238-bb11-046f589e9149",
          },
        })
      ).json();

      return (data as any).data;
    },
  },

  Employee: {
    worklogs: async (parent: any) => {
      const url = new URL("https://worklog.attendancekeeper.net/api/v2/worklogs");
      url.searchParams.append("employee_uuid", parent.uuid);

      const data = await (await fetch(url)).json();

      return (data as any).data;
    },
  },

  Game: {
    reviews: (parent: { id: string }) => {
      return db.reviews.filter((review) => review.game_id === parent.id);
    },
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
