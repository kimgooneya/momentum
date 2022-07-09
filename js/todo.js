const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function loadTodos()
{
    toDos = localStorage.getItem(TODOS_KEY);

    if(toDos !== null){
        const parsedTodos = JSON.parse(toDos);
        parsedTodos.forEach(paintTodo);
    }
}

function saveTodo(){    
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    
    const span = document.createElement("span");
    span.innerText = newTodo;
    
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();    
    const newTodo = toDoInput.value;
    toDoInput.value="";
    
    if(toDos === null)
    {
        toDos = [newTodo];
    }
    else
    {
        toDos.push(newTodo);
    }

    paintTodo(newTodo);    
    saveTodo();
}


toDoForm.addEventListener("submit",handleToDoSubmit);

loadTodos();

