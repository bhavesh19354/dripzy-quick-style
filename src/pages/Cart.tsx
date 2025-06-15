
import React, { useMemo } from 'react';
import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';
import { Plus, Minus, Trash2, ShoppingBag, Loader2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Auth from './Auth';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { cartServiceClient } from '../lib/grpc';
import { GetCartItemsRequest, MutateCartRequest, ItemWithQuantity } from '../../protogen/api/common/proto/cartservice/cart_service_pb';
import { fetchProductVariantsByIds } from '../lib/shopify';
import { ShopifyVariantDetails } from '@/types/product';

interface CartItem {
  id: string; // This will be the full variant GID
  name: string;
  price: number;
  image: string;
  brand: string;
  selectedSize?: string;
  quantity: number;
}

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, getAuthToken } = useAuth();
  const queryClient = useQueryClient();

  const { data: cartData, isLoading: isLoadingCartIds } = useQuery({
    queryKey: ['cart'],
    queryFn: async () => {
      const token = await getAuthToken();
      if (!token) throw new Error('Not authenticated');
      
      const request = new GetCartItemsRequest();
      const response = await cartServiceClient.getCartItems(request, { 'Authorization': `Bearer ${token}` });
      return response.getItemsWithQuantityList();
    },
    enabled: isAuthenticated,
  });

  const variantIdsForShopify = useMemo(() => {
    if (!cartData) return [];
    return cartData.map(item => `gid://shopify/ProductVariant/${item.getProductVariantId()}`);
  }, [cartData]);

  const { data: productDetails, isLoading: isLoadingDetails } = useQuery({
    queryKey: ['cartProductDetails', variantIdsForShopify],
    queryFn: () => fetchProductVariantsByIds(variantIdsForShopify),
    enabled: isAuthenticated && variantIdsForShopify.length > 0,
  });

  const mutateCartMutation = useMutation({
    mutationFn: async ({ variantId, quantity }: { variantId: string; quantity: number }) => {
      const token = await getAuthToken();
      if (!token) throw new Error("Not authenticated");

      const item = new ItemWithQuantity();
      const numericVariantId = Number(variantId.split('/').pop() || '0');
      item.setProductVariantId(numericVariantId);
      item.setQuantity(quantity);
      
      const request = new MutateCartRequest();
      request.setItem(item);

      const metadata = { 'Authorization': `Bearer ${token}` };
      return cartServiceClient.mutateCart(request, metadata);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
    onError: (error) => {
      console.error("Failed to update cart:", error);
      // Here you could add a toast notification for the user
    }
  });

  const cartItems: CartItem[] = useMemo(() => {
    if (!cartData || !productDetails) return [];

    return cartData
      .map(cartItem => {
        const variantId = `gid://shopify/ProductVariant/${cartItem.getProductVariantId()}`;
        const details: ShopifyVariantDetails | undefined = productDetails.find(p => p.id === variantId);

        if (!details) return null;

        return {
          id: variantId,
          name: details.product.title,
          price: parseFloat(details.price.amount),
          image: details.image?.url || '/placeholder.svg',
          brand: details.product.vendor,
          selectedSize: details.title.split('/')[0].trim(),
          quantity: cartItem.getQuantity(),
        };
      })
      .filter((item): item is CartItem => item !== null);
  }, [cartData, productDetails]);

  if (!isAuthenticated) {
    return <Auth />;
  }

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(id);
      return;
    }
    mutateCartMutation.mutate({ variantId: id, quantity: newQuantity });
  };

  const handleRemoveItem = (id: string) => {
    mutateCartMutation.mutate({ variantId: id, quantity: 0 });
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = subtotal > 0 ? 99 : 0;
  const total = subtotal + deliveryFee;

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const isLoading = isLoadingCartIds || isLoadingDetails;

  if (isLoading) {
    return (
        <Layout>
            <div className="bg-gray-50 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <Loader2 className="w-12 h-12 text-gray-400 mx-auto mb-4 animate-spin" />
                    <h2 className="text-xl font-bold text-gray-900">Loading your cart...</h2>
                </div>
            </div>
        </Layout>
    );
  }

  if (cartItems.length === 0) {
    return (
      <Layout>
        <div className="bg-gray-50 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Add some items to get started</p>
            <button 
              onClick={() => navigate('/categories')}
              className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="bg-white px-4 py-4 border-b">
          <h1 className="text-xl font-bold text-gray-900">Shopping Cart ({cartItems.length} items)</h1>
        </div>

        <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-500">{item.brand}</p>
                        <p className="text-sm text-gray-500">Size: {item.selectedSize}</p>
                      </div>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-full disabled:opacity-50"
                        disabled={mutateCartMutation.isPending}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-100 rounded-full disabled:opacity-50"
                          disabled={mutateCartMutation.isPending}
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-medium">{item.quantity}</span>
                        <button
                          onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-100 rounded-full disabled:opacity-50"
                          disabled={mutateCartMutation.isPending}
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="font-semibold text-lg">₹{item.price * item.quantity}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg p-6 shadow-sm h-fit">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Fee</span>
                <span className="font-medium">₹{deliveryFee}</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between">
                  <span className="font-bold text-lg">Total</span>
                  <span className="font-bold text-lg">₹{total}</span>
                </div>
              </div>
            </div>

            <button 
              onClick={handleCheckout}
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              Proceed to Checkout
            </button>
            
            <button 
              onClick={() => navigate('/categories')}
              className="w-full mt-3 border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
