import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BaseProps = {
  createdAt: Scalars["String"];
  id: Scalars["ID"];
  updatedAt: Scalars["String"];
};

/** product type */
export type Product = BaseProps & {
  __typename?: "Product";
  brand: Scalars["String"];
  category: Scalars["String"];
  countInStock: Scalars["Int"];
  createdAt: Scalars["String"];
  description: Scalars["String"];
  id: Scalars["ID"];
  image: Scalars["String"];
  name: Scalars["String"];
  price: Scalars["Float"];
  reviews?: Maybe<Array<Maybe<Review>>>;
  updatedAt: Scalars["String"];
};

/** root type */
export type Query = {
  __typename?: "Query";
  /** one product */
  product?: Maybe<Product>;
  /** all products */
  products: Array<Maybe<Product>>;
  /** all users */
  users: Array<Maybe<User>>;
};

/** root type */
export type QueryProductArgs = {
  id: Scalars["Int"];
};

export enum Rating {
  Five = "five",
  Four = "four",
  One = "one",
  Three = "three",
  Two = "two",
}

/** reviw type */
export type Review = BaseProps & {
  __typename?: "Review";
  author: User;
  comment?: Maybe<Scalars["String"]>;
  createdAt: Scalars["String"];
  id: Scalars["ID"];
  rating: Rating;
  title?: Maybe<Scalars["String"]>;
  updatedAt: Scalars["String"];
};

/** user type */
export type User = BaseProps & {
  __typename?: "User";
  createdAt: Scalars["String"];
  email: Scalars["String"];
  id: Scalars["ID"];
  isAdmin: Scalars["Boolean"];
  nickname: Scalars["String"];
  updatedAt: Scalars["String"];
};

export type GetProductQueryVariables = Exact<{
  productId: Scalars["Int"];
}>;

export type GetProductQuery = {
  __typename?: "Query";
  product?:
    | {
        __typename?: "Product";
        id: string;
        name: string;
        category: string;
        brand: string;
        description: string;
        price: number;
        image: string;
        countInStock: number;
        reviews?:
          | Array<
              | {
                  __typename?: "Review";
                  title?: string | null | undefined;
                  comment?: string | null | undefined;
                  rating: Rating;
                  createdAt: string;
                  updatedAt: string;
                  author: { __typename?: "User"; nickname: string };
                }
              | null
              | undefined
            >
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type GetProductsQueryVariables = Exact<{ [key: string]: never }>;

export type GetProductsQuery = {
  __typename?: "Query";
  products: Array<
    | {
        __typename?: "Product";
        id: string;
        brand: string;
        price: number;
        name: string;
        image: string;
        reviews?:
          | Array<{ __typename?: "Review"; rating: Rating } | null | undefined>
          | null
          | undefined;
      }
    | null
    | undefined
  >;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetUsersQuery = {
  __typename?: "Query";
  users: Array<
    | {
        __typename?: "User";
        id: string;
        email: string;
        nickname: string;
        isAdmin: boolean;
      }
    | null
    | undefined
  >;
};

export const GetProductDocument = gql`
  query GetProduct($productId: Int!) {
    product(id: $productId) {
      id
      name
      category
      brand
      description
      price
      image
      countInStock
      reviews {
        title
        comment
        rating
        createdAt
        updatedAt
        author {
          nickname
        }
      }
    }
  }
`;

/**
 * __useGetProductQuery__
 *
 * To run a query within a React component, call `useGetProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useGetProductQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetProductQuery,
    GetProductQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetProductQuery, GetProductQueryVariables>(
    GetProductDocument,
    options
  );
}
export function useGetProductLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductQuery,
    GetProductQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetProductQuery, GetProductQueryVariables>(
    GetProductDocument,
    options
  );
}
export type GetProductQueryHookResult = ReturnType<typeof useGetProductQuery>;
export type GetProductLazyQueryHookResult = ReturnType<
  typeof useGetProductLazyQuery
>;
export type GetProductQueryResult = Apollo.QueryResult<
  GetProductQuery,
  GetProductQueryVariables
>;
export const GetProductsDocument = gql`
  query GetProducts {
    products {
      id
      brand
      price
      name
      image
      reviews {
        rating
      }
    }
  }
`;

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetProductsQuery,
    GetProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(
    GetProductsDocument,
    options
  );
}
export function useGetProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductsQuery,
    GetProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(
    GetProductsDocument,
    options
  );
}
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<
  typeof useGetProductsLazyQuery
>;
export type GetProductsQueryResult = Apollo.QueryResult<
  GetProductsQuery,
  GetProductsQueryVariables
>;
export const GetUsersDocument = gql`
  query GetUsers {
    users {
      id
      email
      nickname
      isAdmin
    }
  }
`;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options
  );
}
export function useGetUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUsersQuery,
    GetUsersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options
  );
}
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<
  typeof useGetUsersLazyQuery
>;
export type GetUsersQueryResult = Apollo.QueryResult<
  GetUsersQuery,
  GetUsersQueryVariables
>;
