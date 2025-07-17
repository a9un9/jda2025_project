import Link from 'next/link';

type User = {
  id: number;
  name: string;
  alamat: string;
};

async function getUser(id: string): Promise<User | undefined> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/user`, {
    cache: 'no-store',
  });

  if (!res.ok) return undefined;

  const data: User[] = await res.json();
  return data.find((u) => u.id === parseInt(id));
}

export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/user`, {
    cache: 'no-store',
  });

  const users: User[] = await res.json();

  return users.map((user) => ({
    id: user.id.toString(),
  }));
}
export default async function Page({ params }: any) {
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
