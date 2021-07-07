/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(time){
  let hm = time.split(":")
  let tf = parseInt(hm)
  if (tf < 12) {
    return "Good Morning"
  }
  else if (tf > 17) {
    return "Good Evening"
  }
  else {
    return "Good Afternoon"
  }
}

function displayMessage(string) {
  document.getElementById("greeting").innerText = string 
}


/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
