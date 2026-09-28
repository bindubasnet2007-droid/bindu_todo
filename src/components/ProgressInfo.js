function ProgressInfo({ totalTasks, completedTasks, remainingTasks }) {
  return (
    <div className="progress-info">
      <div className="progress-text">
        <span className="progress-main">
          {completedTasks} of {totalTasks} tasks completed
        </span>
        <span className="progress-remaining">{remainingTasks} remaining</span>
      </div>
    </div>
  );
}

export default ProgressInfo;
