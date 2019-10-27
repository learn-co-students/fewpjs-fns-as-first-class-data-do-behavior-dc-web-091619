/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(arg){
  const timeArr=arg.split(":")
  const hour = parseInt(timeArr[0])
  if (hour<12){
    return "Good Morning";
  } else if (hour > 12 && hour <17){
    return "Good Afternoon";
  } else if (hour > 17){
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(string){
  document.getElementById("greeting").innerText = string;
}