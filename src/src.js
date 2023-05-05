// set the date to count from
var startDate = new Date("2019-12-16");

// function to update the counter
function updateCounter() {
  var currentDate = new Date();
  var timeDiff = currentDate.getTime() - startDate.getTime();
  var dayDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
  document.getElementById("counter").innerHTML = dayDiff + " days";
}

// update the counter on page load
updateCounter();

// update the counter every day
setInterval(updateCounter, 24 * 60 * 60 * 1000);
