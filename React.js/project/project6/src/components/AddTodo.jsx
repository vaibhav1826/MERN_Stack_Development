import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')
  }

  return (
    <form
      onSubmit={addTodoHandler}
      className="flex flex-col sm:flex-row items-center gap-4 mt-12 max-w-xl mx-auto"
    >
      <input
        type="text"
        className="w-full sm:w-auto flex-1 bg-gray-800 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-600 text-base outline-none text-gray-100 py-2 px-4 leading-6 transition-all duration-300 ease-in-out shadow-md placeholder-gray-400"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 rounded-lg text-lg font-medium shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo
