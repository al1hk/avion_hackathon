import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center py-6 border-b border-gray-200">
      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-gray-800 tracking-wide">AVION</h1>

      {/* Navigation Links */}
      <nav className="mt-4">
        <ul className="flex gap-8 text-lg font-medium text-gray-700">
          <li>
            <Link href="/" legacyBehavior>
              <a className="hover:text-purple-500 transition">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/products" legacyBehavior>
              <a className="hover:text-purple-500 transition">All Products</a>
            </Link>
          </li>
          <li>
            <Link href="/about" legacyBehavior>
              <a className="hover:text-purple-500 transition">About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
