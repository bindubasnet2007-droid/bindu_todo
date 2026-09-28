function TaskRow({ task, onToggleTask, onDeleteTask }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

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
