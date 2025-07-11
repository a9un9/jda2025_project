import { UserIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Acme Dashboard',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 md:px-20">
      <section className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Tentang Kami</h1>
        <p className="text-gray-600 text-lg mb-10">
          Kami adalah sekelompok pengembang yang percaya bahwa ngoding bisa serius, tapi tampilannya harus tetap santai.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex flex-col items-center">
            <UserIcon className="h-12 w-12 text-blue-500 mb-2" />
            <h2 className="text-xl font-semibold text-gray-800">Siapa Kami</h2>
            <p className="text-gray-600 text-sm text-center mt-1">
              Kami adalah tim developer yang senang debug sambil ngopi, dan percaya bahwa commit bagus diawali dengan mood bagus.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <SparklesIcon className="h-12 w-12 text-blue-500 mb-2" />
            <h2 className="text-xl font-semibold text-gray-800">Misi Kami</h2>
            <p className="text-gray-600 text-sm text-center mt-1">
              Membuat aplikasi yang cepat, rapi, dan tidak bikin pengguna mikir keras (apalagi harus tanya ke grup).
            </p>
          </div>
        </div>

      </section>
    </main>
  );
}
