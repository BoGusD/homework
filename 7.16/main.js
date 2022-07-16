

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
   if (todos.childElementCount >= 8) {
    // todo list 의 li 요소 중 첫번째 자식을 제일 먼저 만나므로 첫번째 자식을 반환
    const deleteLi = document.querySelector("#todo-list li");
    // 해당 자식을 삭제
    deleteLi.remove();
  }
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(todoInput.value));
    li.classList.add("item");
    todos.appendChild(li);
    todoInput.value = '';
    const Di= document.getElementById('todo-list');



};

