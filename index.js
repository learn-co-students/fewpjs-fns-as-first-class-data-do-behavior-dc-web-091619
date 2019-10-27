/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let splitTime = time.split(':')[0]
  const hour = parseInt(splitTime, 10);
  if (hour < 12) {
    return 'Good Morning'
  } else if (hour > 17) {
    return 'Good Evening'
  } else {
    return 'Good Afternoon'
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(message) {
  document.getElementById('greeting').innerText = message;
}
