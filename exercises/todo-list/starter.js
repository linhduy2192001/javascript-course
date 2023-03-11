window.addEventListener("load", function () {
  const todoForm = document.querySelector(".todo-form");
  const todoList = document.querySelector(".todo-list");
  let todos = JSON.parse(localStorage.getItem("todoList")) || [];

  if (Array.isArray(todos) && todos.length > 0) {
    [...todos].forEach((item) => createTodo(item));
  }
  function createTodo(title) {
    const template = `
         <div class="todo-item">
          <span class="todo-text">${title}</span>
          <i class="fa fa-trash todo-remove" data-value="Learning english"></i>
        </div> `;
    todoList.insertAdjacentHTML("beforeend", template);
  }
  todoForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const todoValue = this.elements["todo"].value;
    createTodo(todoValue);

    todos.push(todoValue);
    localStorage && localStorage.setItem("todoList", JSON.stringify(todos));
    this.elements["todo"].value = "";

    //handleremove

    todoList.addEventListener("click", function (e) {
      if (e.target.matches(".todo-remove")) {
        //remove todo in dom
        const todo = e.target.parentNode;
        todo.parentNode.removeChild(todo);

        const todoText = e.target.previousElementSibling.textContent;

        const index = todos.findIndex((item) => item === todoText);
        console.log(todos.splice(index, 1));
        localStorage.setItem("todoList", JSON.stringify(todos));
      }
    });
  });
});
