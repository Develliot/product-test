import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { gql } from "graphql-tag";

import { data } from "@/server/db";
const products = data.products;

// following https://www.airplane.dev/blog/how-to-build-a-graphql-api-with-next-js

// Next JS is a backend frameworks and I was interested in seeing how to make the /api route work with graphql
// which is why I've gone a little off piste here

// would be nice to get this working with graphiql so I don't have use postman, self documenting etc
// I would like to either derrive the typeDefs from the TS types or use the TS types directly
// I haven't used graphql in about 4 years so I'm a bit rusty, not sure about the best way to do error handling just yet

const typeDefs = gql`
  type Product {
    id: Int
    name: String
    power: String
    description: String
    price: Int
    quantity: Int
    brand: String
    weight: Float
    height: Float
    width: Float
    length: Float
    model_code: String
    colour: String
    img_url: String
  }

  type Query {
    products: [Product]
  }

  type Query {
    product(id: Int): Product
  }
`;

const resolvers = {
  Query: {
    products: () => products,
    product: (parent: any, args: { id: number }) =>
      products.find((user) => user.id === args.id),
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});
export default startServerAndCreateNextHandler(apolloServer);
