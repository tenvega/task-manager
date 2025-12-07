# Task Manager

A modern, fully-featured task management application built with React. This project demonstrates fundamental and advanced React concepts through a clean, intuitive interface with smooth animations and persistent data storage.

## Purpose

This project was created as a learning exercise to master React fundamentals and modern frontend development practices. It serves as a portfolio piece showcasing component architecture, state management, user experience design, and attention to detail in implementation.

## Features

### Core Functionality
- **Create Tasks**: Add new tasks with validation to prevent empty entries
- **Read Tasks**: View all tasks with real-time status updates
- **Update Tasks**:
  - Mark tasks as complete or incomplete with checkboxes
  - Edit task text by double-clicking (press Enter to save, Escape to cancel)
- **Delete Tasks**: Remove individual tasks or bulk delete all completed tasks

### Filtering and Organization
- **Filter by Status**: View all tasks, only active tasks, or only completed tasks
- **Task Counter**: Real-time display of active and completed task counts
- **Clear Completed**: Bulk remove all completed tasks with one click

### User Experience
- **LocalStorage Persistence**: Tasks survive page refreshes and browser restarts
- **Keyboard Support**: Press Enter to quickly add tasks without clicking
- **Input Validation**: Disabled submit button when input is empty
- **Smooth Animations**:
  - Fade-in animations for new tasks and dynamic elements
  - Fade-out with collapse animations when deleting tasks
  - Hover effects with subtle scaling and shadows
  - Visual feedback throughout the interface

### Architecture
- **Component Composition**: Modular design with TaskItem and TaskInput components
- **Props and State Management**: Clean data flow using React hooks
- **React Hooks**: Implementation of useState and useEffect for state and side effects
- **Responsive Design**: Clean, centered layout with professional styling

## Technologies Used

- **React** - UI library with hooks (useState, useEffect)
- **Vite** - Fast build tool and development server
- **CSS3** - Custom styling with animations and transitions
- **LocalStorage API** - Browser-based data persistence
- **Git** - Version control with meaningful commit history

## Installation and Setup

1. Clone the repository:
```bash
git clone https://github.com/tenvega/task-manager.git
cd task-manager
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser to the provided localhost URL (typically http://localhost:5173)

## Usage

- **Add a task**: Type in the input field and press Enter or click "Add Task"
- **Complete a task**: Click the checkbox next to the task
- **Edit a task**: Double-click the task text, make changes, and press Enter
- **Delete a task**: Click the "Delete" button next to the task
- **Filter tasks**: Use the All/Active/Completed buttons to filter your view
- **Clear completed**: Click "Clear Completed Tasks" to remove all finished tasks

## Learning Outcomes

This project demonstrates proficiency in:
- React component architecture and composition
- State management with hooks
- Event handling and user interactions
- Conditional rendering and dynamic UI updates
- Array manipulation methods (map, filter, some, findIndex)
- Browser APIs (localStorage)
- CSS animations and transitions
- DOM manipulation for advanced animations
- Debugging and problem-solving
- Git workflow and version control

## Future Enhancements

Potential features to explore:
- Deploy to production (Vercel/Netlify)
- Add due dates and task priorities
- Implement categories or tags
- Add search/filter by text
- Drag-and-drop task reordering
- Dark mode toggle
- Backend integration with authentication
- Sync across devices

## License

This project is open source and available for educational purposes.
