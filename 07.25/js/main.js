const subMenu = document.querySelector('#snb .sub_menu');
const snbBtn = document.querySelector("#snb .btn_menu");


snbBtn.addEventListener("click", function() {
  if(subMenu.classList.contains("hide")){
    subMenu.classList.remove("hide");
  }else {
   subMenu.classList.add("hide");
  }    
})

function display(name){
	let list = document.getElementById(name);
	if(list.style.display=='none'){
		list.style.display = 'block';
	}else{
		list.style.display = 'none';
	}
}
  window.onload = () => {
    const textEL = document.querySelector("figure .text");
    textEL.classList.add("animate");
   };


