

// Get the main element with id 'main'
const mainElement = document.getElementById('main');

// Remove the main element if it exists
if (mainElement) {
  mainElement.remove();
}

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Set the id of the new <h1> element to 'victory'
newHeader.id = 'victory';

// Set the inner text of the <h1> element
newHeader.textContent = 'Earl is the champion'; // Replace YOUR-NAME with the actual name

// Append the new <h1> element to the document body or any other suitable parent element
document.body.appendChild(newHeader);




