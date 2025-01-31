"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import client from '@/sanity/lib/client';
import { furniture } from '@/sanity/lib/queries';

interface Product {
  _id: string;
  name: string;
  price: number;
  discountPercentage: number;
  tags: string[];
  imageUrl: string;
  slug: { current: string };
}

export default function AllProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `
        *[_type == "product"]{
          _id,
          name,
          price,
          discountPercentage,
          "imageUrl": image.asset->url,
          slug
        }
      `;
      const result: Product[] = await client.fetch(query);
      setProducts(result);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div>
        <h1 className="text-3xl md:text-5xl font-playfair text-black mb-4 flex justify-center mt-12">
          All Products
        </h1>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {products.map((product) => (
            <Link href={`/product/${product.slug.current}`} key={product._id} className="group cursor-pointer">
              <div className="relative h-[300px] md:h-[500px] overflow-hidden">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-montserrat text-base md:text-lg text-[#2A254B]">
                  {product.name}
                </h3>
                <p className="font-montserrat text-base md:text-lg font-semibold text-[#2A254B]">
                  £{product.price}
                </p>
                <p className="font-montserrat text-sm md:text-md text-gray-600">
                  {product.discountPercentage}% off
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
