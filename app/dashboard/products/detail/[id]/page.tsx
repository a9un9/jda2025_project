'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CubeIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';
import { ProductDetailSkeleton } from '@/app/ui/skeletons';

export default function ProductDetailPage() {
  const params = useParams();
  const id = params?.id as string;

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) return;

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Produk tidak ditemukan');
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <main className="min-h-[80vh] flex items-center justify-center to-white">
        <ProductDetailSkeleton />
      </main>
    );
  }

  if (error || !product) {
    return (
      <main className="flex flex-col items-center justify-center mt-20">
        <p className="text-xl font-semibold text-red-500">Ups, produk tidak ditemukan 😵‍💫</p>
        <Link
          href="/dashboard/products"
          className="mt-4 text-blue-500 underline hover:text-blue-700 text-sm"
        >
          ← Kembali ke Daftar Produk
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-[80vh] flex items-center justify-center to-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative bg-white rounded-3xl shadow-xl p-10 max-w-2xl w-full"
      >
        <div className="absolute top-[-20px] right-[-20px] opacity-10">
          <CubeIcon className="h-32 w-32 text-blue-300" />
        </div>

        <div className="flex items-center gap-4 mb-6">
          <CubeIcon className="h-10 w-10 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
        </div>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">{product.description}</p>

        <div className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
          Rp {product.price.toLocaleString('id-ID')}
        </div>

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
