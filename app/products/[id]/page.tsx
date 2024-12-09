import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { NextPage } from 'next';

// Product type definition
type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  details: string;
}

// Mock product data
const products: Product[] = [
  {
    id: 1,
    name: "The Dandy Chair",
    description: "Sleek and minimalist chair with a smooth beech texture",
    price: 125,
    image: "/assets/842fec031ef0c247df24214e05b47e70.jpg",
    details: "Crafted with precision, the Dandy Chair embodies modern minimalism. Its smooth beech texture and clean lines make it a perfect addition to any contemporary living space. The chair offers both comfort and style, with a carefully designed structure that supports ergonomic posture."
  },
  {
    id: 2,
    name: "Graystone Vase",
    description: "A timeless ceramic vase with a tri-color grey glaze",
    price: 399,
    image: "/assets/fe1e8e060432bf77cee26297ca43e0e6.jpg",
    details: "The Graystone Vase is a testament to refined ceramic craftsmanship. Its unique tri-color grey glaze creates a mesmerizing depth and texture, making it a standout piece in any interior design. Perfect for displaying fresh flowers or as a standalone art piece."
  },
  {
    id: 3,
    name: "Modern Armchair",
    description: "Elegant design with premium leather upholstery",
    price: 599,
    image: "/assets/23bc7512aabb96d158dbac6d898734fb.jpg",
    details: "Experience luxury and comfort with our Modern Armchair. Featuring premium leather upholstery and a sleek, contemporary design, this chair is both a functional seating solution and a statement piece. Its ergonomic shape provides exceptional support and style."
  },
  {
    id: 4,
    name: "Wooden Coffee Table",
    description: "Minimalist design with rich walnut finish",
    price: 349,
    image: "/assets/65d5ace2fbbe83a1a93107e30948dc52.jpg",
    details: "The Wooden Coffee Table brings natural elegance to your living space. Crafted with a rich walnut finish and minimalist design, it serves as the perfect centerpiece for modern interiors. Its clean lines and high-quality wood ensure both durability and aesthetic appeal."
  },
  {
    id: 5,
    name: "Minimalist Lamp",
    description: "Sleek design with adjustable light intensity",
    price: 199,
    image: "/assets/ffbabae5de21ee1b8c8ca6e83dd10f51.jpg",
    details: "Illuminate your space with our Minimalist Lamp. Featuring a sleek, contemporary design and adjustable light intensity, this lamp provides both functionality and style. Its clean lines and subtle presence make it a versatile lighting solution for any room."
  },
  {
    id: 6,
    name: "Elegant Bookshelf",
    description: "Spacious shelving with clean, modern lines",
    price: 449,
    image: "/assets/tabledisplay.jpg",
    details: "The Elegant Bookshelf combines storage and design seamlessly. With spacious shelving and clean, modern lines, it's perfect for displaying books, decorative items, and personal mementos. Its minimalist aesthetic complements various interior design styles."
  }
]

type Props = {
  params: { id: string }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const productId = parseInt(params.id);
  const product = products.find(p => p.id === productId);
  return {
    title: product ? product.name : 'Product Not Found'
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export const Page: NextPage<Props> = async ({ params }) => {
  const productId = parseInt(params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Product Image */}
          <div className="relative aspect-square">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          
          {/* Product Details */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl mb-4">${product.price}</p>
            <p className="text-gray-600 mb-8">{product.description}</p>
            <div className="space-y-4">
              <button className="w-full bg-black text-white py-3 px-6 rounded-lg">
                Add to Cart
              </button>
              <Link href="/cart" className="block w-full text-center border border-black py-3 px-6 rounded-lg">
                View Cart
              </Link>
            </div>
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-4">Product Details</h2>
              <p className="text-gray-600">{product.details}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#2A254B] text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Company Info Column */}
            <div className="md:col-span-2">
              <h4 className="font-montserrat text-lg md:text-xl font-light mb-4 md:mb-6">AVION</h4>
              <p className="font-montserrat text-xs md:text-sm text-gray-300">
                We are a modern furniture store focused on delivering unique, designer pieces at affordable prices.
              </p>
            </div>

            {/* Links Column */}
            <div>
              <h4 className="font-montserrat text-lg md:text-lg font-light mb-4 md:mb-6">Links</h4>
              <ul className="space-y-3">
                <li><Link href="/" className="font-montserrat text-xs md:text-sm hover:text-gray-300 transition-colors">Home</Link></li>
                <li><Link href="/about" className="font-montserrat text-xs md:text-sm hover:text-gray-300 transition-colors">About</Link></li>
                <li><Link href="/all-products" className="font-montserrat text-xs md:text-sm hover:text-gray-300 transition-colors">All Products</Link></li>
              </ul>
            </div>

            {/* Help Column */}
            <div>
              <h4 className="font-montserrat text-lg md:text-lg font-light mb-4 md:mb-6">Help</h4>
              <ul className="space-y-3">
                <li><Link href="#" className="font-montserrat text-xs md:text-sm hover:text-gray-300 transition-colors">Shipping</Link></li>
                <li><Link href="#" className="font-montserrat text-xs md:text-sm hover:text-gray-300 transition-colors">Returns</Link></li>
                <li><Link href="#" className="font-montserrat text-xs md:text-sm hover:text-gray-300 transition-colors">FAQ</Link></li>
                <li><Link href="#" className="font-montserrat text-xs md:text-sm hover:text-gray-300 transition-colors">Support</Link></li>
              </ul>
            </div>

            {/* Email Signup Column */}
            <div>
              <h4 className="font-montserrat text-lg md:text-lg font-light mb-4 md:mb-6">Join Our Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="font-montserrat text-xs md:text-sm px-4 md:px-6 py-2 md:py-3 w-full bg-white text-black border border-white/20 focus:outline-none focus:ring-1 focus:ring-white/50"
                />
                <button className="bg-white text-[#2A254B] px-4 md:px-6 py-2 md:py-3 ml-2 font-montserrat text-xs md:text-sm hover:bg-gray-100 transition-colors">
                  Submit
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="font-montserrat text-xs text-gray-300">
              2024 Avion LTD. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
