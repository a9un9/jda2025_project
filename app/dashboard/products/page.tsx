import Link from 'next/link';

const products = [
  { id: '1', name: 'Produk A' },
  { id: '2', name: 'Produk B' },
  { id: '3', name: 'Produk C' },
];

export default function ProductListPage() {
  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-4">Daftar Produk</h1>
      <ul className="space-y-2">
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/dashboard/products/${product.id}`} className="text-blue-600 underline">
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
