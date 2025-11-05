import TodoItem from "./TodoItem";

export default function TodoList({ todos, deleteTodo }) {
  return (
    <div className="w-80">
      {todos.length === 0 ? (
        <p className="text-gray-600">No tasks yet!</p>
      ) : (
        todos.map((todo, index) => (
          <TodoItem
            key={index}
            task={todo}
            index={index}
            deleteTodo={deleteTodo}
          />
        ))
      )}
    </div>
  );
}
