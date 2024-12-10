"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '../context/CartContext'

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, getCartTotal } = useCart();

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
            {items.length === 0 ? (
              <div className="text-center py-8">
                <p className="font-montserrat text-lg text-gray-600 mb-4">Your cart is empty</p>
                <Link 
                  href="/all-products" 
                  className="font-montserrat inline-block px-6 py-2 bg-[#2A254B] text-white rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex flex-col md:flex-row items-start md:items-center border-b border-gray-200 pb-6 space-y-4 md:space-y-0">
                  <div className="w-full md:w-1/4 relative h-48 md:h-64">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={400}
                      height={600}
                      className="object-cover rounded-lg w-full h-full"
                    />
                  </div>
                  <div className="flex-grow md:pl-8 space-y-4 md:space-y-0">
                    <div className="text-left">
                      <h3 className="font-montserrat text-xl md:text-2xl text-[#2A254B] mb-2">
                        {item.name}
                      </h3>
                      <p className="font-montserrat text-sm md:text-base text-gray-600">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between md:justify-start md:space-x-8 mt-4 md:mt-0">
                      <div className="flex items-center space-x-3">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                          className="bg-gray-100 text-[#2A254B] w-8 h-8 rounded-md hover:bg-gray-200 transition-colors flex items-center justify-center"
                        >
                          -
                        </button>
                        <span className="font-montserrat text-base md:text-lg text-black w-8 text-center">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                          className="bg-gray-100 text-[#2A254B] w-8 h-8 rounded-md hover:bg-gray-200 transition-colors flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="font-montserrat text-base md:text-lg text-[#2A254B] font-semibold">
                          £{(item.price * item.quantity).toFixed(2)}
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Order Summary */}
          {items.length > 0 && (
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="font-montserrat text-xl text-[#2A254B] mb-6">Order Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-montserrat text-gray-600">Subtotal</span>
                    <span className="font-montserrat text-[#2A254B]">£{getCartTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-montserrat text-gray-600">Shipping</span>
                    <span className="font-montserrat text-[#2A254B]">Calculated at checkout</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between">
                      <span className="font-montserrat text-lg text-[#2A254B]">Total</span>
                      <span className="font-montserrat text-lg text-[#2A254B] font-semibold">
                        £{getCartTotal().toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button className="w-full bg-[#2A254B] text-white py-3 rounded-md hover:bg-opacity-90 transition-colors font-montserrat">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
