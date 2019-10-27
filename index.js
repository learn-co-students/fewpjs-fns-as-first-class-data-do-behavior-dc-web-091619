/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  let splitTime = time.split(':');
  let hourNum = parseInt(splitTime, 10);
  if (hourNum < 12) {
    return "Good Morning"
  }
  if (hourNum > 12 && hourNum < 17) {
    return "Good Afternoon"
  }
  if (hourNum > 17) {
    return "Good Evening"
  }
}

function displayMessage(string) {
  let element = document.querySelector("h1#greeting");
  element.innerText = string
}

/* Write your implementation of displayMessage() */


