import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <div className="relative bg-[#F9F9F9] h-[50vh] md:h-[70vh] flex items-center">
        <div className="container mx-auto px-4 relative z-10 flex items-center justify-between">
          <div className="max-w-2xl">
            <h1 className="font-montserrat text-3xl md:text-5xl font-light mb-6 text-[#2A254B]">
              A brand built on the love of craftmanship, quality and outstanding customer service
            </h1>
          </div>
          <div className="flex space-x-4">
            <Link 
              href="/all-products" 
              className="bg-[#2A254B] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-montserrat uppercase tracking-wider text-sm"
            >
              Shop All Products
            </Link>
            <Link 
              href="/contact" 
              className="border border-[#2A254B] text-[#2A254B] px-6 py-3 rounded-lg hover:bg-[#2A254B] hover:text-white transition-colors font-montserrat uppercase tracking-wider text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* It started with a small idea Section */}
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
            
            <div className="flex space-x-4">
              <Link 
                href="/all-products" 
                className="bg-[#2A254B] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-montserrat uppercase tracking-wider text-sm"
              >
                View Collection
              </Link>
              <Link 
                href="/about#mission" 
                className="border border-[#2A254B] text-[#2A254B] px-6 py-3 rounded-lg hover:bg-[#2A254B] hover:text-white transition-colors font-montserrat uppercase tracking-wider text-sm"
              >
                Our Mission
              </Link>
            </div>
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

      {/* Hyper Personal Service Section */}
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <div className="relative" style={{ height: "600px" }}>
              <Image
                src="/assets/9e782fdeef5f60eca5a47456ecfd4df1.jpg"
                alt="Hyper Personal Service"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-1/2 pl-16">
            <h2 className="font-montserrat text-2xl md:text-4xl font-light text-[#2A254B] mb-6 leading-tight">
              Our service isn't just personal, it's actually hyper personally exquisite
            </h2>
            <p className="font-montserrat text-lg text-gray-700 leading-relaxed">
              When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
            </p>
          </div>
        </div>
      </div>

      {/* What Makes Our Brand Different Section */}
      <div className="container mx-auto px-4 py-12 md:py-24">
        <h2 className="font-montserrat text-2xl md:text-4xl text-center font-light tracking-wide uppercase text-black mb-16">
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
              Order by 3pm and get it next day as standard
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="mb-6">
              <Image
                src="/assets/plant-icon.svg"
                alt="Plant Icon"
                width={48}
                height={48}
                className="mx-auto"
              />
            </div>
            <h3 className="font-montserrat text-xl font-light tracking-wide text-black">
              Sustainability
            </h3>
            <p className="font-montserrat text-sm text-gray-600 leading-relaxed">
              We ensure our materials are sourced responsibly
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="mb-6">
              <Image
                src="/assets/card-icon.svg"
                alt="Card Icon"
                width={48}
                height={48}
                className="mx-auto"
              />
            </div>
            <h3 className="font-montserrat text-xl font-light tracking-wide text-black">
              Unbeatable Prices
            </h3>
            <p className="font-montserrat text-sm text-gray-600 leading-relaxed">
              High-quality furniture at the most competitive prices
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
              Quality Guaranteed
            </h3>
            <p className="font-montserrat text-sm text-gray-600 leading-relaxed">
              30 day money-back guarantee
            </p>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="relative py-12 md:py-24" style={{
        backgroundImage: `url('/assets/bae4257d89397ead63485f276489b3fa.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        {/* Overlay to ensure readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-montserrat text-3xl md:text-4xl text-white mb-6">
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
      <footer className="bg-[#2A254B] text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Company Info Column */}
            <div className="md:col-span-2">
              <h4 className="font-montserrat text-lg md:text-xl font-light mb-6">AVION</h4>
              <p className="font-montserrat text-sm text-gray-300">
                We are a modern furniture store focused on delivering unique, designer pieces at affordable prices.
              </p>
            </div>

            {/* Links Column */}
            <div>
              <h4 className="font-montserrat text-lg md:text-lg font-light mb-6">Links</h4>
              <ul className="space-y-3">
                <li><a href="/" className="font-montserrat text-sm hover:text-gray-300 transition-colors">Home</a></li>
                <li><a href="/about" className="font-montserrat text-sm hover:text-gray-300 transition-colors">About</a></li>
                <li><a href="/all-products" className="font-montserrat text-sm hover:text-gray-300 transition-colors">All Products</a></li>
              </ul>
            </div>

            {/* Help Column */}
            <div>
              <h4 className="font-montserrat text-lg md:text-lg font-light mb-6">Help</h4>
              <ul className="space-y-3">
                <li><a href="#" className="font-montserrat text-sm hover:text-gray-300 transition-colors">Shipping</a></li>
                <li><a href="#" className="font-montserrat text-sm hover:text-gray-300 transition-colors">Returns</a></li>
                <li><a href="#" className="font-montserrat text-sm hover:text-gray-300 transition-colors">FAQ</a></li>
                <li><a href="#" className="font-montserrat text-sm hover:text-gray-300 transition-colors">Support</a></li>
              </ul>
            </div>

            {/* Email Signup Column */}
            <div>
              <h4 className="font-montserrat text-lg md:text-lg font-light mb-6">Join Our Newsletter</h4>
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
    </main>
  )
}
