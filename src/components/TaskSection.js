import TaskRow from './TaskRow';

function TaskSection({ tasks, allTasks, onToggleTask, onDeleteTask, onEditTask }) {
  if (allTasks.length === 0) {
    return (
      <div className="task-section">
        <div className="empty-state">
          <p className="empty-title">Your planner is empty</p>
          <p className="empty-subtitle">Add a task above to start planning your day.</p>
        </div>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="task-section">
        <div className="empty-state">
          <p className="empty-title">Nothing here</p>
          <p className="empty-subtitle">Try another status or category.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="task-section">
      {tasks.map((task) => (
        <TaskRow
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
          onEditTask={onEditTask}
        />
      ))}
    </div>
  );
}

export default TaskSection;
