// table 변수 선언
const calendar = document.querySelector("table");

// 클릭 된 요소를 저장하기 위한 전역 변수
let targetEl;


calendar.addEventListener("click", function (e) {
  console.log(e.target.tagName);
  // 클릭된 요소의 종류에 따라 각각의 기능을 수행
  if (e.target.tagName === "P") {
    console.log("!");
    
    // 날짜(P 태그)가 클릭이 되면 부모 요소를 전역 변수에 저장하여 위치 전달
    date.value = e.target.textContent;
    
    targetEl = e.target.parentNode;
    
  } else if (e.target.tagName === "DIV") {
    console.log("@");
    // 추가 된 TASK(DIV 요소로 추가)가 클릭이 되면 삭제
    e.target.remove();
  } else {
    // 테이블 TD가 클릭 되면 TD를 전역 변수에 저장하여 위치 전달
    date.value = e.target.firstChild.textContent;
    targetEl = e.target;
    
  }
});
// 지금과 같이 부모요소를 선택해줘도 됨
// else if (e.traget.tagName === "TD") {
//   date.value = e.traget.querySelector("p").textContent;
//   targetEl = e.traget;
// }

// 작성 버튼이 클릭 되면 실행되는 함수
function writeSchedule() {
  let content = document.querySelector("#content");

  let addEl = document.createElement("div");
  addEl.innerText = content.value;
  //추가적으로 밑줄을 사용해서 로직 활용 << feat 준우
// addEl.addeventlisnter("click", function(){
//   if(addEl.style.textdecoration === "line-through"){
//     addEl.remove();
//   } else{
//     addEl.style="text-decoration: line-thorugh";
//   }
//2-2의 방법
// addEl.setAttribute("onclick", "deleteTask(this);");

// })

  // 전역 변수에 저장된 요소의 위치를 사용하여 입력 받은 input 내용을 추가
  targetEl.append(addEl);

  // input의 text를 초기화
    content.value = "";
}
//2-2의 방법
// function deleteTask(t) {
//  t.remove();
// }