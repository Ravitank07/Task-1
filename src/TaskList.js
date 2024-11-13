import React, { useState } from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, addTask, updateTask, deleteTask, toggleTaskCompletion }) {
  const [filter, setFilter] = useState('all');
  const [newTask, setNewTask] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      addTask(newTask.trim());
      setNewTask('');
    }
  };

  const filteredTasks = tasks.filter(task => 
    filter === 'completed' ? task.completed : filter === 'uncompleted' ? !task.completed : true
  );

  return (
    <div className="bg-white rounded shadow-lg p-6">
      <form onSubmit={handleAddTask} className="mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border border-gray-300 p-2 mr-2 rounded"
          placeholder="Add a new task..."
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
      </form>

      <div className="mb-4">
        <button onClick={() => setFilter('all')} className="mr-2">All</button>
        <button onClick={() => setFilter('completed')} className="mr-2">Completed</button>
        <button onClick={() => setFilter('uncompleted')}>Uncompleted</button>
      </div>

      <ul>
        {filteredTasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            updateTask={updateTask}
            deleteTask={deleteTask}
            toggleTaskCompletion={toggleTaskCompletion}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
