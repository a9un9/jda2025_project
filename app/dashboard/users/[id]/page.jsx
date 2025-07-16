import { use } from 'react';
import Link from 'next/link';
import { getBaseUrl } from '../../../lib/getBaseUrl';

async function getUser(id) {
  const res = await fetch(`${getBaseUrl()}/api/user`, {
    cache: 'no-store',
  });

  const data = await res.json();
  return data.find((u) => u.id === parseInt(id));
}

export default async function UserDetail({ params }) {
  const user = await getUser(params.id);

  if (!user) {
    return <div>User tidak ditemukan</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Detail User</h1>
      <p><strong>Nama:</strong> {user.name}</p>
      <p><strong>Alamat:</strong> {user.alamat}</p>
        <br/>
        <Link
            href="/dashboard/users"
            className="inline-block mt-4 text-blue-500 hover:text-blue-700 text-sm underline"
        >
            ← Kembali ke Menu User
        </Link>
    </div>
  );
}
