const addForm = document.querySelector('form.add');
const todoList = document.querySelector('.todos');
const search = document.querySelector('.search input');

// template html
const template = todo => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="fa-solid fa-trash-can delete"></i>
    </li>
  `;

  todoList.innerHTML += html;
};

// add to-do item
addForm.addEventListener('submit', e => {
  e.preventDefault();
  const todoItem = addForm.add.value.trim();

  if (todoItem) {
    template(todoItem);
    addForm.reset();
  }
});

// delete to-do item
todoList.addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});

const filterTodos = (term) => {
  Array.from(todoList.children)
    .filter((todo) => {
      return !todo.textContent.toLowerCase().includes(term);
    })
    .forEach((todo) => {
      todo.classList.add('filtered');
    })

    Array.from(todoList.children)
    .filter((todo) => {
      return todo.textContent.toLowerCase().includes(term);
    })
    .forEach((todo) => {
      todo.classList.remove('filtered');
    })
};

// keyup event
search.addEventListener('keyup', () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});