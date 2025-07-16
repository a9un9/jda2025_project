// lib/getBaseUrl.js
export function getBaseUrl() {
  if (typeof window !== 'undefined') return ''; // client-side
  return process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'; // server-side
}
