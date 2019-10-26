/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timestring) {
  const time = parseInt(timestring, 10)
  if (time < 12) {
    return "Good Morning"
  } else if (12 < time && time < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

function displayMessage(string) {
  document.querySelector("#greeting").innerText = string
}