//add time blocks, in one hour increments from 9am to 5pm, each block has a blue save button on the right hand side that saves the info entered to local storage
//past time blocks (relative to current time - need moment) are gray
//future time blocks are green
//current time blocks are red
//add current day at the top of the planner (moment)

var currentTime = moment().format("MMMM Do YYYY");
$("#currentDay").text(currentTime);

var timeBlock = $(".hour");
console.log(timeBlock);
var now = moment().format("hh");
console.log(now);
$.each(timeBlock, function (i, hour) {
  console.log(hour);
  $(this).attr("id");
  console.log($(this).attr("id"));
});
