// pages/index.js

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [filter, setFilter] = useState('all'); // Filter state for tasks

  // Fetch tasks from Flask API on component mount
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

  // Add a new task
  const addTask = async () => {
    if (task.trim() === '') return; // Prevent adding empty tasks
    try {
      const response = await axios.post('http://127.0.0.1:5000/tasks', { title: task });
      setTasks([...tasks, response.data]); // Update the state with the new task
      setTask(''); // Clear the input field after adding a task
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  // Delete a task
  const deleteTask = async (id) => {
    if (!confirm("Are you sure you want to delete this task?")) return; // Confirmation dialog
    try {
      await axios.delete(`http://127.0.0.1:5000/tasks/${id}`);
      setTasks(tasks.filter(task => task.id !== id)); // Update state after deleting
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  // Toggle task completion
  const toggleTaskCompletion = async (id) => {
    try {
      await axios.patch(`http://127.0.0.1:5000/tasks/${id}`);
      setTasks(tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      ));
    } catch (error) {
      console.error('Error toggling task completion:', error);
    }
  };

  // Filter tasks based on filter state
  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true; // For 'all' tasks
  });

  return (
    <div className="container">
      <h1>To-Do List</h1>

      <div className="task-input">
        <input 
          type="text" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          placeholder="Add a new task" 
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="filter-buttons">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('incomplete')}>Incomplete</button>
      </div>

      <ul>
        {filteredTasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <span onClick={() => toggleTaskCompletion(task.id)}>{task.title}</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          text-align: center;
          background: #f8f8f8;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
          color: #333;
        }
        .task-input {
          margin-bottom: 20px;
        }
        input {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          width: 70%;
        }
        button {
          padding: 10px 15px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          margin-left: 10px;
        }
        button:hover {
          background-color: #005bb5;
        }
        .filter-buttons {
          margin: 20px 0;
        }
        .filter-buttons button {
          margin-right: 10px;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 10px 0;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          background: #fff;
        }
        li.completed {
          text-decoration: line-through;
          color: #999;
        }
      `}</style>
    </div>
  );
}
