export const typeDefs = `#graphql

    type Game {
        id: ID!
        title: String!
        platform: [String!]!
        reviews: [Review]
        
    }

    type Review {
        id: ID!
        rating: Int!
        content:String!
        author: Author!
        game: Game!
    }

    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review]
    }

    type Query {
        games: [Game]
        game(id: ID!): Game
        reviews: [Review]
        authors: [Author]
    }

    type Mutation {
        addGame(newGame: GameInput!): Game
        deleteGame(id: ID): Game
        updateGame(id: ID!, game:GameUpdateInput!): Game
    }

    input GameInput {
        id: ID!
        title: String!
        platform: [String!]!
    }

    input GameUpdateInput {
        title: String
        platform: [String]
    }

`;
