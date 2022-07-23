export const articleQuery = () => `{
    articles(first: 8) {
      edges {
        node {
          id
          title
        }
      }
    }
  }`,
  STOREFRONT_ACCESS_TOKEN = "5551cf9a06d14a0dd0bfb3a4a4494ca6",
  GRAPHQL_URL = "https://braingame-com.myshopify.com/api/2022-07/graphql.json",
  GRAPHQL_BODY = () => {
    return {
      async: true,
      crossDomain: true,
      method: "POST",
      headers: {
        "X-Shopify-Storefront-Access-Token": STOREFRONT_ACCESS_TOKEN,
        "Content-Type": "application/graphql",
      },
      body: articleQuery(),
    };
  };
