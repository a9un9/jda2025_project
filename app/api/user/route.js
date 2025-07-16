let users = [
  { id: 1, name: "Agung Hutri", alamat: "Bandung" },
  { id: 2, name: "Ganteng Gaes", alamat: "Jakarta" },
];

export async function GET() {
  return Response.json(users);
}

export async function POST(req) {
  const body = await req.json();
  const newUser = { id: Date.now(), ...body };
  users.push(newUser);
  return Response.json({ message: "User added", data: newUser });
}

export async function PUT(req) {
  const body = await req.json();
  const index = users.findIndex((u) => u.id === body.id);
  if (index === -1) {
    return new Response(JSON.stringify({ message: "User not found" }), {
      status: 404,
    });
  }
  users[index] = { ...users[index], ...body };
  return Response.json({ message: "User updated", data: users[index] });
}

export async function DELETE(req) {
  const body = await req.json();
  const index = users.findIndex((u) => u.id === body.id);
  if (index === -1) {
    return new Response(JSON.stringify({ message: "User not found" }), {
      status: 404,
    });
  }
  const removed = users.splice(index, 1);
  return Response.json({ message: "User deleted", data: removed[0] });
}
