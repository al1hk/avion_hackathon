import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { groq } from 'next-sanity';
import client from '@/sanity/lib/client';
import ProductDetails from '@/app/ProductDetails';

interface Product {
  _id: number;
  _type: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  description: string;
  sizes: string[];
  slug: string;
  category: string;
  stock_quantity: number;
  rating: number;
  reviews: number;
  tags: string[];
}

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

async function getProduct(slug: string): Promise<Product | null> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      _type,
      name,
      image,
      price,
      originalPrice,
      description,
      sizes,
      "slug": slug.current,
      category,
      stock_quantity,
      rating,
      reviews,
      tags
    }`,
    { slug }
  );
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}