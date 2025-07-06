// Get references to HTML elements
const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');

// Add event listener to button
addTodoBtn.addEventListener('click', addTodo);

// Define the addTodo function
function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText === '') {
        return;
    }

    const todoItem = document.createElement('li');
    const todoSpan = document.createElement('span');
    todoSpan.textContent = todoText;
    const removeBtn = document.createElement('button');
    const editBtn = document.createElement('button');
    removeBtn.innerHTML = '<i class="fas fa-trash"></i>';
    editBtn.innerHTML = '<i class="fas fa-edit"></i>';
    removeBtn.title = 'Remove';
    editBtn.title = 'Edit task';
    removeBtn.onclick = removeTodo;
    editBtn.onclick = editTodo;
    todoItem.appendChild(todoSpan);
    todoItem.appendChild(removeBtn);
    todoItem.appendChild(editBtn);
    todoList.appendChild(todoItem);
    // console.log(todoText);
    todoInput.value = '';
}

// Define the removeTodo function
function removeTodo(event) {
    const todoItem = event.target.closest('li');
    todoList.removeChild(todoItem);
}

function editTodo(event) {
    const todoItem = event.target.closest('li');
    const todoSpan = todoItem.querySelector('span');
    const newText = prompt('Edit your task:', todoSpan.textContent);
    if (newText !== null && newText.trim() !== '') {
        todoSpan.textContent = newText.trim();
    }   
}

// Add a keydown event listener to the input field
todoInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});

// Function to check if the list is empty and show/hide the message
function checkEmptyList() {
    const emptyListMessage = document.getElementById('empty-list-message');
    if (todoList.children.length === 0) {
        emptyListMessage.style.display = 'block';
    } else {
        emptyListMessage.style.display = 'none';
    }
} 
// Call checkEmptyList initially to set the correct state
checkEmptyList();   
// Add an observer to the todoList to check for changes
const observer = new MutationObserver(checkEmptyList);      
observer.observe(todoList, {
    childList: true,
    subtree: false
}); 
// Add a listener to the todoList to check for changes
todoList.addEventListener('DOMNodeInserted', checkEmptyList);   
todoList.addEventListener('DOMNodeRemoved', checkEmptyList);
// Add a listener to the todoInput to check for changes
todoInput.addEventListener('input', function() {
    const emptyListMessage = document.getElementById('empty-list-message');
    if (todoInput.value.trim() === '') {
        emptyListMessage.style.display = 'block';
    } else {
        emptyListMessage.style.display = 'none';
    }
});     

// Add a listener to the addTodoBtn to check for changes
addTodoBtn.addEventListener('click', function() {
    const emptyListMessage = document.getElementById('empty-list-message');
    if (todoList.children.length > 0) {
        emptyListMessage.style.display = 'none';
    } else {
        emptyListMessage.style.display = 'block';
    }
}); 