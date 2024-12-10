import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      
      <div className="relative">
        <Image
          src="/assets/tabledisplay.jpg"
          alt="Table Display"
          width={1920}
          height={1080}
          className="w-full"
        />
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-6 md:p-16 shadow-lg mx-4 md:mx-0 w-[calc(100%-2rem)] md:w-[600px] md:right-20 space-y-6 md:space-y-12">
          <div className="space-y-2">
            <h1 className="font-playfair text-2xl md:text-4xl leading-tight text-black text-center md:text-left">
              Luxury homeware for people who love timeless design quality
            </h1>
          </div>

          <p className="font-montserrat text-sm md:text-lg text-black text-center md:text-left">
            Shop the new Spring 2022 collection today
          </p>

          <div className="flex justify-center md:justify-start">
            <button className="w-full md:w-auto font-montserrat px-6 md:px-8 py-3 md:py-4 bg-black text-white text-xs md:text-sm tracking-wider uppercase hover:bg-gray-900 transition-colors duration-300">
              New Collection
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-24">
        <h2 className="font-montserrat text-xl md:text-2xl text-center font-light tracking-wide uppercase text-black mb-8 md:mb-16">
          What makes our brand different
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 px-4 md:px-0">
          <div className="text-center space-y-4">
            <div className="mb-4 md:mb-6">
              <Image
                src="/assets/truck-icon.svg"
                alt="Delivery Truck Icon"
                width={48}
                height={48}
                className="mx-auto"
              />
            </div>
            <h3 className="font-montserrat text-lg md:text-xl font-light tracking-wide text-black">
              Next day as standard
            </h3>
            <p className="font-montserrat text-xs md:text-sm text-gray-600 leading-relaxed">
              Order before 3pm<br />
              and get your order<br />
              the next day as standard
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="mb-4 md:mb-6">
              <Image
                src="/assets/tick-icon.svg"
                alt="Checkmark Icon"
                width={48}
                height={48}
                className="mx-auto"
              />
            </div>
            <h3 className="font-montserrat text-lg md:text-xl font-light tracking-wide text-black">
              Made by true artisans
            </h3>
            <p className="font-montserrat text-xs md:text-sm text-gray-600 leading-relaxed">
              Handmade crafted goods<br />
              made with real passion<br />
              and craftmanship
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="mb-4 md:mb-6">
              <Image
                src="/assets/card-icon.svg"
                alt="Card Payment Icon"
                width={48}
                height={48}
                className="mx-auto"
              />
            </div>
            <h3 className="font-montserrat text-lg md:text-xl font-light tracking-wide text-black">
              Unbeatable prices
            </h3>
            <p className="font-montserrat text-xs md:text-sm text-gray-600 leading-relaxed">
              For our materials and<br />
              quality you won't find<br />
              better prices anywhere
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="mb-4 md:mb-6">
              <Image
                src="/assets/plant-icon.svg"
                alt="Plant Recycling Icon"
                width={48}
                height={48}
                className="mx-auto"
              />
            </div>
            <h3 className="font-montserrat text-lg md:text-xl font-light tracking-wide text-black">
              Recycled packaging
            </h3>
            <p className="font-montserrat text-xs md:text-sm text-gray-600 leading-relaxed">
              We use 100% recycled<br />
              to ensure our footprint<br />
              is more manageable
            </p>
          </div>
        </div>
      </div>

      {/* Product Showcase Section */}
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-light text-[#2A254B]">
            Our Products
          </h2>
          <p className="font-montserrat text-base md:text-lg text-gray-600 mt-4">
            Discover timeless design and unparalleled craftsmanship
          </p>
        </div>

        <div className="flex flex-wrap justify-center space-x-2 md:space-x-8 mb-8 md:mb-12">
          <button 
            className="text-center font-montserrat text-sm md:text-lg text-[#2A254B] hover:text-opacity-80 transition-colors mb-2 md:mb-0"
          >
            All Products
          </button>
          <button 
            className="text-center font-montserrat text-sm md:text-lg text-[#2A254B] hover:text-opacity-80 transition-colors mb-2 md:mb-0"
          >
            Plant Pots
          </button>
          <button 
            className="text-center font-montserrat text-sm md:text-lg text-[#2A254B] hover:text-opacity-80 transition-colors mb-2 md:mb-0"
          >
            Ceramics
          </button>
          <button 
            className="text-center font-montserrat text-sm md:text-lg text-[#2A254B] hover:text-opacity-80 transition-colors mb-2 md:mb-0"
          >
            Tables
          </button>
          <button 
            className="text-center font-montserrat text-sm md:text-lg text-[#2A254B] hover:text-opacity-80 transition-colors mb-2 md:mb-0"
          >
            Chairs
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {/* Product Cards */}
          <div className="group">
            <div className="relative h-[500px] overflow-hidden">
              <Image 
                src="/assets/3811628ae03b0a862e160e2eae36dcdd.jpg" 
                alt="The Dandy Chair"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="font-montserrat text-lg md:text-lg text-[#2A254B]">
                The Dandy Chair
              </h3>
              <p className="font-montserrat text-lg md:text-lg font-semibold text-[#2A254B]">
                £250
              </p>
            </div>
          </div>

          <div className="group">
            <div className="relative h-[500px] overflow-hidden">
              <Image 
                src="/assets/842fec031ef0c247df24214e05b47e70.jpg" 
                alt="Rustic Vase Set"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="font-montserrat text-lg md:text-lg text-[#2A254B]">
                Rustic Vase Set
              </h3>
              <p className="font-montserrat text-lg md:text-lg font-semibold text-[#2A254B]">
                £155
              </p>
            </div>
          </div>

          <div className="group">
            <div className="relative h-[500px] overflow-hidden">
              <Image 
                src="/assets/fe1e8e060432bf77cee26297ca43e0e6.jpg" 
                alt="The Silky Vase"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="font-montserrat text-lg md:text-lg text-[#2A254B]">
                The Silky Vase
              </h3>
              <p className="font-montserrat text-lg md:text-lg font-semibold text-[#2A254B]">
                £125
              </p>
            </div>
          </div>

          <div className="group">
            <div className="relative h-[500px] overflow-hidden">
              <Image 
                src="/assets/ffbabae5de21ee1b8c8ca6e83dd10f51.jpg" 
                alt="The Lucy Lamp"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="font-montserrat text-lg md:text-lg text-[#2A254B]">
                The Lucy Lamp
              </h3>
              <p className="font-montserrat text-lg md:text-lg font-semibold text-[#2A254B]">
                £399
              </p>
            </div>
          </div>
        </div>

        {/* View Collection Button */}
        <div className="text-center mt-12">
          <Link 
            href="/products" 
            className="inline-block font-montserrat px-10 py-4 bg-[#2A254B] text-white text-sm tracking-wider uppercase hover:bg-opacity-90 transition-colors"
          >
            View Collection
          </Link>
        </div>
      </div>

      {/* New Section with Image and Colored Box */}
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 bg-[#2A254B] p-6 md:p-16 text-white flex flex-col justify-between">
            <div>
              <h2 className="font-montserrat text-2xl md:text-4xl font-light mb-6">
                It started with a small idea
              </h2>
              <p className="font-montserrat text-base md:text-lg leading-relaxed">
                A global brand with local beginnings, our story begain in a small studio in South London in early 2014
              </p>
            </div>
            
            <button className="font-montserrat px-6 md:px-10 py-3 md:py-4 bg-white text-[#2A254B] text-xs md:text-sm tracking-wider uppercase hover:bg-gray-100 transition-colors duration-300 self-start mt-8">
              View Collection
            </button>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative" style={{ height: "600px" }}>
              <Image
                src="/assets/23bc7512aabb96d158dbac6d898734fb.jpg"
                alt="Interior Design"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Subscription Section */}
      <div className="w-full px-0 py-12 md:py-24 relative" style={{
        backgroundImage: `url('/assets/bae4257d89397ead63485f276489b3fa.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        {/* Overlay to ensure readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-montserrat text-3xl md:text-4xl font-light text-white mb-6">
            Join the club and get the benefits
          </h2>
          <p className="font-montserrat text-base md:text-lg text-gray-200 mb-12">
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
              <h3 className="font-montserrat text-lg md:text-xl font-light text-white">
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
              <h3 className="font-montserrat text-lg md:text-xl font-light text-white">
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
              <h3 className="font-montserrat text-lg md:text-xl font-light text-white">
                Large discounts
              </h3>
            </div>
          </div>
          
          <div className="flex justify-center items-center">
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="font-montserrat text-base md:text-lg px-6 md:px-8 py-3 md:py-4 border border-gray-300 w-full max-w-md mr-4 focus:outline-none focus:ring-2 focus:ring-[#2A254B] text-black bg-white"
            />
            <button className="font-montserrat px-6 md:px-10 py-3 md:py-4 bg-[#2A254B] text-white text-xs md:text-sm tracking-wider uppercase hover:bg-opacity-90 transition-colors duration-300">
              Sign Up
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
              <p className="font-montserrat text-xs text-gray-300">
                We are a modern furniture store focused on delivering unique, designer pieces at affordable prices.
              </p>
            </div>

            {/* Links Column */}
            <div>
              <h4 className="font-montserrat text-lg md:text-lg font-light mb-4 md:mb-6">Links</h4>
              <ul className="space-y-3">
                <li><a href="/" className="font-montserrat text-xs md:text-sm hover:text-gray-300 transition-colors">Home</a></li>
                <li><a href="/about" className="font-montserrat text-xs md:text-sm hover:text-gray-300 transition-colors">About</a></li>
                <li><a href="/all-products" className="font-montserrat text-xs md:text-sm hover:text-gray-300 transition-colors">All Products</a></li>
              </ul>
            </div>

            {/* Help Column */}
            <div>
              <h4 className="font-montserrat text-lg md:text-lg font-light mb-4 md:mb-6">Help</h4>
              <ul className="space-y-3">
                <li><a href="#" className="font-montserrat text-xs md:text-sm hover:text-gray-300 transition-colors">Shipping</a></li>
                <li><a href="#" className="font-montserrat text-xs md:text-sm hover:text-gray-300 transition-colors">Returns</a></li>
                <li><a href="#" className="font-montserrat text-xs md:text-sm hover:text-gray-300 transition-colors">FAQ</a></li>
                <li><a href="#" className="font-montserrat text-xs md:text-sm hover:text-gray-300 transition-colors">Support</a></li>
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
              <p className="font-montserrat text-xs text-gray-400 mt-2">
                *Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-12 pt-6 text-center">
            <p className="font-montserrat text-xs text-gray-300">
              2023 Avion LTD. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
