

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

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(todoInput.value));
    li.classList.add("item");
    todos.appendChild(li);
    todoInput.value = '';
    //8개이상일 때 맨 윗줄 삭제
    const di = document.removeChild("todo-list");
    di.appendChild(document.removeChild(todoInput.value));
    if(di.childElementCount===8){
        di.classList.remove("item");

    }
};

