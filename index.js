/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {
  let hour = time.slice(0,2);
  let realtime = parseInt(hour, 10);
  if (realtime < 12) {
    return "Good Morning"
  }
  if (realtime > 12 && realtime < 17) {
    return "Good Afternoon"
  }
  if (realtime > 17) {
    return "Good Evening"
  }
}

function displayMessage(string) {
  document.getElementById('greeting').innerText = string;
}
