import { useState } from 'react';
import TopBar from './components/TopBar';
import ProgressInfo from './components/ProgressInfo';
import StatusTabs from './components/StatusTabs';
import QuickAdd from './components/QuickAdd';
import TaskSection from './components/TaskSection';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Finish React assignment",
      category: "Study",
      dueDate: "2026-09-30",
      completed: false,
      createdAt: "2026-09-28"
    },
    {
      id: 2,
      text: "Buy groceries for dinner",
      category: "Home",
      dueDate: "2026-09-28",
      completed: false,
      createdAt: "2026-09-28"
    },
    {
      id: 3,
      text: "Submit project report",
      category: "Work",
      dueDate: "2026-10-01",
      completed: false,
      createdAt: "2026-09-28"
    },
    {
      id: 4,
      text: "Call dentist for appointment",
      category: "Personal",
      dueDate: "2026-09-29",
      completed: false,
      createdAt: "2026-09-28"
    }
  ]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleToggleTask = (taskId) => {
    setTasks(tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  const handleDeleteTask = (taskId) => {
    if (window.confirm('Delete this task?')) {
      setTasks(tasks.filter((task) => task.id !== taskId));
    }
  };

  return (
    <div className="app-container">
      <div className="main-content">
        <TopBar />
        <ProgressInfo />
        <StatusTabs />
        <QuickAdd onAddTask={handleAddTask} />
        <TaskSection
          tasks={tasks}
          onToggleTask={handleToggleTask}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
}

export default App;
