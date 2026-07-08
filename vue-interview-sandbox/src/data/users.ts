// src/data/users.ts
export type User = {
  id: number;
  name: string;
  email: string;
  role: "admin" | "editor" | "viewer";
};

export const users: User[] = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "admin" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", role: "editor" },
  { id: 3, name: "Carlos Rivera", email: "carlos@example.com", role: "viewer" },
  { id: 4, name: "Dana Lee", email: "dana@example.com", role: "viewer" }
];