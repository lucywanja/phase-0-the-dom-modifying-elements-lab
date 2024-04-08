// Write your code here!

// Remove the main
main.remove()

// new header that point to the h1 node
 const newHeader = document.createElement("h1")

 //  newHeader has and Id =victory

 newHeader.setAttribute("id", "victory");

// new header with node victory has the text your name is the champion

const yourName = "Lucy";

newHeader.textContent = yourName + "is the champion";