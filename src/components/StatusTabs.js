function StatusTabs({ activeTab, setActiveTab, categoryFilter, setCategoryFilter }) {
  const tabs = ['Today', 'Upcoming', 'Done', 'All'];
  const categories = ['All Categories', 'Study', 'Home', 'Work', 'Personal'];

  return (
    <div className="filter-container">
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
      <div className="category-filter">
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="category-select"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default StatusTabs;
