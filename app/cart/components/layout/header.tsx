import Link from 'next/link';
import { Search, ShoppingCart } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4 border-b">
          {/* Search Icon */}
          <button className="text-black hover:text-gray-800">
            <Search className="w-6 h-6" />
          </button>

          {/* Cart */}
          <Link href="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-gray-900" />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              0
            </span>
          </Link>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-center py-6">
          <Link href="/" className="text-4xl font-serif text-black tracking-wide font-playfair">
            AVION
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center justify-center space-x-8 py-4">
          <Link href="/plant-pots" className="text-sm text-black hover:text-gray-800 font-montserrat tracking-wide">
            Plant pots
          </Link>
          <Link href="/ceramics" className="text-sm text-black hover:text-gray-800 font-montserrat tracking-wide">
            Ceramics
          </Link>
          <Link href="/tables" className="text-sm text-black hover:text-gray-800 font-montserrat tracking-wide">
            Tables
          </Link>
          <Link href="/chairs" className="text-sm text-black hover:text-gray-800 font-montserrat tracking-wide">
            Chairs
          </Link>
          <Link href="/crockery" className="text-sm text-black hover:text-gray-800 font-montserrat tracking-wide">
            Crockery
          </Link>
          <Link href="/tableware" className="text-sm text-black hover:text-gray-800 font-montserrat tracking-wide">
            Tableware
          </Link>
          <Link href="/cutlery" className="text-sm text-black hover:text-gray-800 font-montserrat tracking-wide">
            Cutlery
          </Link>
        </nav>
      </div>
    </header>
  );
}
