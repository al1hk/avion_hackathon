"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, getCartTotal } = useCart();

  return (
    <div>
      <div className="container mx-auto px-4 py-8 md:py-16">
        <h1 className="text-4xl font-light text-center mb-8">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="lg:col-span-2 space-y-6">
            {items.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-lg text-gray-600 mb-4">Your cart is empty</p>
                <Link href="/all-products" className="px-6 py-2 bg-blue-600 text-white rounded-md">
                  Continue Shopping
                </Link>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 border-b pb-6">
                  <Image src={item.image} alt={item.name} width={200} height={100} className="rounded" />
                  <div className="flex-grow">
                    <h3 className="text-2xl font-semibold">{item.name}</h3>
                    <p className="text-gray-600">${item.price}</p>
                    <div className="flex items-center mt-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 bg-gray-200">-</button>
                      <span className="px-4">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 bg-gray-200">+</button>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
                </div>
              ))
            )}
          </div>

          {items.length > 0 && (
            <div className="p-6  rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <p className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </p>
              <p className="flex justify-between">
                <span>Total:</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </p>
              <Link href={"/Checkout/"}><button className="w-full bg-black text-white py-3 rounded mt-4">Proceed to Checkout</button></Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
