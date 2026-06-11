const WP_GRAPHQL_URL = process.env.NEXT_PUBLIC_WP_GRAPHQL_URL || 'https://wp.hostmann-media.de/graphql';

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  } | null;
}

export interface PostsData {
  posts: {
    nodes: Post[];
  };
}

export async function fetchGraphQL<T = unknown>(query: string, variables: Record<string, unknown> = {}): Promise<T | null> {
  try {
    const response = await fetch(WP_GRAPHQL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 60 },
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const json = await response.json();
    if (json.errors) {
      console.error('GraphQL Errors:', json.errors);
    }
    return json.data as T;
  } catch (error) {
    console.error('GraphQL Error:', error);
    return null;
  }
}

export async function getPosts(first = 6): Promise<PostsData | null> {
  const query = `
    query GetPosts($first: Int!) {
      posts(first: $first) {
        nodes {
          id
          title
          slug
          excerpt
          date
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  `;
  return fetchGraphQL<PostsData>(query, { first });
}

export async function getPageBySlug(slug: string) {
  const query = `
    query GetPage($slug: ID!) {
      page(id: $slug, idType: URI) {
        id
        title
        content
        slug
      }
    }
  `;
  return fetchGraphQL(query, { slug });
}
