import type { Todo } from "@/types";

export const fetchTodosApi = (): Promise<Todo[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: "1", title: "Learn Redux", completed: false },
        { id: "2", title: "Learn RTK", completed: true },
      ]);
    }, 1000);
  });
