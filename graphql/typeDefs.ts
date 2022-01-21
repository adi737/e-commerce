import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Query {
    users: [User]!
    products: [Product]!
  }

  type User {
    id: ID!
    email: String!
    nickname: String!
    isAdmin: Boolean!
  }

  type Product {
    id: ID!
    createdAt: String!
    updatedAt: String!
    name: String!
    category: String!
    brand: String!
    description: String!
    price: Float!
    image: String!
    countInStock: Int!
    reviews: [Review]
  }

  type Review {
    id: ID!
    createdAt: String!
    updatedAt: String!
    title: String
    comment: String
    rating: Rating!
    author: User!
  }

  enum Rating {
    one
    two
    three
    four
    five
  }
`;
