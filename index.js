// Task Manager Application - JavaScript

// DOM Elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Initialize the application
function init() {
    loadTasks();
    setupEventListeners();
    focusInputField();
}

// Setup event listeners
function setupEventListeners() {
    addBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
}

// Add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    
    // Validate input
    if (taskText === '') {
        return;
    }
    
    // Create task object
    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };
    
    // Add to localStorage
    let tasks = getTasks();
    tasks.push(task);
    saveTasks(tasks);
    
    // Clear input
    taskInput.value = '';
    taskInput.focus();
    
    // Reload tasks display
    loadTasks();
}

// Load and display tasks
function loadTasks() {
    const tasks = getTasks();
    taskList.innerHTML = '';
    
    if (tasks.length === 0) {
        taskList.innerHTML = '<div class="empty-message">No tasks added yet. Add one to get started!</div>';
        return;
    }
    
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        li.innerHTML = `
            <span class="task-text">${escapeHtml(task.text)}</span>
            <div class="task-actions">
                <button class="complete-btn ${task.completed ? 'undo' : ''}" onclick="toggleComplete(${task.id})"
                    title="${task.completed ? 'Mark as incomplete' : 'Mark as complete'}">
                    ${task.completed ? '↩ Undo' : '✓ Complete'}
                </button>
                <button class="delete-btn" onclick="deleteTask(${task.id})" title="Delete task">🗑 Delete</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

// Toggle task completion status
function toggleComplete(id) {
    let tasks = getTasks();
    tasks = tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
    );
    saveTasks(tasks);
    loadTasks();
}

// Delete a task
function deleteTask(id) {
    // Add animation to task item
    const taskItems = document.querySelectorAll('.task-item');
    taskItems.forEach(item => {
        if (item.innerHTML.includes(`onclick="toggleComplete(${id})`)) {
            item.style.animation = 'slideOutTask 0.3s ease-out forwards';
            setTimeout(() => {
                let tasks = getTasks();
                tasks = tasks.filter(task => task.id !== id);
                saveTasks(tasks);
                loadTasks();
            }, 300);
        }
    });
}

// Get tasks from localStorage
function getTasks() {
    const tasksJson = localStorage.getItem('tasks');
    return tasksJson ? JSON.parse(tasksJson) : [];
}

// Save tasks to localStorage
function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Escape HTML special characters to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Focus on input field
function focusInputField() {
    taskInput.focus();
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', init);
