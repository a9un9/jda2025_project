import Link from 'next/link';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';

const products = [
  { id: '1', name: 'Produk A' },
  { id: '2', name: 'Produk B' },
  { id: '3', name: 'Produk C' },
  { id: '4', name: 'Produk D' },
  { id: '5', name: 'Produk E' },
  { id: '6', name: 'Produk F' },
];

export default function ProductListPage() {
  return (
    <main className="min-h-[80vh] p-10">
      <div className="flex items-center gap-3 mb-8">
        <ShoppingBagIcon className="h-10 w-10 text-blue-600" />
        <h1 className="text-4xl font-bold text-gray-800">Daftar Produk</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/dashboard/products/${product.id}`}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg hover:bg-blue-50 transition duration-200"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-1">{product.name}</h2>
            <p className="text-sm text-gray-500">Klik untuk melihat detail</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
