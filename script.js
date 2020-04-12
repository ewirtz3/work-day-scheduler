//add time blocks, in one hour increments from 9am to 5pm, each block has a save button on the right hand side that saves the info entered to local storage

//add current day at the top of the planner (moment)
var currentTime = moment().format("MMMM Do YYYY");
$("#currentDay").text(currentTime);

//variables for now (as a baseline time, use moment) and HTML time block (to change color relative to now)
var timeBlock = $(".hour");
var now = parseInt(moment().format("H"));

//function to check each hour block to see if it is past (gray), present (red), or future (green).
$.each(timeBlock, function (i, hour) {
  var hourId = parseInt($(this).attr("id"));
  if (hourId === now) {
    $(this).addClass("present");
  } else if (hourId < now) {
    $(this).addClass("past");
  } else if (hourId > now) {
    $(this).addClass("future");
  }
});

//text area, class = "event"; if Save button clicked, set item to local storage and persist; upon refresh, need to get item from local storage too

$(".saveBtn").on("click", function (event) {
  var calendarItem =
    event.target.parentElement.previousElementSibling.children[0].value;
  localStorage.setItem(event.target.attributes[0].value, calendarItem);
  // var calendarItem = localStorage.getItem("event");
  // $(".event").append(event);
});

$(document).ready(function () {
  for (var i = 0; i < localStorage.length; i++) {
    console.log(localStorage.getItem(localStorage.key(i)));
  }
});
