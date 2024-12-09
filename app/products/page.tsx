import Image from 'next/image'
import Link from 'next/link'

// Product type definition
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

// Mock product data
const products: Product[] = [
  {
    id: 1,
    name: "The Dandy Chair",
    price: 250,
    image: "/assets/bae4257d89397ead63485f276489b3fa.jpg",
    category: "Chairs",
    description: "A sophisticated chair that combines modern design with timeless elegance, perfect for any contemporary living space."
  },
  {
    id: 2,
    name: "Rustic Vase Set",
    price: 155,
    image: "/assets/bae4257d89397ead63485f276489b3fa.jpg",
    category: "Decor",
    description: "Handcrafted ceramic vases with a rustic finish, bringing natural charm to your home decor."
  },
  {
    id: 3,
    name: "The Silky Vase",
    price: 125,
    image: "/assets/842fec031ef0c247df24214e05b47e70.jpg",
    category: "Decor",
    description: "Sleek and minimalist vase with a smooth silky texture, adding a touch of elegance to any room."
  },
  {
    id: 4,
    name: "The Lucy Lamp",
    price: 399,
    image: "/assets/fe1e8e060432bf77cee26297ca43e0e6.jpg",
    category: "Lighting",
    description: "A statement piece that combines artistic design with functional lighting, perfect for creating ambiance."
  },
  {
    id: 6,
    name: "Minimalist Bookshelf",
    price: 299,
    image: "/assets/ffbabae5de21ee1b8c8ca6e83dd10f51.jpg",
    category: "Storage",
    description: "Streamlined bookshelf that offers both storage and a contemporary design statement."
  }
]

export default function ProductsPage() {
  return (
    <>
      <div className="flex">
        {/* Left Side Image */}
        <div className="w-3/5 relative" style={{ height: '100vh' }}>
          <Image 
            src="/assets/46e4914903f11d10ddf03117c8cfe3b6.jpg"
            alt="Product Listing Background"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Side Content */}
        <div className="w-2/5 bg-white p-16">
          <h1 className="font-montserrat text-4xl font-thin text-purple-900 mb-6">
            The Dandy Chair
          </h1>
          
          <p className="font-montserrat text-xl font-light text-purple-900 mb-6">
            £250
          </p>

          <div className="mb-12">
            <h2 className="font-montserrat text-lg font-light text-purple-900 mb-4">
              Description
            </h2>
            <p className="font-montserrat text-base font-light text-purple-900 mb-6 leading-relaxed">
              A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
            </p>

            <ul className="font-montserrat text-base font-light text-purple-900 list-disc pl-5 space-y-2">
              <li>Premium material</li>
              <li>Handmade upholstery</li>
              <li>Quality timeless classic</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="font-montserrat text-lg font-light text-[#2A254B] mb-4">
              Dimensions
            </h2>
            <div className="flex space-x-4 mb-2">
              <h3 className="font-montserrat text-base font-light text-purple-900">Height</h3>
              <h3 className="font-montserrat text-base font-light text-purple-900">Width</h3>
              <h3 className="font-montserrat text-base font-light text-purple-900">Depth</h3>
            </div>  
            <div className="flex space-x-4">
              <p className="font-montserrat text-base font-light text-purple-900">110cm</p>
              <p className="font-montserrat text-base font-light text-purple-900">75cm</p>
              <p className="font-montserrat text-base font-light text-purple-900">50cm</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center border border-purple-900">
              <button className="px-3 py-2 text-purple-900 hover:bg-purple-100">
                -
              </button>
              <span className="px-4 text-purple-900">1</span>
              <button className="px-3 py-2 text-purple-900 hover:bg-purple-100">
                +
              </button>
            </div>
            <Link 
              href="#" 
              className="font-montserrat px-8 py-3 border border-purple-900 text-purple-900 text-sm tracking-wider uppercase hover:bg-purple-100 transition-colors inline-block"
            >
              Add to Cart
            </Link>
          </div>
        </div>
      </div>

      {/* Product Categories */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-5 gap-8">
          <button 
            className="text-center font-montserrat text-lg text-[#2A254B] hover:text-opacity-80 transition-colors"
          >
            All
          </button>
          <button 
            className="text-center font-montserrat text-lg text-[#2A254B] hover:text-opacity-80 transition-colors"
          >
            Furniture
          </button>
          <button 
            className="text-center font-montserrat text-lg text-[#2A254B] hover:text-opacity-80 transition-colors"
          >
            Tables
          </button>
          <button 
            className="text-center font-montserrat text-lg text-[#2A254B] hover:text-opacity-80 transition-colors"
          >
            Chairs
          </button>
          <button 
            className="text-center font-montserrat text-lg text-[#2A254B] hover:text-opacity-80 transition-colors"
          >
            Plant Pots
          </button>
        </div>
      </div>

      {/* You Might Like This Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="font-montserrat text-3xl font-light text-purple-900 text-center mb-12">
          You Might Also Like
        </h2>
        
        <div className="grid grid-cols-4 gap-8">
          {products.filter(product => product.id !== 1).map((product) => (
            <div key={product.id} className="group">
              <div className="relative h-[500px] overflow-hidden">
                <Image 
                  src={product.image} 
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-montserrat text-lg font-light text-purple-900">
                  {product.name}
                </h3>
                <p className="font-montserrat text-base text-purple-900">
                  £{product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What Makes Our Brand Different Section */}
      <div className="container mx-auto px-4 py-24">
        <h2 className="font-montserrat text-2xl text-center font-light tracking-wide uppercase text-black mb-16">
          What makes our brand different
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="text-center space-y-4">
            <div className="mb-6">
              <Image
                src="/assets/truck-icon.svg"
                alt="Delivery Truck Icon"
                width={48}
                height={48}
                className="mx-auto"
              />
            </div>
            <h3 className="font-montserrat text-xl font-light tracking-wide text-black">
              Next day as standard
            </h3>
            <p className="font-montserrat text-sm text-gray-600 leading-relaxed">
              Order before 3pm<br />
              and get your order<br />
              the next day as standard
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="mb-6">
              <Image
                src="/assets/tick-icon.svg"
                alt="Checkmark Icon"
                width={48}
                height={48}
                className="mx-auto"
              />
            </div>
            <h3 className="font-montserrat text-xl font-light tracking-wide text-black">
              Made by true artisans
            </h3>
            <p className="font-montserrat text-sm text-gray-600 leading-relaxed">
              Handmade crafted goods<br />
              made with real passion<br />
              and craftmanship
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="mb-6">
              <Image
                src="/assets/card-icon.svg"
                alt="Card Payment Icon"
                width={48}
                height={48}
                className="mx-auto"
              />
            </div>
            <h3 className="font-montserrat text-xl font-light tracking-wide text-black">
              Unbeatable prices
            </h3>
            <p className="font-montserrat text-sm text-gray-600 leading-relaxed">
              For our materials and<br />
              quality you won't find<br />
              better prices anywhere
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="mb-6">
              <Image
                src="/assets/plant-icon.svg"
                alt="Plant Recycling Icon"
                width={48}
                height={48}
                className="mx-auto"
              />
            </div>
            <h3 className="font-montserrat text-xl font-light tracking-wide text-black">
              Recycled packaging
            </h3>
            <p className="font-montserrat text-sm text-gray-600 leading-relaxed">
              We use 100% recycled<br />
              to ensure our footprint<br />
              is more manageable
            </p>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="relative py-24" style={{
        backgroundImage: `url('/assets/bae4257d89397ead63485f276489b3fa.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        {/* Overlay to ensure readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-montserrat text-4xl font-light text-white mb-6">
            Join the club and get the benefits
          </h2>
          <p className="font-montserrat text-lg text-gray-200 mb-12">
            By subscribing to our newsletter you'll be the first to know about our new arrivals, special offers, and exclusive events.
          </p>
         
          <div className="flex justify-center items-center space-x-8 mb-12">
            <div className="flex items-center">
              <Image 
                src="/assets/newsletter-tick.svg" 
                alt="Tick Icon" 
                width={24} 
                height={24} 
                className="mr-4"
              />
              <h3 className="font-montserrat text-xl font-light text-white">
                Exclusive offers
              </h3>
            </div>

            <div className="flex items-center">
              <Image 
                src="/assets/newsletter-tick.svg" 
                alt="Tick Icon" 
                width={24} 
                height={24} 
                className="mr-4"
              />
              <h3 className="font-montserrat text-xl font-light text-white">
                Free events
              </h3>
            </div>

            <div className="flex items-center">
              <Image 
                src="/assets/newsletter-tick.svg" 
                alt="Tick Icon" 
                width={24} 
                height={24} 
                className="mr-4"
              />
              <h3 className="font-montserrat text-xl font-light text-white">
                Large discounts
              </h3>
            </div>
          </div>
        
          <div className="flex justify-center items-center">
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="font-montserrat text-lg px-6 py-4 border border-gray-300 w-full max-w-md mr-4 focus:outline-none focus:ring-2 focus:ring-[#2A254B] text-black bg-white"
            />
            <button className="font-montserrat px-10 py-4 bg-[#2A254B] text-white text-sm tracking-wider uppercase hover:bg-opacity-90 transition-colors duration-300">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#2A254B] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-5 gap-8">
            {/* Company Info Column */}
            <div className="col-span-2">
              <h4 className="font-montserrat text-xl font-light mb-6">AVION</h4>
              <p className="font-montserrat text-sm text-gray-300">
                We are a modern furniture store focused on delivering unique, designer pieces at affordable prices.
              </p>
            </div>

            {/* Links Column */}
            <div>
              <h4 className="font-montserrat text-lg font-light mb-6">Links</h4>
              <ul className="space-y-3">
                <li><Link href="/" className="font-montserrat text-sm hover:text-gray-300 transition-colors">Home</Link></li>
                <li><Link href="/about" className="font-montserrat text-sm hover:text-gray-300 transition-colors">About</Link></li>
                <li><Link href="/products" className="font-montserrat text-sm hover:text-gray-300 transition-colors">Products</Link></li>
                <li><a href="#" className="font-montserrat text-sm hover:text-gray-300 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Help Column */}
            <div>
              <h4 className="font-montserrat text-lg font-light mb-6">Help</h4>
              <ul className="space-y-3">
                <li><a href="#" className="font-montserrat text-sm hover:text-gray-300 transition-colors">Shipping</a></li>
                <li><a href="#" className="font-montserrat text-sm hover:text-gray-300 transition-colors">Returns</a></li>
                <li><a href="#" className="font-montserrat text-sm hover:text-gray-300 transition-colors">FAQ</a></li>
                <li><a href="#" className="font-montserrat text-sm hover:text-gray-300 transition-colors">Support</a></li>
              </ul>
            </div>

            {/* Email Signup Column */}
            <div>
              <h4 className="font-montserrat text-lg font-light mb-6">Join Our Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="font-montserrat text-sm px-4 py-2 w-full bg-white text-black border border-white/20 focus:outline-none focus:ring-1 focus:ring-white/50"
                />
                <button className="bg-white text-[#2A254B] px-4 py-2 ml-2 font-montserrat text-sm hover:bg-gray-100 transition-colors">
                  Submit
                </button>
              </div>
              <p className="font-montserrat text-xs text-gray-400 mt-2">
                *Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-12 pt-6 text-center">
            <p className="font-montserrat text-sm text-gray-300">
              2023 Avion LTD. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
