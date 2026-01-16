import { useState } from "react";

type Props = {
  readonly onAdd: (title: string) => void;
};

export function TodoInput({ onAdd }: Props) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const title = value.trim();
    if (!title) return;

    onAdd(title);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-5">
      <input
        className="border rounded-md p-2"
        type="text"
        value={value}
        placeholder="What needs to be done?"
        onChange={(e) => setValue(e.target.value)}
        aria-label="Add todo"
      />
      <button className="border-black px-5 py-2 rounded-md bg-blue-500 shadow-lg shadow-blue-500/50 text-white"  type="submit">Add</button>
    </form>
  );
}
