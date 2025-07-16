'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function UserPage() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: '', alamat: '' });
  const [editId, setEditId] = useState(null);

  const fetchUsers = async () => {
    const res = await fetch('/api/user');
    const data = await res.json();
    setUsers(data);
  };

  const handleSubmit = async () => {
    if (editId) {
      await fetch('/api/user', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: editId, ...form }),
      });
    } else {
      await fetch('/api/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    }
    setForm({ name: '', alamat: '' });
    setEditId(null);
    fetchUsers();
  };

  const handleDelete = async (id) => {
    await fetch('/api/user', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    fetchUsers();
  };

  const handleEdit = (user) => {
    setForm({ name: user.name, alamat: user.alamat });
    setEditId(user.id);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">{editId ? 'Edit User' : 'Tambah User'}</h2>
      <div className="mb-4">
        <input
          placeholder="Nama"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          placeholder="Alamat"
          value={form.alamat}
          onChange={(e) => setForm({ ...form, alamat: e.target.value })}
          className="border p-2 mr-2"
        />
        <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 mr-2">
          {editId ? 'Update' : 'Tambah'}
        </button>
        {editId && (
          <button
            onClick={() => {
              setEditId(null);
              setForm({ name: '', alamat: '' });
            }}
            className="bg-gray-500 text-white px-4 py-2"
          >
            Batal
          </button>
        )}
      </div>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="mb-2">
            {/* {user.name} - {user.alamat} */}
            <Link
              href={`/dashboard/users/${user.id}`}
              className="text-blue-600 hover:underline hover:text-blue-800 transition"
            >
              {user.name} - {user.alamat}
            </Link>
            <button
              onClick={() => handleEdit(user)}
              className="ml-2 text-yellow-500"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(user.id)}
              className="ml-2 text-red-500"
            >
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
