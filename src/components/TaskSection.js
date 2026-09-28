import TaskRow from './TaskRow';

function TaskSection({ tasks, onToggleTask, onDeleteTask }) {
  return (
    <div className="task-section">
      {tasks.map((task) => (
        <TaskRow
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
}

export default TaskSection;
