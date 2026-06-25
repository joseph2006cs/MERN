# Task Manager

A simple yet effective task management application built with vanilla JavaScript, HTML, and CSS. Organize your daily tasks and boost productivity with a clean, intuitive interface.

## Features

- ✅ **Add Tasks** - Quickly add new tasks with a single click or by pressing Enter
- ✅ **Mark Complete** - Toggle tasks between completed and pending states
- ✅ **Delete Tasks** - Remove tasks you no longer need
- ✅ **Local Storage** - Your tasks persist automatically across browser sessions
- ✅ **Dark Mode UI** - Easy on the eyes with a modern dark theme
- ✅ **Responsive Design** - Works seamlessly on desktop and mobile devices

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No installation or build process required

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/task-manager.git
   cd task-manager
   ```

2. Open the application:
   - Simply open `index.html` in your web browser
   - Or use a local server for better development experience:
     ```bash
     python -m http.server 8000
     # or
     npx http-server
     ```

3. Navigate to `http://localhost:8000` (or your server's port)

## Usage

1. **Adding a Task**: Type your task in the input field and click "Add Task" or press Enter
2. **Completing a Task**: Click the checkbox next to a task to mark it as complete
3. **Deleting a Task**: Click the trash icon to remove a task from your list
4. **Data Persistence**: All tasks are automatically saved to your browser's local storage

## Project Structure

```
task-manager/
├── index.html       # Main HTML structure
├── index.css        # Styling and layout
├── index.js         # Application logic
├── README.md        # Project documentation
└── .git/            # Version control
```

## Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Styling with modern flexbox layout
- **Vanilla JavaScript** - Core application logic without frameworks
- **Local Storage API** - Client-side data persistence

## Features in Detail

### Task Management
- Create tasks with descriptive text
- Mark tasks as complete/incomplete
- Delete individual tasks
- Tasks are stored locally in your browser

### User Interface
- Clean, minimalist design
- Dark theme for comfortable viewing
- Responsive layout that adapts to screen size
- Smooth interactions and transitions

### Data Persistence
- All tasks are automatically saved to browser's local storage
- Tasks persist even after closing the browser
- No server or database required

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] Add task categories/tags
- [ ] Implement task due dates
- [ ] Add priority levels
- [ ] Create task editing functionality
- [ ] Export tasks to JSON/CSV
- [ ] Dark/Light theme toggle
- [ ] Task filtering and sorting options

## Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Author

Created by [Your Name]

## Support

If you encounter any issues or have suggestions, please open an issue on the GitHub repository.

---

**Happy task managing!** ✨
