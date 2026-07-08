// src/tests/searchUsers.spec.ts
import { describe, expect, it } from "vitest";

type User = {
  id: number;
  name: string;
  email: string;
};

function filterUsers(users: User[], searchText: string): User[] {
  // Candidate can implement this
  return users;
}

describe("filterUsers", () => {
  const users: User[] = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com" },
    { id: 2, name: "Bob Smith", email: "bob@example.com" },
    { id: 3, name: "Carlos Rivera", email: "carlos@example.com" }
  ];

  it("filters by name", () => {
    expect(filterUsers(users, "alice")).toHaveLength(1);
  });

  it("filters by email", () => {
    expect(filterUsers(users, "bob@example")).toHaveLength(1);
  });

  it("returns all users for an empty search", () => {
    expect(filterUsers(users, "")).toHaveLength(3);
  });
});