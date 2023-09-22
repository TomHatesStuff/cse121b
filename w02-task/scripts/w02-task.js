/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Luke Marshall";
let currentyear = new Date().getFullYear();
let profilePicture = "images/Headshot.png";

/* Step 3 - Element Variables */
const nameElement = document.getElementById ("name");
const foodElement = document.getElementById ("food");
const yearElement = document.querySelector ("#year");
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentyear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */
const favoriteFoods = ["Pizza", "Sushi", "Chocolate", "Burgers", "Ice Cream"];
foodElement.innerHTML = favoriteFoods.join("<br>");

const newFood = "ice cream";
favoriteFoods.push(newFood);
foodElement.innerHTML += `<br>${newFood}`;

favoriteFoods.shift();
foodElement.innerHTML += "<br>" + favoriteFoods.join("<br>");

favoriteFoods.pop();
foodElement.innerHTML += "<br>" + favoriteFoods.join("<br>");