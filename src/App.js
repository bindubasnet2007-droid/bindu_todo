import { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import ProgressInfo from './components/ProgressInfo';
import StatusTabs from './components/StatusTabs';
import QuickAdd from './components/QuickAdd';
import TaskSection from './components/TaskSection';

function App() {
  const getInitialTasks = () => {
    try {
      const savedTasks = localStorage.getItem('dayboard-tasks');
      if (savedTasks) {
        return JSON.parse(savedTasks);
      }
    } catch (error) {
      console.error('Error loading tasks from localStorage:', error);
    }
    return [
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
    ];
  };

  const [tasks, setTasks] = useState(getInitialTasks());

  const [activeTab, setActiveTab] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All Categories');

  useEffect(() => {
    try {
      localStorage.setItem('dayboard-tasks', JSON.stringify(tasks));
    } catch (error) {
      console.error('Error saving tasks to localStorage:', error);
    }
  }, [tasks]);

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

  const handleEditTask = (taskId, updatedText, updatedCategory, updatedDueDate) => {
    setTasks(tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          text: updatedText,
          category: updatedCategory,
          dueDate: updatedDueDate
        };
      }
      return task;
    }));
  };

  const today = new Date().toISOString().split('T')[0];

  const visibleTasks = tasks.filter((task) => {
    let statusMatch = false;
    if (activeTab === 'All') {
      statusMatch = true;
    } else if (activeTab === 'Done') {
      statusMatch = task.completed === true;
    } else if (activeTab === 'Today') {
      statusMatch = task.dueDate === today && task.completed === false;
    } else if (activeTab === 'Upcoming') {
      statusMatch = task.dueDate > today && task.completed === false;
    }

    let categoryMatch = false;
    if (categoryFilter === 'All Categories') {
      categoryMatch = true;
    } else {
      categoryMatch = task.category === categoryFilter;
    }

    return statusMatch && categoryMatch;
  });

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const remainingTasks = totalTasks - completedTasks;

  return (
    <div className="app-container">
      <div className="main-content">
        <TopBar />
        <ProgressInfo
          totalTasks={totalTasks}
          completedTasks={completedTasks}
          remainingTasks={remainingTasks}
        />
        <StatusTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
        />
        <QuickAdd onAddTask={handleAddTask} />
        <TaskSection
          tasks={visibleTasks}
          onToggleTask={handleToggleTask}
          onDeleteTask={handleDeleteTask}
          onEditTask={handleEditTask}
        />
      </div>
    </div>
  );
}

export default App;
