const todoList =[];

function add(){
  const inputName = document.querySelector('.js-todo-box');
  const name = inputName.value;
  const inputDate = document.querySelector('.js-date-box');
  const dueDate = inputDate.value;
  todoList.push({name, dueDate});
  inputName.value = '';
  inputDate.value = '';
  renderTodoList();
}
function renderTodoList(){
  let todoListHTML = '';
  for (let i= 0; i< todoList.length; i++){
    const todoObject = todoList[i];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    const html = `
    <div class="name">${name}</div> 
    <div class="dueDate">${dueDate}</div>
    <button class="delete" onclick="
    todoList.splice(${i}, 1);
    renderTodoList();
    ">Delete</button>
    `;
    todoListHTML += html;
  }
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}
//test 0.1.12
