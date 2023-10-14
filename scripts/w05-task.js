/* W05: Programming Tasks */

// Step 1: Declare a const variable named templesElement
const templesElement = document.getElementById("temples");

// Step 2: Declare a global empty array variable to store a list of temples
const templeList = [];

// Step 3: Declare a function expression named displayTemples
const displayTemples = (temples) => {
  // Clear existing content
  templesElement.innerHTML = '';

  temples.forEach((temple) => {
    // Create an HTML <article> element
    const article = document.createElement("article");

    // Create an HTML <h3> element
    const h3 = document.createElement("h3");
    h3.textContent = temple.templeName;

    // Create an HTML <img> element
    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.location;

    // Append the <h3> element and the <img> element to the <article> element
    article.appendChild(h3);
    article.appendChild(img);

    // Append the <article> element to the global templesElement
    templesElement.appendChild(article);
  });
};

// Step 4: Declare a function expression named getTemples
const getTemples = async () => {
  try {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    const templeData = await response.json();
    templeList.push(...templeData);

    // Call the displayTemples function and pass it the list of temples (templeList)
    displayTemples(templeList);
  } catch (error) {
    console.error("An error occurred while fetching temple data:", error);
  }
};

// Step 5: Declare a function expression named reset
const reset = () => {
  templesElement.innerHTML = '';
};

// Step 6: Declare a function expression named sortBy
const sortBy = (temples) => {
  // Call the reset function to clear the output
  reset();

  // Define a variable named filter that obtains the value of the HTML element with the ID of sortBy
  const filter = document.getElementById("sortBy").value;

  // Use a switch statement to filter the temples parameter based on the selected option
  switch (filter) {
    case "utah":
      displayTemples(temples.filter(temple => temple.location.includes("Utah")));
      break;
    case "notutah":
      displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
      break;
    case "older":
      displayTemples(temples.filter(temple => new Date(temple.dedicated) <= new Date("1950-01-01")));
      break;
    case "all":
      displayTemples(temples);
      break;
  }
};

// Add a change event listener to the HTML element with an ID of sortBy
document.getElementById("sortBy").addEventListener("change", () => {
  // Call the sortBy function and send an arrow function result with the templeList as the argument
  sortBy(templeList);
});

// Call getTemples to fetch and display temple data initially
getTemples();



/* Event Listener */
