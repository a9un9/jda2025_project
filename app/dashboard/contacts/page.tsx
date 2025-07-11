import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Acme Dashboard',
};

export default function ContactPage() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-gradient-to-br from-white to-white px-4 py-12">
      {/* <div className="w-full max-w-xl rounded-xl bg-white p-8 shadow-2xl"> */}
      
      <section className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">
          Hubungi Kami
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Kami di sini bukan hanya untuk membalas email, tapi juga untuk membalas cinta (kode). 💙
        </p>

        <div className="space-y-5 text-gray-700 text-base">
          <div className="flex items-center gap-4">
            <EnvelopeIcon className="h-6 w-6 text-blue-500" />
            <span>agunghutri@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <PhoneIcon className="h-6 w-6 text-blue-500" />
            <span>+62 821-1010-7914</span>
          </div>
          <div className="flex items-center gap-4">
            <MapPinIcon className="h-6 w-6 text-blue-500" />
            <span>Menara Coding, Jl. ReactJS No. 2025, Jonggol</span>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
          Kami membalas lebih cepat dari CI/CD pipeline yang gagal. 🚀
        </div>
      </section>
      {/* </div> */}
    </main>
  );
}
