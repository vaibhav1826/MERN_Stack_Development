import { useState } from "react";

export default function TodoInput({ addTodo }) {
  const [task, setTask] = useState("");


  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    addTodo(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task..."
        className="border border-gray-400 rounded p-2 w-64"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
}
