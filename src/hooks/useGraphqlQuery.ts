import request, { gql } from 'graphql-request';
import { useQuery } from 'react-query';

// AUTH TOKEN
const requestHeaders = {
  authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
};

// Top 10 Javascript repos query
const query = gql`
        {
          search(
            query: "language:Javascript stars:>10000"
            type: REPOSITORY
            first: 10
          ) {
            repositoryCount
            edges {
              node {
                ... on Repository {
                  id
                  name
                  stargazerCount
                  url
                  forkCount
                }
              }
            }
          }
        }
      `;

// Query for search repositories
const searchQuery = (repositoryName: string) => gql`
    {
      search(
        query: "name: ${repositoryName}"
        type: REPOSITORY
        first: 10
      ) {
        repositoryCount
        edges {
          node {
            ... on Repository {
              id
              name
              createdAt
              description
              isFork
            }
          }
        }
      }
    }
  `;

// QUERY HOOK
export default function useGrapqhqlQuery(
  useSearch: string = '',
) {
  const endpoint = process.env.REACT_APP_ENDPOINT as string;
  return useQuery('reposList', async () => {
    const { search: data } = await request(
      endpoint,
      useSearch ? searchQuery(useSearch) : query,
      { retry: false },
      requestHeaders,
    );
    return data;
  });
}
