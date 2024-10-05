// frontend/pages/index.js
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [loading, setLoading] = useState(true); // Add loading state

  // Fetch tasks from Flask API on component mount
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };
    fetchTasks();
  }, []);

  // Add a new task
  const addTask = async () => {
    if (task === '') return; // Prevent adding empty tasks
    try {
      const response = await axios.post('http://127.0.0.1:5000/tasks', { title: task });
      setTasks([...tasks, response.data]); // Update the state with the new task
    } catch (error) {
      console.error('Error adding task:', error);
    }
    setTask(''); // Clear the input field after adding a task
  };

  // Delete a task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/tasks/${id}`);
      setTasks(tasks.filter(task => task.id !== id)); // Update state after deleting
    } catch (error) {
      console.error('Error deleting task:', error);
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

      {loading ? ( // Display loading state
        <p>Loading tasks...</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              {task.title}
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
