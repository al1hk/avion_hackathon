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

async function getProduct(slug: string): Promise<Product | null> {
  try {
    const product = await client.fetch(
      groq`*[_type == "product" && slug.current == $slug][0]{
        _id,
        _type,
        name,
        "image": image.asset->url,
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
    return product;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

export async function generateStaticParams(): Promise<
  { params: { slug: string } }[]
> {
  const products = await client.fetch(
    groq`*[_type == "product"]{
      "slug": slug.current
    }`
  );

  return products.map((product: { slug: string }) => ({
    params: { slug: product.slug },
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = await getProduct(params.slug);

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

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProduct(params.slug);

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}
