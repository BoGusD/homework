

// input 값
const $content = document.querySelector("#content");
const $date = document.querySelector("#date");
// 작성버튼
const $submit  = document.querySelector("button");
let number;

// 1. 해당 날짜를 누르면 날짜가 날짜 입력 창에 자동으로 입력
const $table = document.querySelector("table");
$table.addEventListener("click", function(e){
  if(e.target.tagName === "P" ){
    $date.value = e.target.textContent;   
    console.log(e.target);
    number = e.target.textContent;
  }
});


// 2. 작성 버튼 누르면 내용이 해당 날짜에 div 요소로 추가됨
$submit.addEventListener('click', writeSchedule);

function writeSchedule(){
  // number가 들어있는 query를 찾아서 거기에 입력
  const allPs = document.querySelectorAll('p')
  
  allPs.forEach((ele, i)=>{
    if(ele.textContent == number){
     
      textValue = document.createElement("div");
      textValue.innerHTML = $content.value; 
      textValue.addEventListener('click', deleteMe)
      
      ele.appendChild(textValue);
    }
  })

  // 같은 로직
  // for(let i=0; i<allPs.length; i++){
  //   if(allPs[i].textContent == number){
  //     textValue = document.createElement("div");
  //     textValue.innerHTML = $content.value; 
  //     textValue.addEventListener('click', deleteMe)
  //     allPs[i].appendChild(textValue);
  //   }
  // }

  function deleteMe(e){
    // 부모를 찾아서 자식 삭제
    // console.log('e.target.parentNode',e.target.parentNode)
    // console.log('e.target',e.target)
    // console.log('e.target.childNode',e.target.childNode)
    e.target.innerHTML = '';
  }
}