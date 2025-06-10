import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/api/tasks/${editingId}`, {
          title,
          description
        });
        setEditingId(null);
      } else {
        await axios.post('http://localhost:5000/api/tasks', {
          title,
          description
        });
      }
      setTitle('');
      setDescription('');
      fetchTasks();
    } catch (error) {
      console.error('Error saving task:', error);
    }
  };

  const handleEdit = (task) => {
    setTitle(task.title);
    setDescription(task.description);
    setEditingId(task._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const toggleComplete = async (task) => {
    try {
      await axios.put(`http://localhost:5000/api/tasks/${task._id}`, {
        completed: !task.completed
      });
      fetchTasks();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div className="app">
      <h1>Task Manager</h1>
      
      <form onSubmit={handleSubmit} className="task-form">
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">
          {editingId ? 'Update Task' : 'Add Task'}
        </button>
        {editingId && (
          <button type="button" onClick={() => {
            setTitle('');
            setDescription('');
            setEditingId(null);
          }}>
            Cancel
          </button>
        )}
      </form>

      <div className="task-list">
        {tasks.length === 0 ? (
          <p>No tasks yet. Add one above!</p>
        ) : (
          tasks.map((task) => (
            <div key={task._id} className={`task ${task.completed ? 'completed' : ''}`}>
              <div className="task-info">
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <small>
                  {new Date(task.createdAt).toLocaleDateString()}
                </small>
              </div>
              <div className="task-actions">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(task)}
                />
                <button onClick={() => handleEdit(task)}>Edit</button>
                <button onClick={() => handleDelete(task._id)}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
