import React, { useState } from 'react';
import TodoItem from './CommonItem/TodoItem';

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleNewTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleTaskCreate = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
      setNewTask('');
    }
  };

  const handleTaskEdit = (taskId, newText) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, text: newText };
        }
        return task;
      })
    );
  };

  const handleTaskDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h1>ToDoList</h1>
      <input type="text" value={newTask} onChange={handleNewTaskChange} />
      <button onClick={handleTaskCreate}>Create Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="text"
              value={task.text}
              onChange={(event) => handleTaskEdit(task.id, event.target.value)}
            />
            <button onClick={() => handleTaskDelete(task.id)}>Delete Task</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
