
import { CartServicePromiseClient } from "../../protogen/api/common/proto/cartservice/cart_service_grpc_web_pb";
import { GetCartItemsRequest, MutateCartRequest, ItemWithQuantity } from "../../protogen/api/common/proto/cartservice/cart_service_pb";

// Dummy gRPC endpoint (replace with your backend URL as needed)
const CART_GRPC_URL = "https://your-cart-backend.example.com";

const DUMMY_AUTH_TOKEN = "dummy-auth-token"; // Replace with real token when available

export const cartServiceClient = new CartServicePromiseClient(CART_GRPC_URL, null, null);

export async function fetchCartItems() {
  const metadata = { authorization: DUMMY_AUTH_TOKEN };
  const req = new GetCartItemsRequest();
  return await cartServiceClient.getCartItems(req, metadata);
}

/**
 * Update item quantity (send quantity=0 to remove)
 */
export async function updateCartItemQuantity(productVariantId: number, quantity: number) {
  const metadata = { authorization: DUMMY_AUTH_TOKEN };
  const req = new MutateCartRequest();
  const item = new ItemWithQuantity();
  item.setProductVariantId(productVariantId);
  item.setQuantity(quantity);
  req.setItem(item);
  return await cartServiceClient.mutateCart(req, metadata);
}
