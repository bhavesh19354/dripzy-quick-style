
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import FilterBar from '../components/FilterBar';
import ProductGrid from '../components/ProductGrid';
import { ApiProduct, Product } from '../types/product';

const ProductListPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace this mock function with actual API call
    const fetchProducts = async () => {
      setIsLoading(true);
      console.log('Fetching products from API...');
      
      // Simulate API delay
      setTimeout(() => {
        // TODO: Replace this mock data with: const response = await fetch('/api/products');
        const mockApiResponse = {
          products: [
            {
              primary_key: { product_id: 5 },
              brand_id: 2,
              brand_name: "H&M",
              min_discounted_price_product_variant: {
                product_variant: {
                  product_variant_id: 18,
                  name: "Patterned shirt",
                  description: "Shirt in a patterned weave with piping in a contrasting colour. Collar, buttons down the front, gently dropped shoulders and long, wide sleeves with a slit and button at the cuffs. Straight-cut hem with a slit at each side.",
                  image_url: "https://image.hm.com/assets/hm/7e/46/7e466e936a67477021001e0881d5562726c55dcd.jpg",
                  color_id: 4,
                  color_name: "Light pink/Patterned",
                  size_id: 18,
                  size_name: "M",
                  mrp_micros: 2299000000
                },
                store_with_best_price: {
                  primary_key: { store_id: 9 },
                  image_urls: "https://www.dlfmallofindia.com/Assets/stores/h-n-m.png",
                  name: "H&M DLF Mall of India",
                  address: {
                    full_address: "DLF Mall of India, Sector 18, Noida",
                    latitude: 28.566450119018555,
                    longitude: 77.3218002319336,
                    postal_code: "201301",
                    city: "Noida"
                  },
                  distance_in_meters: 41939,
                  time_in_millis: 3934000
                },
                discounted_price_micros: 2299000000
              }
            },
            {
              primary_key: { product_id: 8 },
              brand_id: 2,
              brand_name: "H&M",
              min_discounted_price_product_variant: {
                product_variant: {
                  product_variant_id: 1485,
                  name: "Ribbed T-shirt",
                  description: "Short, fitted T-shirt in ribbed, printed cotton jersey with flatlock seams for added comfort.",
                  image_url: "https://image.hm.com/assets/hm/57/da/57dadd51976ff955b9e41d7f54b67b3126c93afb.jpg",
                  color_id: 297,
                  color_name: "White/Cannes",
                  size_id: 43,
                  size_name: "L",
                  mrp_micros: 599000000
                },
                store_with_best_price: {
                  primary_key: { store_id: 3 },
                  image_urls: "https://alfred.com.au/wp-content/uploads/2021/07/HMConsciousCollectionLaunch_101019-YMund-346_LR-copy.jpg",
                  name: "H&M HUDA Metro station",
                  address: {
                    full_address: "HUDA Metro station Sector 29, Gurugram",
                    latitude: 28.459341049194336,
                    longitude: 77.0727767944336,
                    postal_code: "120007",
                    city: "Gurgaon"
                  },
                  distance_in_meters: 4682,
                  time_in_millis: 996000
                },
                discounted_price_micros: 599000000
              }
            },
            {
              primary_key: { product_id: 12 },
              brand_id: 2,
              brand_name: "H&M",
              min_discounted_price_product_variant: {
                product_variant: {
                  product_variant_id: 59,
                  name: "Bow-shaped hair claw",
                  description: "Metal hair claw in the shape of a double-sided bow.",
                  image_url: "https://image.hm.com/assets/hm/9b/be/9bbe1c86637a34c5b65a240b787296ad476ceda4.jpg",
                  color_id: 11,
                  color_name: "Gold-coloured",
                  size_id: 59,
                  size_name: "NOSIZE",
                  mrp_micros: 599000000
                },
                store_with_best_price: {
                  primary_key: { store_id: 8 },
                  image_urls: "https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000,format=auto/m/2b4d/aadb/ced2/d0f6/7681/b92b/eee3/106b/3465/0a10/0a10.jpg",
                  name: "H&M The Connaught High Street",
                  address: {
                    full_address: "The Connaught High Street Inner Circle, B Block, Connaught Place",
                    latitude: 28.634170532226562,
                    longitude: 77.21920013427734,
                    postal_code: "110001",
                    city: "New Delhi"
                  },
                  distance_in_meters: 33486,
                  time_in_millis: 3281000
                },
                discounted_price_micros: 599000000
              }
            },
            {
              primary_key: { product_id: 15 },
              brand_id: 2,
              brand_name: "H&M",
              min_discounted_price_product_variant: {
                product_variant: {
                  product_variant_id: 15786,
                  name: "Cigarette trousers",
                  description: "Ankle-length cigarette trousers in a stretch weave. Regular waist with concealed elastication, zip fly with a concealed hook-and-eye fastening, side pockets, fake back pockets and tapered legs.",
                  image_url: "https://image.hm.com/assets/hm/8e/9d/8e9d14f9372fd6317fb6f71e0045452588de3fe8.jpg",
                  color_id: 3139,
                  color_name: "Light greige",
                  size_id: 78,
                  size_name: "14",
                  mrp_micros: 1299000000
                },
                store_with_best_price: {
                  primary_key: { store_id: 4 },
                  image_urls: "https://lh3.googleusercontent.com/JKPieJTXhsjXTR2Bf7tIN0gfCY0uq4T9fAd2QnmrScTbpqcXSLYBAlS73loQDRF52FZ8kqlhfm-BdmYDPgeWH0R9j_ha=w1200-rw",
                  name: "H&M Ambience Mall",
                  address: {
                    full_address: "G-024, G-025, F-112, F-113, F-114, S-203, S-204, Ambience Island, NH-8, Ambience Island",
                    latitude: 28.504837036132812,
                    longitude: 77.09708404541016,
                    postal_code: "122002",
                    city: "Gurgaon"
                  },
                  distance_in_meters: 12485,
                  time_in_millis: 1265000
                },
                discounted_price_micros: 1299000000
              }
            },
            {
              primary_key: { product_id: 20 },
              brand_id: 2,
              brand_name: "H&M",
              min_discounted_price_product_variant: {
                product_variant: {
                  product_variant_id: 602,
                  name: "Printed T-shirt",
                  description: "Loose-fit T-shirt in cotton jersey with a crew neck and a print motif on the front.",
                  image_url: "https://image.hm.com/assets/hm/78/f2/78f2b47d6a377cba106f1331ef5df1a3ae7e869e.jpg",
                  color_id: 121,
                  color_name: "White/Lemon",
                  size_id: 96,
                  size_name: "M",
                  mrp_micros: 699000000
                },
                store_with_best_price: {
                  primary_key: { store_id: 4 },
                  image_urls: "https://lh3.googleusercontent.com/JKPieJTXhsjXTR2Bf7tIN0gfCY0uq4T9fAd2QnmrScTbpqcXSLYBAlS73loQDRF52FZ8kqlhfm-BdmYDPgeWH0R9j_ha=w1200-rw",
                  name: "H&M Ambience Mall",
                  address: {
                    full_address: "G-024, G-025, F-112, F-113, F-114, S-203, S-204, Ambience Island, NH-8, Ambience Island",
                    latitude: 28.504837036132812,
                    longitude: 77.09708404541016,
                    postal_code: "122002",
                    city: "Gurgaon"
                  },
                  distance_in_meters: 12485,
                  time_in_millis: 1265000
                },
                discounted_price_micros: 699000000
              }
            },
            {
              primary_key: { product_id: 28 },
              brand_id: 2,
              brand_name: "H&M",
              min_discounted_price_product_variant: {
                product_variant: {
                  product_variant_id: 131,
                  name: "Peplum vest top",
                  description: "Vest top in a soft cotton weave with picot trims around the neckline and armholes. Features a scoop neckline with gathers at the front and back. Buttons down the front and a waist panel with pintucks and lace insets at the front and smocking at the back. Flared peplum.",
                  image_url: "https://image.hm.com/assets/hm/75/ac/75ac70f54a9349aaa3778774da130121d5e2a904.jpg",
                  color_id: 27,
                  color_name: "Black",
                  size_id: 131,
                  size_name: "XL",
                  mrp_micros: 1299000000
                },
                store_with_best_price: {
                  primary_key: { store_id: 7 },
                  image_urls: "https://lh3.googleusercontent.com/JKPieJTXhsjXTR2Bf7tIN0gfCY0uq4T9fAd2QnmrScTbpqcXSLYBAlS73loQDRF52FZ8kqlhfm-BdmYDPgeWH0R9j_ha=w1200-rw",
                  name: "H&M H&M, Select Citywalk Mall",
                  address: {
                    full_address: "District Centre, Saket",
                    latitude: 28.52808380126953,
                    longitude: 77.2182388305664,
                    postal_code: "110017",
                    city: "New Delhi"
                  },
                  distance_in_meters: 27587,
                  time_in_millis: 3159000
                },
                discounted_price_micros: 1299000000
              }
            }
          ]
        };

        // Transform API data to UI format
        const transformedProducts: Product[] = mockApiResponse.products.map((apiProduct: ApiProduct) => ({
          id: apiProduct.primary_key.product_id,
          images: [apiProduct.min_discounted_price_product_variant.product_variant.image_url],
          colorVariants: [{
            color: apiProduct.min_discounted_price_product_variant.product_variant.color_name,
            image: apiProduct.min_discounted_price_product_variant.product_variant.image_url
          }],
          brandName: apiProduct.brand_name,
          productName: apiProduct.min_discounted_price_product_variant.product_variant.name,
          mrp: apiProduct.min_discounted_price_product_variant.product_variant.mrp_micros / 1000000,
          discountedPrice: apiProduct.min_discounted_price_product_variant.discounted_price_micros / 1000000
        }));

        setProducts(transformedProducts);
        setIsLoading(false);
        console.log('Products loaded successfully:', transformedProducts);
      }, 800);
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <NavigationBar />
      <FilterBar />
      <ProductGrid products={products} isLoading={isLoading} />
    </div>
  );
};

export default ProductListPage;
