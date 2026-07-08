// src/api/fakeApi.ts
export type Post = {
  id: number;
  title: string;
  body: string;
};

const posts: Post[] = [
  { id: 1, title: "First Post", body: "This is the first post." },
  { id: 2, title: "Second Post", body: "This is the second post." },
  { id: 3, title: "Third Post", body: "This is the third post." }
];

export function fetchPosts(options?: { shouldFail?: boolean; delayMs?: number }): Promise<Post[]> {
  const shouldFail = options?.shouldFail ?? false;
  const delayMs = options?.delayMs ?? 800;

  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Failed to load posts"));
        return;
      }

      resolve(posts);
    }, delayMs);
  });
}