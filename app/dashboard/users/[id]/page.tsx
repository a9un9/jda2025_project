import Link from 'next/link';
import getBaseUrl from '@/app/lib/getBaseUrl';

type User = {
  id: number;
  name: string;
  alamat: string;
};

async function getUser(id: string): Promise<User | undefined> {
  const res = await fetch(`${getBaseUrl()}/api/user`, {
    cache: 'no-store',
  });

  if (!res.ok) return undefined;
  const data: User[] = await res.json();
  return data.find((u) => u.id === parseInt(id));
}

// ✅ pastikan tidak async di tipe params
export default async function UserDetail({ params }: UserDetailPageProps) {
  const user = await getUser(params.id);

  if (!user) {
    return <div>User tidak ditemukan</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Detail User</h1>
      <p><strong>Nama:</strong> {user.name}</p>
      <p><strong>Alamat:</strong> {user.alamat}</p>
      <br />
      <Link
        href="/dashboard/users"
        className="inline-block mt-4 text-blue-500 hover:text-blue-700 text-sm underline"
      >
        ← Kembali ke Menu User
      </Link>
    </div>
  );
}

type UserDetailPageProps = {
  params: {
    id: string;
  };
};
