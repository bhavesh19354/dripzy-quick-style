
import { ShopifyProduct, ShopifyVariantDetails } from '@/types/product';

export const SHOPIFY_STOREFRONT_ACCESS_TOKEN = '50b756b36c591cc2d86ea31b1eceace5';
export const SHOPIFY_API_URL = 'https://dripzyy.com/api/2024-04/graphql.json';

const getProductByIdQuery = `
  query GetProductById($id: ID!) {
    product(id: $id) {
      id
      title
      descriptionHtml
      vendor
      options {
        id
        name
        values
      }
      images(first: 10) {
        edges {
          node {
            url
            altText
          }
        }
      }
      variants(first: 10) {
        edges {
          node {
            id
            title
            price {
              amount
              currencyCode
            }
            image {
              url
              altText
            }
            selectedOptions {
              name
              value
            }
          }
        }
      }
    }
  }
`;

const getNodesQuery = `
  query getNodes($ids: [ID!]!) {
    nodes(ids: $ids) {
      ... on ProductVariant {
        id
        title
        price {
          amount
          currencyCode
        }
        image {
          url
          altText
        }
        product {
          id
          title
          vendor
        }
      }
    }
  }
`;

export const fetchProductFromShopify = async (productId: string): Promise<ShopifyProduct> => {
  const fullProductId = `gid://shopify/Product/${productId}`;
  const response = await fetch(SHOPIFY_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    },
    body: JSON.stringify({
      query: getProductByIdQuery,
      variables: { id: fullProductId },
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error("Shopify API Error:", errorBody);
    throw new Error('Failed to fetch product from Shopify.');
  }

  const json = await response.json();
  if (json.data?.product) {
    return json.data.product;
  }

  console.error("Unexpected Shopify API response structure:", json);
  throw new Error("Unexpected response structure from Shopify.");
};


export const fetchProductVariantsByIds = async (variantIds: string[]): Promise<ShopifyVariantDetails[]> => {
    const response = await fetch(SHOPIFY_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_ACCESS_TOKEN,
        },
        body: JSON.stringify({
            query: getNodesQuery,
            variables: { ids: variantIds },
        }),
    });

    if (!response.ok) {
        throw new Error('Failed to fetch product variants from Shopify.');
    }

    const json = await response.json();
    if (json.data?.nodes) {
        return json.data.nodes.filter(Boolean); // Filter out nulls for non-existent IDs
    }
    
    throw new Error("Unexpected response structure from Shopify for variants.");
};
