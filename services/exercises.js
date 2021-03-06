import { gql, request } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_CONTENT_API;

export const getExercises = async () => {
  const query = gql`
    query GetExercises {
      exercises {
        id
        title
        slug
        excerpt
        updatedAt
        createdAt
        fileUrl
        description
        featuredImage
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.exercises;
};

export const getExerciseBySlug = async (slug) => {
  const query = gql`
    query MyQuery($slug: String!) {
      exercise(where: { slug: $slug }) {
        id
        title
        slug
        excerpt
        updatedAt
        createdAt
        fileUrl
        description
        featuredImage
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.exercise;
};
