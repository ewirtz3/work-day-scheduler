//add time blocks, in one hour increments from 9am to 5pm, each block has a blue save button on the right hand side that saves the info entered to local storage

//add current day at the top of the planner (moment)
var currentTime = moment().format("MMMM Do YYYY");
$("#currentDay").text(currentTime);

//variables for now (as a baseline time, use moment) and HTML time block (to change color relative to now)
var timeBlock = $(".hour");
console.log(timeBlock);
var now = moment().format("h");
console.log(now);

//function to check each hour block to see if it is past (gray), present (red), or future (green). parseInt(hourId) <>= now doesn't work, 10 > 1 but 10am is before 1pm...maybe try comparing index in hour array? if hour[i]><=hour[j]; how to do that?
$.each(timeBlock, function (i, hour) {
  console.log(hour);
  var hourId = $(this).attr("id");
  console.log(hourId);
});

//text area, class = "event"; if Save button clicked, setItemToLocalStorage and persist until Save is not clicked; upon refresh, need to getItemFromLocalStorage too

//$(".saveBtn").on("click", function (event) {
//  localStorage.setItem("event", $(".event"));
//  var event = localStorage.getItem("event");
//  localStorage.clear();
//})
