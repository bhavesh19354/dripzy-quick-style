
import { CartServicePromiseClient } from '../../protogen/api/common/proto/cartservice/cart_service_grpc_web_pb';

// The gRPC-web host address you provided.
const GRPC_WEB_HOST = 'https://grpcweb-851631422269.asia-south2.run.app';

// We create and export a single client instance to be used throughout the app.
export const cartServiceClient = new CartServicePromiseClient(GRPC_WEB_HOST);
