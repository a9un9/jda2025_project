'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import { CubeIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { ProductDetailSkeleton } from '@/app/ui/skeletons'; // pastikan path sesuai

export default async function Page(props: any) {
  const { id } = await props.params;
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
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

  if (loading)
    return (
      <main className="min-h-[80vh] flex items-center justify-center to-white">
        <ProductDetailSkeleton />
      </main>
    );

  if (error || !product) return notFound();

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
