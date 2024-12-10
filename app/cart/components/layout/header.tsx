"use client";
import Link from 'next/link';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../../../context/CartContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();

  return (
    <header className="bg-white border-b relative">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4 border-b">
          {/* Menu Button (Mobile) */}
          <button 
            className="lg:hidden text-black hover:text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Search Icon */}
          <button className="text-black hover:text-gray-800">
            <Search className="w-6 h-6" />
          </button>

          {/* Cart */}
          <Link href="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-gray-900" />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {items.length}
            </span>
          </Link>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-center py-6">
          <Link href="/" className="text-3xl md:text-4xl font-serif text-black tracking-wide font-playfair">
            AVION
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className={`
          lg:flex lg:items-center lg:justify-center lg:space-x-8 lg:py-4
          ${isMenuOpen ? 'block' : 'hidden'}
          absolute lg:relative left-0 right-0 bg-white z-50 border-b lg:border-b-0
        `}>
          <Link href="/plant-pots" className="block lg:inline-block py-3 px-4 lg:p-0 text-sm text-black hover:text-gray-800 font-montserrat tracking-wide hover:bg-gray-50 lg:hover:bg-transparent">
            Plant pots
          </Link>
          <Link href="/ceramics" className="block lg:inline-block py-3 px-4 lg:p-0 text-sm text-black hover:text-gray-800 font-montserrat tracking-wide hover:bg-gray-50 lg:hover:bg-transparent">
            Ceramics
          </Link>
          <Link href="/tables" className="block lg:inline-block py-3 px-4 lg:p-0 text-sm text-black hover:text-gray-800 font-montserrat tracking-wide hover:bg-gray-50 lg:hover:bg-transparent">
            Tables
          </Link>
          <Link href="/chairs" className="block lg:inline-block py-3 px-4 lg:p-0 text-sm text-black hover:text-gray-800 font-montserrat tracking-wide hover:bg-gray-50 lg:hover:bg-transparent">
            Chairs
          </Link>
          <Link href="/crockery" className="block lg:inline-block py-3 px-4 lg:p-0 text-sm text-black hover:text-gray-800 font-montserrat tracking-wide hover:bg-gray-50 lg:hover:bg-transparent">
            Crockery
          </Link>
          <Link href="/tableware" className="block lg:inline-block py-3 px-4 lg:p-0 text-sm text-black hover:text-gray-800 font-montserrat tracking-wide hover:bg-gray-50 lg:hover:bg-transparent">
            Tableware
          </Link>
          <Link href="/cutlery" className="block lg:inline-block py-3 px-4 lg:p-0 text-sm text-black hover:text-gray-800 font-montserrat tracking-wide hover:bg-gray-50 lg:hover:bg-transparent">
            Cutlery
          </Link>
        </nav>
      </div>
    </header>
  );
}
