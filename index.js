/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet () */
function greet(strTime) {
  let splitTime = strTime.split(':')
  let parsedTime = parseInt(splitTime[0])
  if (parsedTime < 12) {
    return "Good Morning"
  } else if (parsedTime > 11 && parsedTime < 17) {
    return "Good Afternoon"
  } else if (parsedTime > 17) {
    return "Good Evening"
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(str) {
  let newGreeting = document.getElementById('greeting')
  newGreeting.innerText = str
}


