import { NextRequest, NextResponse } from 'next/server';

let users = [
  { id: 1, name: "Agung Hutri", alamat: "Bandung" },
  { id: 2, name: "Ganteng Gaes", alamat: "Jakarta" },
];

// GET all users
export async function GET() {
  return NextResponse.json(users);
}

// POST new user
export async function POST(req: NextRequest) {
  const body = await req.json();
  const newUser = { id: Date.now(), ...body };
  users.push(newUser);
  return NextResponse.json({ message: "User added", data: newUser });
}

// PUT update user
export async function PUT(req: NextRequest) {
  const body = await req.json();
  const index = users.findIndex((u) => u.id === body.id);
  if (index === -1) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }
  users[index] = { ...users[index], ...body };
  return NextResponse.json({ message: "User updated", data: users[index] });
}

// DELETE user
export async function DELETE(req: NextRequest) {
  const body = await req.json();
  const index = users.findIndex((u) => u.id === body.id);
  if (index === -1) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }
  const removed = users.splice(index, 1);
  return NextResponse.json({ message: "User deleted", data: removed[0] });
}
