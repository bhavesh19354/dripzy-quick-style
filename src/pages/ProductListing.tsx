
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import FilterBar from '../components/FilterBar';
import ProductGrid from '../components/ProductGrid';
import { Product } from '../types/product';
import { ShopifyProductsResponse } from '../types/shopify';
import { GET_PRODUCTS } from '../graphql/queries';
import { transformShopifyProduct } from '../utils/shopify-transformer';
import { PAGINATION_CONFIG } from '../config/pagination';
import { Button } from '../components/ui/button';

const ProductListPage = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [hasMore, setHasMore] = useState(true);
  
  const { data, loading, error, fetchMore } = useQuery<ShopifyProductsResponse>(GET_PRODUCTS, {
    variables: {
      first: PAGINATION_CONFIG.PRODUCTS_PER_PAGE
    },
    onCompleted: (data) => {
      console.log('Shopify products loaded:', data);
      const transformedProducts = data.products.edges.map(edge => 
        transformShopifyProduct(edge.node)
      );
      setAllProducts(transformedProducts);
      setHasMore(data.products.pageInfo.hasNextPage);
    },
    onError: (error) => {
      console.error('Error fetching products:', error);
    }
  });

  const loadMore = async () => {
    if (!data?.products.pageInfo.hasNextPage) return;

    try {
      const { data: newData } = await fetchMore({
        variables: {
          first: PAGINATION_CONFIG.PRODUCTS_PER_PAGE,
          after: data.products.pageInfo.endCursor
        }
      });

      const newTransformedProducts = newData.products.edges.map(edge => 
        transformShopifyProduct(edge.node)
      );
      
      setAllProducts(prev => [...prev, ...newTransformedProducts]);
      setHasMore(newData.products.pageInfo.hasNextPage);
      
      console.log('Loaded more products:', newTransformedProducts);
    } catch (error) {
      console.error('Error loading more products:', error);
    }
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <NavigationBar />
        <FilterBar />
        <div className="px-4 py-6 text-center">
          <p className="text-red-600">Error loading products: {error.message}</p>
          <p className="text-sm text-gray-500 mt-2">
            Make sure to replace the shop domain in apollo-client.ts with your actual Shopify store URL
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <NavigationBar />
      <FilterBar />
      <ProductGrid products={allProducts} isLoading={loading} />
      
      {!loading && hasMore && allProducts.length > 0 && (
        <div className="px-4 py-6 text-center">
          <Button 
            onClick={loadMore}
            className="bg-black text-white hover:bg-gray-800"
          >
            Load More Products
          </Button>
        </div>
      )}
      
      {!loading && !hasMore && allProducts.length > 0 && (
        <div className="px-4 py-6 text-center">
          <p className="text-gray-500">No more products to load</p>
        </div>
      )}
    </div>
  );
};

export default ProductListPage;
