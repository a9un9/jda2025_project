'use client';

import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';

export default function Page() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
      <FaceFrownIcon className="h-24 w-24 text-blue-500 mb-6 animate-bounce" />
      <h1 className="text-5xl font-bold text-gray-800 mb-4">Oops!</h1>
      <p className="text-lg text-gray-600 mb-8">
        Halaman yang kamu cari nyasar atau hilang entah ke mana.
      </p>
      <Link
        href="/dashboard/products"
        className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-500"
      >
        Balik ke Products
      </Link>
      <p className="mt-10 text-sm text-gray-400">Kode kesalahan: 404</p>
    </main>
  );
}
