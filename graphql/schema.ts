import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  """
  root type
  """
  type Query {
    """
    all users
    """
    users: [User]!
    """
    all products
    """
    products: [Product]!
    """
    one product
    """
    product(id: Int!): Product
  }

  """
  user type
  """
  type User implements BaseProps {
    id: ID!
    createdAt: String!
    updatedAt: String!
    email: String!
    nickname: String!
    isAdmin: Boolean!
  }

  """
  product type
  """
  type Product implements BaseProps {
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

  """
  reviw type
  """
  type Review implements BaseProps {
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

  interface BaseProps {
    id: ID!
    createdAt: String!
    updatedAt: String!
  }
`;
