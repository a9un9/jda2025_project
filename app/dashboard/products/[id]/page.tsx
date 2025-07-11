import Link from 'next/link';
import { notFound } from 'next/navigation';

const products = [
  { id: '1', name: 'Produk A', description: 'Deskripsi Produk A', price: 100 },
  { id: '2', name: 'Produk B', description: 'Deskripsi Produk B', price: 200 },
  { id: '3', name: 'Produk C', description: 'Deskripsi Produk C', price: 300 },
];

export default async function Page(props: any) {
  const { id } = await props.params;
  const product = products.find((p) => p.id === id);

  if (!product) return notFound();

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-blue-600 font-semibold">Rp {product.price}</p>

      <Link
        href="/dashboard/products"
        className="inline-block mt-4 text-sm text-blue-500 underline hover:text-blue-700"
      >
        ← Back to Products
      </Link>
    </main>

  );
}
