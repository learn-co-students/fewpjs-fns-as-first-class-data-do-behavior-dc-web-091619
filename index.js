/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeString){
  let hoursAndMins = timeString.split(":");
  let hour = parseInt(hoursAndMins[0]);
  let greeting;

  if (hour < 12){
    greeting = "Good Morning";
  } else if (hour < 17) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return greeting;
}

function displayMessage(msg){
  document.getElementById('greeting').innerText = msg;
}