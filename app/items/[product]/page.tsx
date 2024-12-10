'use client'
import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useCart } from '../../context/CartContext'

// Product type definition
type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

// Mock product data (same as in all-products page)
const products: Product[] = [
  {
    id: 1,
    name: "The Dandy Chair",
    description: "Sleek and minimalist chair with a smooth beech texture",
    price: 125,
    image: "/assets/842fec031ef0c247df24214e05b47e70.jpg"
  },
  {
    id: 2,
    name: "Graystone Vase",
    description: "A timeless ceramic vase with a tri-color grey glaze",
    price: 399,
    image: "/assets/fe1e8e060432bf77cee26297ca43e0e6.jpg"
  },
  {
    id: 3,
    name: "Modern Armchair",
    description: "Elegant design with premium leather upholstery",
    price: 599,
    image: "/assets/23bc7512aabb96d158dbac6d898734fb.jpg"
  },
  {
    id: 4,
    name: "Wooden Coffee Table",
    description: "Minimalist design with rich walnut finish",
    price: 349,
    image: "/assets/65d5ace2fbbe83a1a93107e30948dc52.jpg"
  },
  {
    id: 5,
    name: "Minimalist Lamp",
    description: "Sleek design with adjustable light intensity",
    price: 199,
    image: "/assets/ffbabae5de21ee1b8c8ca6e83dd10f51.jpg"
  },
  {
    id: 6,
    name: "Elegant Bookshelf",
    description: "Spacious shelving with clean, modern lines",
    price: 449,
    image: "/assets/tabledisplay.jpg"
  }
];

export default function ProductPage({ params }: { params: Promise<{ product: string }> }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  const unwrappedParams = React.use(params);
  const product = products.find(p => p.name.replace(/\s+/g, '') === unwrappedParams.product);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="md:w-1/2">
          <div className="relative h-[500px] overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="md:w-1/2">
          <h1 className="font-montserrat text-3xl md:text-4xl text-[#2A254B] mb-4">
            {product.name}
          </h1>
          <p className="font-montserrat text-2xl text-[#2A254B] mb-6">
            £{product.price}
          </p>
          <p className="font-montserrat text-base text-gray-600 mb-8">
            {product.description}
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-4 mb-8">
            <div className="flex items-center border border-[#2A254B]">
              <button 
                className="px-4 py-2 text-[#2A254B] hover:bg-gray-100"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="px-4 text-[#2A254B]">{quantity}</span>
              <button 
                className="px-4 py-2 text-[#2A254B] hover:bg-gray-100"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <button 
              onClick={handleAddToCart}
              className="font-montserrat px-8 py-2 bg-[#2A254B] text-white hover:bg-opacity-90 transition-colors"
            >
              Add to Cart
            </button>
          </div>

          {/* Additional Information */}
          <div className="space-y-6">
            <div>
              <h2 className="font-montserrat text-lg text-[#2A254B] mb-2">Dimensions</h2>
              <p className="font-montserrat text-gray-600">Height: 110cm</p>
              <p className="font-montserrat text-gray-600">Width: 75cm</p>
              <p className="font-montserrat text-gray-600">Depth: 50cm</p>
            </div>
            <div>
              <h2 className="font-montserrat text-lg text-[#2A254B] mb-2">Materials</h2>
              <p className="font-montserrat text-gray-600">Premium quality materials</p>
              <p className="font-montserrat text-gray-600">Handcrafted with care</p>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Products */}
      <div className="mt-12">
        <Link href="/all-products" className="font-montserrat text-[#2A254B] hover:underline">
          ← Back to All Products
        </Link>
      </div>
    </div>
  );
}
