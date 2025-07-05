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
    removeBtn.textContent = 'Remove';
    editBtn.textContent = 'Edit task';
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
    const todoItem = event.target.parentNode;
    todoList.removeChild(todoItem);
}

function editTodo(event) {
    const todoItem = event.target.parentNode;
    todoList.replaceChild(newNode, todoItem);
}