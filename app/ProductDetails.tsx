"use client";

import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { Star, Truck, ArrowRight } from 'lucide-react';
import { useCart } from '@/app/context/CartContext';

interface Product {
  _id: number;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  description: string;
  sizes: string[];
  stock_quantity: number;
  rating: number;
  reviews: number;
  tags: string[];
}

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product._id,
      name: product.name,
      price: product.price,
      image: urlFor(product.image).width(400).height(400).url(),
      description: product.description,
    });
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        {/* Product Image */}
        <div className="aspect-square relative overflow-hidden rounded-xl shadow-xl bg-gray-100">
          {product.image && (
            <Image
              src={urlFor(product.image).width(800).height(800).url()}
              alt={product.name}
              fill
              className="object-cover"
            />
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-semibold text-gray-900">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i < Math.floor(product.rating) ? 'text-yellow-500' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-base text-gray-500">({product.reviews} reviews)</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-6">
            <span className="text-3xl font-bold text-indigo-600">&pound;{product.price}</span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-lg text-gray-500 line-through">&pound;{product.originalPrice}</span>
            )}
          </div>

          {/* Description */}
          <p className="text-lg text-gray-700 leading-relaxed">{product.description}</p>

          {/* Sizes */}
          {product.sizes && product.sizes.length > 0 && (
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-4">Select Size</h3>
              <div className="flex flex-wrap gap-4">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className="px-6 py-3 text-lg border-2 border-gray-300 rounded-md hover:bg-indigo-100 transition"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="px-8 py-4 bg-indigo-600 text-white rounded-xl text-lg font-medium hover:bg-indigo-700 transition"
          >
            Add to Cart
          </button>

          {/* Additional Info */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 text-lg text-gray-700">
              <Truck className="w-6 h-6 text-green-500" />
              <span>Free shipping on orders over &pound;50</span>
            </div>
            <div className="flex items-center gap-3 text-lg text-gray-700">
              <ArrowRight className="w-6 h-6 text-green-500" />
              <span>30-day hassle-free return policy</span>
            </div>
          </div>

          {/* Tags */}
          {product.tags && product.tags.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-6">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
