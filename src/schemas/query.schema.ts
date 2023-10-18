export default `#graphql

    type Query {
        games: [Game]
        game(id: ID!): Game
        reviews: [Review]
        authors: [Author]
        employees(limit: Int): [Employee]
        worklogs(limit:Int): [Worklog]
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
