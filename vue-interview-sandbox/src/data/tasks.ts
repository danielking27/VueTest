// src/data/tasks.ts
export type InterviewTask = {
  id: number;
  title: string;
  completed: boolean;
};

export const initialTasks: InterviewTask[] = [
  { id: 1, title: "Review pull request", completed: false },
  { id: 2, title: "Fix login bug", completed: false },
  { id: 3, title: "Update documentation", completed: true }
];