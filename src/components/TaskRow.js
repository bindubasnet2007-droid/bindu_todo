function TaskRow({ task }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="task-row">
      <div className="task-row-content">
        <input
          type="checkbox"
          checked={task.completed}
          readOnly
        />
        <div className="task-details">
          <div className="task-text">{task.text}</div>
          <div className="task-meta">
            <span className="task-category">{task.category}</span>
            <span className="task-date">Due {formatDate(task.dueDate)}</span>
            <span className="task-status">Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskRow;
