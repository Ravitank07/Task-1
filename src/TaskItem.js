import React, { useState } from 'react';

function TaskItem({ task, updateTask, deleteTask, toggleTaskCompletion }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleUpdateTask = () => {
    if (editedTitle.trim()) {
      updateTask(task.id, editedTitle.trim());
      setIsEditing(false);
    }
  };

  return (
    <li className="flex items-center mb-2">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
        className="mr-2"
      />
      {isEditing ? (
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          className="border p-1 mr-2 rounded flex-1"
        />
      ) : (
        <span className={`flex-1 ${task.completed ? 'line-through' : ''}`}>
          {task.title}
        </span>
      )}
      {isEditing ? (
        <button
          onClick={handleUpdateTask}
          className="bg-green-500 text-white px-2 py-1 rounded ml-2"
        >
          Update
        </button>
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          className="bg-blue-500 text-white px-2 py-1 rounded ml-2"
        >
          Edit
        </button>
      )}
      <button
        onClick={() => deleteTask(task.id)}
        className="text-red-500 ml-2"
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
