
const SHOPIFY_STOREFRONT_API_URL = 'https://dripzyy.com/api/2024-04/graphql.json';
const SHOPIFY_STOREFRONT_ACCESS_TOKEN = '50b756b36c591cc2d86ea31b1eceace5';

const shopifyFetch = async (query: string, variables: Record<string, any> = {}) => {
  const response = await fetch(SHOPIFY_STOREFRONT_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Shopify API request failed: ${error}`);
  }

  const json = await response.json();
  if (json.errors) {
    throw new Error(`GraphQL Errors: ${json.errors.map((e: any) => e.message).join(', ')}`);
  }
  return json.data;
};

const customerAccessTokenCreateMutation = `
  mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

export const loginWithEmailPassword = async (email: string, password: string) => {
  const data = await shopifyFetch(customerAccessTokenCreateMutation, {
    input: { email, password },
  });
  return data.customerAccessTokenCreate;
};


const customerAccessTokenDeleteMutation = `
mutation customerAccessTokenDelete($customerAccessToken: String!) {
  customerAccessTokenDelete(customerAccessToken: $customerAccessToken) {
    deletedAccessToken
    deletedCustomerAccessTokenId
    userErrors {
      field
      message
    }
  }
}
`;

export const logoutShopify = async (accessToken: string) => {
    const data = await shopifyFetch(customerAccessTokenDeleteMutation, {
        customerAccessToken: accessToken,
    });
    return data.customerAccessTokenDelete;
}
