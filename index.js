import { endianness } from "os";

/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(str) { 
  let hh = str.split(":")[0];
  let hInt = parseInt(hh);
  if (hInt < 12) {
    return "Good Morning";
    }  else if (hInt > 12 && hInt < 17) {
    return "Good Afternoon";
     } else {
    return "Good Evening";
  }
};

function displayMessage(str) {
document.getElementById("greeting").innerText = str;
};