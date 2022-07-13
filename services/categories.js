import { gql, request } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_CONTENT_API;

export const getCategories = async () => {
  const query = gql`
    query GetGategories {
      categories {
        name
        slug
        id
        posts {
          title
          createdAt
          slug
          categories {
            name
            slug
            id
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.categories;
};

export const getPostsByCategory = (categories, slug) => {
  return categories.find((category) => category.slug === slug)?.posts || [];
};
