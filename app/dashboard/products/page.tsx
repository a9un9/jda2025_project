'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { ProductSkeleton } from '@/app/ui/skeletons';
import { lusitana } from '@/app/ui/fonts';

interface Product {
  id: number;
  title: string;
}

export default function ProductListPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // ✅ Perbaiki URL API
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        if (!res.ok) throw new Error('Network error');
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-[80vh] p-10">
      {/* Header selalu tampil */}
      <div className="flex items-center gap-3 mb-8">
        {/* <ShoppingBagIcon className="h-10 w-10 text-blue-600" /> */}
        <h1 className={`${lusitana.className} text-2xl`}>Daftar Produk</h1>
      </div>

      {/* Loading Skeleton */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, idx) => (
            <ProductSkeleton key={idx} />
          ))}
        </div>
      ) : error ? (
        // Error State

        <main className="flex h-full flex-col items-center justify-center mt-12">
        <p className="text-xl font-semibold text-red-500">
            Ups, koneksi terputus datanya lagi off duty 🧑‍💻
        </p>
        <p className="text-sm mt-2">
            Kemungkinan server atau jaringan sedang bermasalah. Refresh aja, siapa tahu jodoh!
        </p>
        <button
            className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
            onClick={() => location.reload()}
        >
            Try again
        </button>
        </main>

      ) : (
        // Success State
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/dashboard/products/detail/${product.id}`}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg hover:bg-blue-50 transition duration-200"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-1">{product.title}</h2>
              <p className="text-sm text-gray-500">Klik untuk melihat detail</p>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
