function StatusTabs({ activeTab, setActiveTab }) {
  const tabs = ['Today', 'Upcoming', 'Done', 'All'];

  return (
    <div className="status-tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tab-button ${activeTab === tab ? 'active' : ''}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default StatusTabs;
