import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:4000/tasks';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    axios.get(API_URL).then((res) => setTasks(res.data));
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const res = await axios.post(API_URL, { title });
    setTasks([...tasks, res.data]);
    setTitle('');
  };

  const toggleCompleted = async (task) => {
    const res = await axios.patch(`${API_URL}/${task._id}`, {
      completed: !task.completed,
    });
    setTasks(tasks.map((t) => (t._id === res.data._id ? res.data : t)));
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setTasks(tasks.filter((t) => t._id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg bg-indigo-400">
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Todo Widget</h1>

      <form onSubmit={handleAdd} className="flex mb-6">
        <input
          type="text"
          placeholder="Nouvelle tâche..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-gray-800 flex-grow px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
        >
          Add
        </button>
      </form>

      <ul className="space-y-3">
        {tasks.map((task) => (
          <li
            key={task._id}
            className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-md"
          >
            <span
              onClick={() => toggleCompleted(task)}
              className={`cursor-pointer ${
                task.completed ? 'line-through text-gray-500' : 'text-gray-800'
              }`}
            >
              {task.title}
            </span>
            <button
              onClick={() => handleDelete(task._id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
