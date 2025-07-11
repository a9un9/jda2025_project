
import { type Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Customer | Acme Dashboard',
};

export default function Page() {
  const data = null;

  if (!data) {
    notFound();
  }

  return <p>Customer page</p>;
}