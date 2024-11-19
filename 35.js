//35. Viết một chương trình quản lý danh sách công việc (to-do list) với khả năng thêm, sửa và xóa công việc.


let todos = []; 


document.getElementById("addButton").addEventListener("click", addTodo);

function addTodo() {
  const inputElement = document.getElementById("add");
  const todoText = inputElement.value;

  if (todoText !== "") {
    todos.push(todoText);
    inputElement.value = "";
    displayTodos();
  } else {
    alert("Vui lòng nhập nội dung công việc!");
  }
}

function displayTodos() {
  const todoListElement = document.querySelector("#Todolist ul");
  todoListElement.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function() {
      editTodo(index);
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
      deleteTodo(index);
    });

    li.appendChild(editButton);
    li.appendChild(deleteButton);
    todoListElement.appendChild(li);
  });
}

function editTodo(index) {
  const newTodo = prompt("Nhập nội dung mới:", todos[index]);
  if (newTodo !== null && newTodo !== "") {
    todos[index] = newTodo;
    displayTodos();
  }
}

function deleteTodo(index) {
  todos.splice(index, 1);
  displayTodos();
}
