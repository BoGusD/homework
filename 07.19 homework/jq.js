let traget;

let currentTarget;

$("td").on("click", function(e) {
  traget = e.traget;
  currentTarget = e.currentTarget;
  if($(traget).prop("tagName")== "DIV") {
    $(traget).remove();
  }else{
    $("#date").val($(currentTarget).text());
  }

  $("#date").val($(currentTarget).text());
});
// document.querySelector("td").addEventListener

function writeSchedule() {
  let task = $("#content").val();

  $(currentTarget).append(`<div>${task}</div>`);
  $("#content").val("");
}