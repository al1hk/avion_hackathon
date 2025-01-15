"use client"
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import Image from 'next/image';
import Receipt from '../components/Receipt';

const CheckoutPage = () => {
  const { items, getCartTotal } = useCart();
  const [showReceipt, setShowReceipt] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'US',
    phone: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowReceipt(true);
  };

  if (showReceipt) {
    return (
      <Receipt
        customerDetails={customerDetails}
        items={items}
        total={getCartTotal()}
        orderDate={new Date().toLocaleDateString()}
      />
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-light text-center mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Summary */}
        <div className="lg:col-span-1 bg-gray-50 p-6 rounded-lg h-fit">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center space-x-4">
                <Image src={item.image} alt={item.name} width={60} height={60} className="rounded" />
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>
            ))}
            <div className="border-t pt-4">
              <p className="flex justify-between font-semibold text-lg mt-2">
                <span>Total:</span> 
                <span>${getCartTotal().toFixed(2)}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Customer Details Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Customer Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    required
                    value={customerDetails.name}
                    onChange={(e) => setCustomerDetails({ ...customerDetails, name: e.target.value })}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    required
                    value={customerDetails.email}
                    onChange={(e) => setCustomerDetails({ ...customerDetails, email: e.target.value })}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={customerDetails.phone}
                    onChange={(e) => setCustomerDetails({ ...customerDetails, phone: e.target.value })}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Address</label>
                  <input
                    type="text"
                    required
                    value={customerDetails.address}
                    onChange={(e) => setCustomerDetails({ ...customerDetails, address: e.target.value })}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">City</label>
                  <input
                    type="text"
                    required
                    value={customerDetails.city}
                    onChange={(e) => setCustomerDetails({ ...customerDetails, city: e.target.value })}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">State</label>
                  <input
                    type="text"
                    required
                    value={customerDetails.state}
                    onChange={(e) => setCustomerDetails({ ...customerDetails, state: e.target.value })}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Postal Code</label>
                  <input
                    type="text"
                    required
                    value={customerDetails.postalCode}
                    onChange={(e) => setCustomerDetails({ ...customerDetails, postalCode: e.target.value })}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-colors"
                >
                  Complete Order
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
