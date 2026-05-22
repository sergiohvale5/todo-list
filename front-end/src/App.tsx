import { useEffect, useState } from 'react';

import { api } from './service/api';

import "./style/app.css"

interface Task {
  id: number;
  title: string;
  completed: number;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState('');

  async function loadTasks() {
    const response = await api.get('/tasks');

    setTasks(response.data);
  }

  async function createTask() {
    if (!title.trim()) {
      return;
    }

    await api.post('/tasks', {
      title
    });

    setTitle('');

    loadTasks();
  }

  async function removeTask(id: number) {
    await api.delete(`/tasks/${id}`);

    loadTasks();
  }

  async function toggleTask(task: Task) {
    await api.put(`/tasks/${task.id}`, {
      title: task.title,
      completed: task.completed ? 0 : 1
    });

    loadTasks();
  }

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1>Todo-List</h1>

      </header>

      <div className="create-task">
        <input
          type="text"
          placeholder="Digite uma tarefa"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <button onClick={createTask}>
          Adicionar
        </button>
      </div>

      <div className="status">
        <span>
          Total: {tasks.length}
        </span>

        <span>
          Concluídas:{' '}
          {
            tasks.filter(
              task => task.completed
            ).length
          }
        </span>
      </div>

      <ul className="task-list">
        {tasks.map(task => (
          <li
            key={task.id}
            className="task-item"
          >
            <div className="task-content">
              <input
                type="checkbox"
                checked={!!task.completed}
                onChange={() =>
                  toggleTask(task)
                }
              />

              <span
                className={
                  task.completed
                    ? 'completed'
                    : ''
                }
              >
                {task.title}
              </span>
            </div>

            <button
              className="delete-button"
              onClick={() =>
                removeTask(task.id)
              }
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;