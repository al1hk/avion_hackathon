import Image from 'next/image'
import Link from 'next/link'

const products = [
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
]

export default function AllProductsPage() {
  return (
    <>
      
      {/* Hero Section */}
  <div>
    <h1 className="text-3xl md:text-5xl font-playfair text-black mb-4 flex justify-center mt-12">All Products</h1>
  </div>

      {/* Product Filtering and Grid */}
      <div className="container mx-auto px-4 py-12 md:py-24">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center space-x-2 md:space-x-8 mb-8 md:mb-12">
          <button 
            className="text-center font-montserrat text-sm md:text-lg text-[#2A254B] hover:text-opacity-80 transition-colors mb-2 md:mb-0"
          >
            All
          </button>
          <button 
            className="text-center font-montserrat text-sm md:text-lg text-[#2A254B] hover:text-opacity-80 transition-colors mb-2 md:mb-0"
          >
            Furniture
          </button>
          <button 
            className="text-center font-montserrat text-sm md:text-lg text-[#2A254B] hover:text-opacity-80 transition-colors mb-2 md:mb-0"
          >
            Homeware
          </button>
          <button 
            className="text-center font-montserrat text-sm md:text-lg text-[#2A254B] hover:text-opacity-80 transition-colors mb-2 md:mb-0"
          >
            Ceramics
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {products.map((product) => (
            <Link href={`/items/${product.name.replace(/\s+/g, '')}`} key={product.id} className="group cursor-pointer">
              <div className="relative h-[300px] md:h-[500px] overflow-hidden">
                <Image
                  src={product.image}
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
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-white text-[#2A254B] py-12 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-2xl md:text-4xl mb-6">
            Stay Connected
          </h2>
          <p className="font-montserrat text-base md:text-lg mb-8">
            Subscribe to our newsletter for the latest updates, design inspiration, and exclusive offers.
          </p>
          <div className="max-w-md mx-auto flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="font-montserrat text-base md:text-lg px-4 md:px-6 py-3 md:py-4 w-full border border-[#2A254B]/20 bg-white text-[#2A254B] focus:outline-none focus:ring-2 focus:ring-[#2A254B]"
            />
            <button className="font-montserrat text-xs md:text-sm px-6 md:px-10 py-3 md:py-4 bg-[#2A254B] text-white uppercase tracking-wider hover:bg-opacity-90 transition-colors">
              Subscribe
            </button>
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
            <p className="font-montserrat text-sm text-gray-400">
              2024 Avion LTD. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
