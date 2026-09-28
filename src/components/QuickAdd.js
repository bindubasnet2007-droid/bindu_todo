import { useState } from 'react';

function QuickAdd({ onAddTask }) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('Study');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === '') {
      return;
    }

    const newTask = {
      id: Date.now(),
      text: text,
      category: category,
      dueDate: dueDate,
      completed: false,
      createdAt: new Date().toISOString().split('T')[0]
    };

    onAddTask(newTask);

    setText('');
    setCategory('Study');
    setDueDate('');
  };

  return (
    <div className="quick-add">
      <form onSubmit={handleSubmit} className="quick-add-form">
        <div className="form-group">
          <label htmlFor="task-text">Task</label>
          <input
            type="text"
            id="task-text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter task description"
          />
        </div>

        <div className="form-group">
          <label htmlFor="task-category">Category</label>
          <select
            id="task-category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Study">Study</option>
            <option value="Home">Home</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="task-date">Due Date</label>
          <input
            type="date"
            id="task-date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>

        <button type="submit" className="add-button">Add Task</button>
      </form>
    </div>
  );
}

export default QuickAdd;
