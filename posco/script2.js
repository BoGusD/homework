var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');





var list1 = document.getElementById("list1");
function display1(){
	console.log(list1.style.display)
	if(list1.style.display=='none'){
		list1.style.display= 'block';
	}else{
		list1.style.display = 'none';
	}
}
function display2(){
	var list2 = document.getElementById("list2");
	if(list2.style.display=='none'){
		list2.style.display = 'block';
	}else{
		list2.style.display = 'none';
	}
}
function display3(){
	var list3 = document.getElementById("list3");
	if(list3.style.display=='none'){
		list3.style.display = 'block';
	}else{
		list3.style.display = 'none';
	}
}
function display4(){
	var list4 = document.getElementById("list4");
	if(list4.style.display=='none'){
		list4.style.display = 'block';
	}else{
		list4.style.display = 'none';
	}
}