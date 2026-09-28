import TopBar from './components/TopBar';
import ProgressInfo from './components/ProgressInfo';
import StatusTabs from './components/StatusTabs';
import QuickAdd from './components/QuickAdd';
import TaskSection from './components/TaskSection';

function App() {
  return (
    <div className="app-container">
      <div className="main-content">
        <TopBar />
        <ProgressInfo />
        <StatusTabs />
        <QuickAdd />
        <TaskSection />
      </div>
    </div>
  );
}

export default App;
