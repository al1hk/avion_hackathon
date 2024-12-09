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
        <Link href="/" className="font-montserrat text-2xl font-light text-[#2A254B]">
          Avion
        </Link>
        
        <div className="flex space-x-8">
          {/* Add navigation links if needed */}
        </div>
      </nav>

      {/* Cart Section */}
      <div className="container mx-auto px-4 py-12 md:py-24">
        <h1 className="font-montserrat text-4xl font-light text-[#2A254B] mb-12 text-center">
          Your Cart
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product List */}
          <div className="md:col-span-2">
            {/* Product 1 */}
            <div className="flex flex-col md:flex-row items-center border-b border-gray-200 py-6 space-y-4 md:space-y-0 md:space-x-8">
              <div className="w-full md:w-1/4 pr-8 relative h-64">
                <Image
                  src="/assets/842fec031ef0c247df24214e05b47e70.jpg"
                  alt="The Dandy Chair"
                  width={400}
                  height={600}
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex-grow w-full md:w-1/2 text-center md:text-left">
                <h3 className="font-montserrat text-2xl text-[#2A254B] mb-2">
                  The Dandy Chair   
                </h3>
                <p className="font-montserrat text-gray-600">
                  Sleek and minimalist chair with a smooth beech texture
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setQuantity1(Math.max(1, quantity1 - 1))} 
                  className="bg-gray-100 text-[#2A254B] px-3 py-1 rounded-md hover:bg-gray-200 transition-colors"
                >
                  -
                </button>
                <span className="font-montserrat text-base md:text-lg text-black">
                  {quantity1}
                </span>
                <button 
                  onClick={() => setQuantity1(quantity1 + 1)} 
                  className="bg-gray-100 text-[#2A254B] px-3 py-1 rounded-md hover:bg-gray-200 transition-colors"
                >
                  +
                </button>
              </div>
              <div className="font-montserrat text-base md:text-lg text-[#2A254B] font-semibold">
                £{(125 * quantity1).toFixed(2)}
              </div>
            </div>

            {/* Product 2 */}
            <div className="flex flex-col md:flex-row items-center border-b border-gray-200 py-6 space-y-4 md:space-y-0 md:space-x-8">
              <div className="w-full md:w-1/4 pr-8 relative h-64">
                <Image
                  src="/assets/fe1e8e060432bf77cee26297ca43e0e6.jpg"
                  alt="The Lucy Lamp"
                  width={400}
                  height={600}
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex-grow w-full md:w-1/2 text-center md:text-left">
                <h3 className="font-montserrat text-2xl text-[#2A254B] mb-2">
                  The Lucy Lamp
                </h3>
                <p className="font-montserrat text-gray-600">
                  Sleek design that provides warm, ambient lighting for your living space
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setQuantity2(Math.max(1, quantity2 - 1))} 
                  className="bg-gray-100 text-[#2A254B] px-3 py-1 rounded-md hover:bg-gray-200 transition-colors"
                >
                  -
                </button>
                <span className="font-montserrat text-base md:text-lg text-black">
                  {quantity2}
                </span>
                <button 
                  onClick={() => setQuantity2(quantity2 + 1)} 
                  className="bg-gray-100 text-[#2A254B] px-3 py-1 rounded-md hover:bg-gray-200 transition-colors"
                >
                  +
                </button>
              </div>
              <div className="font-montserrat text-base md:text-lg text-[#2A254B] font-semibold">
                £{(180 * quantity2).toFixed(2)}
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-[#F9F9F9] p-6 md:p-8 rounded-lg">
              <div className="flex justify-between mb-4">
                <span className="font-montserrat text-base md:text-lg text-gray-700">
                  Subtotal
                </span>
                <span className="font-montserrat text-base md:text-lg text-[#2A254B]">
                  £{(125 * quantity1 + 180 * quantity2).toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-montserrat text-base md:text-lg text-gray-700">
                  The Dandy Chair
                </span>
                <span className="font-montserrat text-base md:text-lg text-[#2A254B]">
                  £{(125 * quantity1).toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-montserrat text-base md:text-lg text-gray-700">
                  The Lucy Lamp
                </span>
                <span className="font-montserrat text-base md:text-lg text-[#2A254B]">
                  £{(180 * quantity2).toFixed(2)}
                </span>
              </div>
              <div className="border-t border-gray-300 my-4"></div>
              <div className="flex justify-between">
                <span className="font-montserrat text-lg md:text-xl font-semibold text-black">
                  Total
                </span>
                <span className="font-montserrat text-lg md:text-xl text-[#2A254B] font-semibold">
                  £{(125 * quantity1 + 180 * quantity2).toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Checkout Section */}
          <div className="md:col-span-1">
            <div className="bg-[#F9F9F9] p-6 md:p-8 rounded-lg">
              <h3 className="font-montserrat text-2xl text-[#2A254B] mb-6">
                Checkout
              </h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block font-montserrat text-[#2A254B] mb-2">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A254B]"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block font-montserrat text-[#2A254B] mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A254B]"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-[#2A254B] text-white py-3 rounded-md hover:bg-opacity-90 transition-colors font-montserrat"
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
