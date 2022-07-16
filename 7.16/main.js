

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
    //todolist가 8개인 상황에서 하나 li를 제거해서 8줄 유지
    if(todos.childElementCount===8){
    todos.classList.remove("todos:nth-child(1)");
    }
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(todoInput.value));
    li.classList.add("item");
    todos.appendChild(li);
    todoInput.value = '';



};

