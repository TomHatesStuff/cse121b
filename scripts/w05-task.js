/* W05: Programming Tasks */

// Declare a const variable named templesElement
const templesElement = document.getElementById("temples");

// Declare a global empty array variable to store a list of temples
let templeList = [];

// Declare a function expression using const named displayTemples
const displayTemples = (temples) => {
  // Clear existing temple data
  templesElement.innerHTML = "";

  // Create a container for the row
  let rowContainer = document.createElement("div");
  rowContainer.classList.add("row");

  temples.forEach((temple, index) => {
    // Create an HTML <article> element
    const article = document.createElement("article");

    // Create an HTML <h3> element and add the temple's templeName property
    const h3 = document.createElement("h3");
    h3.textContent = temple.templeName;

    // Create an HTML <img> element
    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.location;

    // Append the <h3> element and the <img> element to the <article> element
    article.appendChild(h3);
    article.appendChild(img);

    // Append the <article> element to the current row
    rowContainer.appendChild(article);

    // If we've reached three items or the end of the list, create a new row
    if ((index + 1) % 3 === 0 || index === temples.length - 1) {
      templesElement.appendChild(rowContainer);
      rowContainer = document.createElement("div");
      rowContainer.classList.add("row");
    }
  });
};

// Create a function expression called getTemples (async)
const getTemples = async () => {
  try {
    // Fetch temple data from the provided URL
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    const templeData = await response.json();

    // Assign the result to the templeList global array variable
    templeList = templeData;

    // Call the displayTemples function with the templeList
    displayTemples(templeList);
  } catch (error) {
    console.error("Error fetching temple data:", error);
  }
};

// Add a change event listener to the select element with the ID of sortBy
document.getElementById("sortBy").addEventListener("change", () => {
  sortBy(templeList);
});

// Call the getTemples function to initially populate the temple data
getTemples();

/* Event Listener */
