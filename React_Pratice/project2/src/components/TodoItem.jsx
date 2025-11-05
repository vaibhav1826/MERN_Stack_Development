export default function TodoItem({ task, index, deleteTodo }) {
  return (
    <div className="flex justify-between items-center bg-white shadow p-2 mb-2 rounded">
      <span>{task}</span>
      <button
        onClick={() => deleteTodo(index)}
        className="text-red-500 hover:text-red-700"
      >
        delete
      </button>
    </div>
  );
}
