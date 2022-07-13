import { GraphQLClient, gql } from "graphql-request";

const graphqlAPI = process.env.HYGRAPH_CONTENT_API;

export default async function asynchandler(req, res) {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.HYGRAPH_CONTENT_API_KEY}`,
    },
  });

  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $description: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          description: $description
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `;

  const result = await graphQLClient.request(query, {
    name: req.body.name,
    email: req.body.email,
    description: req.body.description,
    slug: req.body.slug,
  });

  return res.status(200).send(result);
}
