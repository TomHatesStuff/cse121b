/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullname = "Luke Marshall";
const currentyear = Date().getFullYear();
const profilePicture = "images/headshot.png";
const singlefood = "ice cream";

/* Step 3 - Element Variables */
const nameElement = document.getElementById ("name");
const foodElement = document.getElementById ("food");
const yearElement = document.querySelector ("#year");
const photoElement = document.querySelector("#profilePicture");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullname}</strong>`;
yearElement.textContent = currentyear;
photoElement.setAttribute ("src", profilePicture);
photoElement.setAttribute ("alt", `profile picture of ${fullname}` );

/* Step 5 - Array */
const favoriteFoods = ["Pizza", "Sushi", "Chocolate", "Burgers", "Ice Cream"];
const singleFavoriteFood = "Pasta";
favoriteFoods.push(singleFavoriteFood);
const foodList = favoriteFoods.join('<br>');
foodElement.innerHTML += `<br>${foodList}`;
favoriteFoods.shift();
foodList = favoriteFoods.join('<br>');
foodElement.innerHTML = `<br>${foodList}`;
favoriteFoods.pop();
foodList = favoriteFoods.join('<br>');
foodElement.innerHTML += `<br>${foodList}`;
