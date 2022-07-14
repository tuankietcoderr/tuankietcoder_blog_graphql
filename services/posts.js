import { gql, request } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_CONTENT_API;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      posts {
        excerpt
        id
        slug
        title
        featuredImage
        description
        updatedAt
        createdAt
        categories {
          name
          id
          slug
        }
        comments {
          name
          email
          createdAt
          description
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.posts;
};

export const getPostBySlug = async (slug) => {
  const query = gql`
    query MyQuery($slug: String!) {
      post(where: { slug: $slug }) {
        excerpt
        id
        slug
        title
        description
        createdAt
        updatedAt
        featuredImage
        categories {
          name
          id
          slug
          posts {
            slug
            title
            createdAt
          }
        }
        comments {
          name
          email
          createdAt
          description
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug });
  return result.post;
};

export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        slug
        createdAt
        id
        categories {
          name
          slug
          id
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug, categories });

  return result.posts;
};
