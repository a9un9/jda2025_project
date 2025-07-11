'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CubeIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const products = [
  { id: '1', name: 'Produk A', description: 'Deskripsi Produk A', price: 100 },
  { id: '2', name: 'Produk B', description: 'Deskripsi Produk B', price: 200 },
  { id: '3', name: 'Produk C', description: 'Deskripsi Produk C', price: 300 },
];

export default function Page({ params }: any) {
  const { id } = params;
  const product = products.find((p) => p.id === id);

  if (!product) return notFound();

  return (
    <main className="min-h-[80vh] flex items-center justify-center to-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative bg-white rounded-3xl shadow-xl p-10 max-w-2xl w-full"
      >
        {/* Icon Background */}
        <div className="absolute top-[-20px] right-[-20px] opacity-10">
          <CubeIcon className="h-32 w-32 text-blue-300" />
        </div>

        <div className="flex items-center gap-4 mb-6">
          <CubeIcon className="h-10 w-10 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
        </div>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          {product.description}
        </p>

        <div className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
          Rp {product.price.toLocaleString('id-ID')}
        </div>
        <br/>
        <Link
          href="/dashboard/products"
          className="inline-block mt-4 text-blue-500 hover:text-blue-700 text-sm underline"
        >
          ← Kembali ke Daftar Produk
        </Link>
      </motion.div>
    </main>
  );
}
