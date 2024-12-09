"use client"
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function CartPage() {
  const [quantity1, setQuantity1] = useState(1)
  const [quantity2, setQuantity2] = useState(1)

  const handleQuantityChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity1(Math.max(1, parseInt(e.target.value)))
  }

  const handleQuantityChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity2(Math.max(1, parseInt(e.target.value)))
  }

  return (
    <div>
      {/* Navigation */}
      <nav className="container mx-auto px-4 flex justify-between items-center py-8">
        
        <div className="flex space-x-4">
          {/* Add navigation links if needed */}
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 md:py-16">
        <h1 className="font-montserrat text-2xl md:text-4xl font-light text-[#2A254B] mb-8 md:mb-12 text-center">
          Your Cart
        </h1>

        {/* Cart Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Product List */}
          <div className="lg:col-span-2 space-y-6">
            {/* Product 1 */}
            <div className="flex flex-col md:flex-row items-start md:items-center border-b border-gray-200 pb-6 space-y-4 md:space-y-0">
              <div className="w-full md:w-1/4 relative h-48 md:h-64">
                <Image
                  src="/assets/842fec031ef0c247df24214e05b47e70.jpg"
                  alt="The Dandy Chair"
                  width={400}
                  height={600}
                  className="object-cover rounded-lg w-full h-full"
                />
              </div>
              <div className="flex-grow md:pl-8 space-y-4 md:space-y-0">
                <div className="text-left">
                  <h3 className="font-montserrat text-xl md:text-2xl text-[#2A254B] mb-2">
                    The Dandy Chair   
                  </h3>
                  <p className="font-montserrat text-sm md:text-base text-gray-600">
                    Sleek and minimalist chair with a smooth beech texture
                  </p>
                </div>
                <div className="flex items-center justify-between md:justify-start md:space-x-8 mt-4 md:mt-0">
                  <div className="flex items-center space-x-3">
                    <button 
                      onClick={() => setQuantity1(Math.max(1, quantity1 - 1))} 
                      className="bg-gray-100 text-[#2A254B] w-8 h-8 rounded-md hover:bg-gray-200 transition-colors flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="font-montserrat text-base md:text-lg text-black w-8 text-center">
                      {quantity1}
                    </span>
                    <button 
                      onClick={() => setQuantity1(quantity1 + 1)} 
                      className="bg-gray-100 text-[#2A254B] w-8 h-8 rounded-md hover:bg-gray-200 transition-colors flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                  <div className="font-montserrat text-base md:text-lg text-[#2A254B] font-semibold">
                    £{(125 * quantity1).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="flex flex-col md:flex-row items-start md:items-center border-b border-gray-200 pb-6 space-y-4 md:space-y-0">
              <div className="w-full md:w-1/4 relative h-48 md:h-64">
                <Image
                  src="/assets/fe1e8e060432bf77cee26297ca43e0e6.jpg"
                  alt="The Lucy Lamp"
                  width={400}
                  height={600}
                  className="object-cover rounded-lg w-full h-full"
                />
              </div>
              <div className="flex-grow md:pl-8 space-y-4 md:space-y-0">
                <div className="text-left">
                  <h3 className="font-montserrat text-xl md:text-2xl text-[#2A254B] mb-2">
                    The Lucy Lamp
                  </h3>
                  <p className="font-montserrat text-sm md:text-base text-gray-600">
                    Sleek design that provides warm, ambient lighting for your living space
                  </p>
                </div>
                <div className="flex items-center justify-between md:justify-start md:space-x-8 mt-4 md:mt-0">
                  <div className="flex items-center space-x-3">
                    <button 
                      onClick={() => setQuantity2(Math.max(1, quantity2 - 1))} 
                      className="bg-gray-100 text-[#2A254B] w-8 h-8 rounded-md hover:bg-gray-200 transition-colors flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="font-montserrat text-base md:text-lg text-black w-8 text-center">
                      {quantity2}
                    </span>
                    <button 
                      onClick={() => setQuantity2(quantity2 + 1)} 
                      className="bg-gray-100 text-[#2A254B] w-8 h-8 rounded-md hover:bg-gray-200 transition-colors flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                  <div className="font-montserrat text-base md:text-lg text-[#2A254B] font-semibold">
                    £{(180 * quantity2).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary - Mobile Only */}
            <div className="lg:hidden bg-[#F9F9F9] p-6 rounded-lg space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-montserrat text-sm text-gray-700">Subtotal</span>
                <span className="font-montserrat text-sm text-[#2A254B]">£{(125 * quantity1 + 180 * quantity2).toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-montserrat text-sm text-gray-700">The Dandy Chair</span>
                <span className="font-montserrat text-sm text-[#2A254B]">£{(125 * quantity1).toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-montserrat text-sm text-gray-700">The Lucy Lamp</span>
                <span className="font-montserrat text-sm text-[#2A254B]">£{(180 * quantity2).toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-300 my-4"></div>
              <div className="flex justify-between items-center">
                <span className="font-montserrat text-base font-semibold text-black">Total</span>
                <span className="font-montserrat text-base text-[#2A254B] font-semibold">£{(125 * quantity1 + 180 * quantity2).toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Checkout Section */}
          <div className="lg:col-span-1">
            {/* Order Summary - Desktop Only */}
            <div className="hidden lg:block bg-[#F9F9F9] p-6 rounded-lg mb-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-montserrat text-base text-gray-700">Subtotal</span>
                <span className="font-montserrat text-base text-[#2A254B]">£{(125 * quantity1 + 180 * quantity2).toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-montserrat text-base text-gray-700">The Dandy Chair</span>
                <span className="font-montserrat text-base text-[#2A254B]">£{(125 * quantity1).toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-montserrat text-base text-gray-700">The Lucy Lamp</span>
                <span className="font-montserrat text-base text-[#2A254B]">£{(180 * quantity2).toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-300 my-4"></div>
              <div className="flex justify-between items-center">
                <span className="font-montserrat text-lg font-semibold text-black">Total</span>
                <span className="font-montserrat text-lg text-[#2A254B] font-semibold">£{(125 * quantity1 + 180 * quantity2).toFixed(2)}</span>
              </div>
            </div>

            <div className="bg-[#F9F9F9] p-6 rounded-lg">
              <h3 className="font-montserrat text-xl md:text-2xl text-[#2A254B] mb-6">
                Checkout
              </h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block font-montserrat text-sm md:text-base text-[#2A254B] mb-2">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A254B] text-sm md:text-base"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-montserrat text-sm md:text-base text-[#2A254B] mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A254B] text-sm md:text-base"
                    placeholder="Enter your email"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-[#2A254B] text-white py-4 rounded-md hover:bg-opacity-90 transition-colors font-montserrat text-sm md:text-base mt-4"
                >
                  Proceed to Payment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
