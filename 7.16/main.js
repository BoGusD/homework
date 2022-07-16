

const todos= document.querySelector("#todo-list");
const button = document.querySelector(".submit");
const todoInput= document.querySelector('#todo-input');


button.addEventListener("click", onSubmit)

function onSubmit(e) {
    e.preventDefault();

    if(todoInput.value === ''){
        msg.style.display = 'block';
        setTimeout(()=>msg.style.display='none', 1000)
        return;
    }
    else if(todos.childElementCount===8){
    todos.classList.remove("item");
    }
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(todoInput.value));
    li.classList.add("item");
    todos.appendChild(li);
    todoInput.value = '';



};

