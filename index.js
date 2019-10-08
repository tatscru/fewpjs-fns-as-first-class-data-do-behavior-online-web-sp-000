/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeString) {
  // console.log(parseInt(timeString.split(':')[0]))
  let hour = parseInt(timeString.split(':')[0])

  if (hour < 12){
    return "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    return "Good Afternoon";
  } else if (hour >= 17) {
    return "Good Evening";
  }
}

function displayMessage(string) {
  var text = string.textContent;
  text.textContent = "TEST";
}



/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
