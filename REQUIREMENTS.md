# React Assignment Requirements

This document outlines how DayBoard fulfills the React assignment requirements.

## Functional Components

All components in the project are functional components. No class components are used.

**Components:**
- App.js
- TopBar.js
- QuickAdd.js
- TaskRow.js
- TaskSection.js
- StatusTabs.js
- ProgressInfo.js

## Reusable Components

The project is structured with reusable components that separate concerns:

- **TopBar**: Displays the application header
- **ProgressInfo**: Shows task completion statistics
- **StatusTabs**: Manages status and category filtering
- **QuickAdd**: Handles task creation form
- **TaskSection**: Renders the list of tasks
- **TaskRow**: Displays individual task (reused for each task in the list)

## Props

Data and functions are passed from parent components to child components using props:

- **App → ProgressInfo**: Passes `totalTasks`, `completedTasks`, `remainingTasks`
- **App → StatusTabs**: Passes `activeTab`, `setActiveTab`, `categoryFilter`, `setCategoryFilter`
- **App → QuickAdd**: Passes `onAddTask` callback
- **App → TaskSection**: Passes `tasks`, `allTasks`, `onToggleTask`, `onDeleteTask`, `onEditTask`
- **TaskSection → TaskRow**: Passes `task`, `onToggleTask`, `onDeleteTask`, `onEditTask`

## Callback Props

Functions are passed as props to allow child components to communicate with parent components:

- **onAddTask**: Passed from App to QuickAdd for adding new tasks
- **onToggleTask**: Passed from App through TaskSection to TaskRow for toggling completion
- **onDeleteTask**: Passed from App through TaskSection to TaskRow for deleting tasks
- **onEditTask**: Passed from App through TaskSection to TaskRow for editing tasks
- **setActiveTab**: Passed from App to StatusTabs for changing status filter
- **setCategoryFilter**: Passed from App to StatusTabs for changing category filter

## useState

The `useState` hook is used throughout the project to manage component state:

**In App.js:**
- `useState(getInitialTasks())` - Manages the tasks array
- `useState('All')` - Manages active status tab
- `useState('All Categories')` - Manages category filter

**In QuickAdd.js:**
- `useState('')` - Manages task text input
- `useState('Study')` - Manages category selection
- `useState('')` - Manages due date input

**In TaskRow.js:**
- `useState(false)` - Manages edit mode state
- `useState(task.text)` - Manages edited text
- `useState(task.category)` - Manages edited category
- `useState(task.dueDate)` - Manages edited due date

## useEffect

The `useEffect` hook is used in App.js for localStorage persistence:

```javascript
useEffect(() => {
  try {
    localStorage.setItem('dayboard-tasks', JSON.stringify(tasks));
  } catch (error) {
    console.error('Error saving tasks to localStorage:', error);
  }
}, [tasks]);
```

This effect runs whenever the `tasks` state changes, automatically saving tasks to localStorage. The dependency array `[tasks]` ensures the effect only runs when tasks are modified.

## Controlled Form

The QuickAdd component implements a controlled form where all form inputs are controlled by React state:

- **Task text input**: `value={text}` and `onChange={(e) => setText(e.target.value)}`
- **Category select**: `value={category}` and `onChange={(e) => setCategory(e.target.value)}`
- **Due date input**: `value={dueDate}` and `onChange={(e) => setDueDate(e.target.value)}`

The form submission is handled with `onSubmit={handleSubmit}`, which prevents default behavior and validates input before adding the task.

## List Rendering

The TaskSection component uses `.map()` to render a list of tasks:

```javascript
{tasks.map((task) => (
  <TaskRow
    key={task.id}
    task={task}
    onToggleTask={onToggleTask}
    onDeleteTask={onDeleteTask}
    onEditTask={onEditTask}
  />
))}
```

Each TaskRow receives a unique `key` prop using the task's ID, not the array index.

## Conditional Rendering

Conditional rendering is used throughout the project:

**In TaskSection.js:**
- Shows empty state message when no tasks exist
- Shows filtered empty state when filters return no results
- Shows task list when tasks are available

**In TaskRow.js:**
- Switches between view mode and edit mode based on `isEditing` state
- Shows "Done" or "Active" status based on `task.completed`
- Applies `completed` CSS class conditionally

**In App.js:**
- Filters tasks based on status tab and category filter

## Filtering

Multiple filtering mechanisms work together:

**Status Filtering:**
- **All**: Shows all tasks
- **Today**: Shows incomplete tasks due today
- **Upcoming**: Shows incomplete tasks with future due dates
- **Done**: Shows completed tasks

**Category Filtering:**
- Filter by Study, Home, Work, Personal, or All Categories

**Combined Filtering:**
Both status and category filters work together using AND logic - a task must match both the status filter AND the category filter to be displayed.

## Responsive Design

The application is fully responsive using CSS media queries:

**Breakpoints:**
- Tablet: max-width 768px
- Mobile: max-width 700px
- Small mobile: max-width 400px

**Responsive Features:**
- Form fields stack vertically on smaller screens
- Task content adjusts for mobile layout
- Buttons adapt to available width
- Text sizes scale appropriately
- No horizontal overflow on any screen size

## Persistence

Tasks are persisted using browser localStorage:

**Loading tasks:**
- On component mount, tasks are loaded from localStorage using `getInitialTasks()`
- If no saved tasks exist, default sample tasks are shown

**Saving tasks:**
- useEffect automatically saves tasks whenever they change
- Uses `localStorage.setItem()` with JSON stringification
- Handles errors gracefully with try-catch blocks

**localStorage key:** `dayboard-tasks`

## Summary

DayBoard demonstrates all required React concepts in a practical, easy-to-understand project. The code is simple, well-organized, and suitable for explaining during a viva. All functionality works together to create a complete task management application with persistent data storage.
