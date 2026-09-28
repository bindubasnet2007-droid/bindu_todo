import TaskRow from './TaskRow';

function TaskSection({ tasks, onToggleTask, onDeleteTask, onEditTask }) {
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
