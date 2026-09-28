import { useState } from 'react';

function TaskRow({ task, onToggleTask, onDeleteTask, onEditTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  const [editedCategory, setEditedCategory] = useState(task.category);
  const [editedDueDate, setEditedDueDate] = useState(task.dueDate);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setEditedText(task.text);
    setEditedCategory(task.category);
    setEditedDueDate(task.dueDate);
  };

  const handleSaveClick = () => {
    onEditTask(task.id, editedText, editedCategory, editedDueDate);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedText(task.text);
    setEditedCategory(task.category);
    setEditedDueDate(task.dueDate);
  };

  if (isEditing) {
    return (
      <div className="task-row editing">
        <div className="task-row-content">
          <div className="task-edit-form">
            <div className="edit-form-group">
              <label>Task</label>
              <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
              />
            </div>
            <div className="edit-form-group">
              <label>Category</label>
              <select
                value={editedCategory}
                onChange={(e) => setEditedCategory(e.target.value)}
              >
                <option value="Study">Study</option>
                <option value="Home">Home</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
              </select>
            </div>
            <div className="edit-form-group">
              <label>Due Date</label>
              <input
                type="date"
                value={editedDueDate}
                onChange={(e) => setEditedDueDate(e.target.value)}
              />
            </div>
            <div className="edit-form-actions">
              <button className="save-button" onClick={handleSaveClick}>
                Save
              </button>
              <button className="cancel-button" onClick={handleCancelClick}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`task-row ${task.completed ? 'completed' : ''}`}>
      <div className="task-row-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
        />
        <div className="task-details">
          <div className="task-text">{task.text}</div>
          <div className="task-meta">
            <span className="task-category">{task.category}</span>
            <span className="task-date">Due {formatDate(task.dueDate)}</span>
            <span className="task-status">{task.completed ? 'Done' : 'Active'}</span>
          </div>
        </div>
        <div className="task-actions">
          <button
            className="edit-button"
            onClick={handleEditClick}
          >
            Edit
          </button>
          <button
            className="delete-button"
            onClick={() => onDeleteTask(task.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskRow;
