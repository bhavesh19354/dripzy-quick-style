
import { CartServiceClient } from "../../protogen/api/common/proto/cartservice/Cart_serviceServiceClientPb";
// Import JS proto module as namespace, not named ES import
import * as cartPb from "../../protogen/api/common/proto/cartservice/cart_service_pb";
import { auth } from "../firebase";

// The full endpoint for gRPC-Web:
const CART_GRPC_URL = "https://grpcweb-851631422269.asia-south2.run.app";
export const cartServiceClient = new CartServiceClient(CART_GRPC_URL, null, null);

/**
 * Helper to get current Firebase user ID token, or throw.
 */
async function getFirebaseAuthToken(): Promise<string> {
  const user = auth.currentUser;
  if (!user) throw new Error("User not authenticated");
  return await user.getIdToken(/* forceRefresh */ true);
}

/**
 * Fetch all items in the cart, sending the Firebase auth token.
 */
export async function getCartItems(): Promise<any> {
  const token = await getFirebaseAuthToken();
  const request = new cartPb.GetCartItemsRequest();
  const response = await cartServiceClient.getCartItems(request, {
    authorization: token,
  });
  // .toObject() is not available on plain JS output, so just return the response (adapt as needed)
  return response.toObject ? response.toObject() : response;
}

/**
 * Mutate (add/update/remove) a cart item, sending the Firebase auth token.
 */
export async function mutateCartItem(
  productVariantId: number,
  quantity: number
): Promise<any> {
  const token = await getFirebaseAuthToken();
  const request = new cartPb.MutateCartRequest();
  const item = new cartPb.ItemWithQuantity();
  item.setProductVariantId(productVariantId);
  item.setQuantity(quantity);
  request.setItem(item);
  const response = await cartServiceClient.mutateCart(request, {
    authorization: token,
  });
  return response.toObject ? response.toObject() : response;
}
