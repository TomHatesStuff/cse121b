/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name : "Luke Marshall",

    photo : "images/Headshot.png",

    favoriteFoods : [
        "Sushi",
        "Tapioca",
        "Steak",
        "Burger",
        "Chicken"],

    Hobbies : [
        "Skiing",
        "Working",
        "Being with my wife",
        "Lord of the Rings",
        "Harry Potter",
        "Star Wars"],
    
     placesLived : []
}

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        Place : 'Reno Nevada',
        Length : "12 Years"
    }
)

/* DOM Manipulation - Output */
/* Name */
document.querySelector("#name").textContent = myProfile.name ;
/* Photo with attributes */
let image = document.querySelector("#photo");
image.src = myProfile.photo;
image.alt = myProfile.name
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach (food=>{
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});
/* Hobbies List */
myProfile.Hobbies.forEach(Hobbie=>{
    let li = document.createElement("li");
    li.textContent = Hobbie
    document.querySelector("#hobbies").appendChild(li);
})

/* Places Lived DataList */

const dlElement = document.getElementById('places-lived');

myProfile.placesLived.forEach(place => {
    const dtElement = document.createElement('dt');
    dtElement.textContent = place.Place;
    const ddElement = document.createElement('dd');
    ddElement.textContent = place.Length;
    dlElement.appendChild(dtElement);
    dlElement.appendChild(ddElement);
});
