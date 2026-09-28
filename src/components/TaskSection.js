import TaskRow from './TaskRow';

function TaskSection({ tasks }) {
  return (
    <div className="task-section">
      {tasks.map((task) => (
        <TaskRow key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskSection;
