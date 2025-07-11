import { type Metadata } from 'next';
import { UserCircleIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: 'Profile | Acme Dashboard',
};

export default function ProfilePage() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center px-4 py-10">
      {/* <div className="w-full max-w-md rounded-xl bg-white shadow-lg p-6"> */}
      
      <section className="max-w-3xl mx-auto text-center">
        <div className="flex flex-col items-center text-center">
          <UserCircleIcon className="h-24 w-24 text-blue-500 mb-4" />
          <h1 className="text-2xl font-semibold text-gray-800">Agung Hutri</h1>
          <p className="text-sm text-gray-500">Fullstack Developer</p>
        </div>

        <div className="mt-6 border-t pt-4">
          <h2 className="text-sm font-semibold text-gray-700 mb-2">Tentang Saya</h2>
          <p className="text-sm text-gray-600">
            Seorang pengembang web yang doyan ngoding sampai lupa waktu. Ahli bikin aplikasi modern pakai React, Next.js, dan PostgreSQL—kopi adalah dependency utama. 
            Suka tantangan, anti panik, dan selalu siap debug di kala senja. ☕💻
          </p>
        </div>
      </section>
      {/* </div> */}
    </main>
  );
}
