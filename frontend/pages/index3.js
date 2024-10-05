import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  // Fetch tasks from the Flask API
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  // Function to add a new task
  const addTask = async () => {
    if (task.trim() === '') return;
    try {
      const response = await axios.post('http://127.0.0.1:5000/tasks', { title: task });
      setTasks([...tasks, response.data]); // Update state
      setTask(''); // Clear input
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  // Function to delete a task
  const deleteTask = async (id) => {
    if (confirm("Are you sure you want to delete this task?")) {
      try {
        await axios.delete(`http://127.0.0.1:5000/tasks/${id}`);
        setTasks(tasks.filter(t => t.id !== id)); // Update state
      } catch (error) {
        console.error('Error deleting task:', error);
      }
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Add a new task" 
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map(t => (
          <li key={t.id}>
            {t.title}
            <button onClick={() => deleteTask(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
