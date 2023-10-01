/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */

/* Function Definition - Add Numbers */
function add(number1, number2) 
{
    return number1 + number2;
}

function AddNumbers ()
{
let AddNumber1 = Number (document.querySelector("#add1").value)
let AddNumber2 = Number (document.querySelector("#add2").value)

document.querySelector ("#sum").value = add(AddNumber1, AddNumber2);
}
document.querySelector("#addNumbers").addEventListener("click", AddNumbers)
/* Function Expression - Subtract Numbers */
function subtract (number1, number2)
{
    return number1 - number2;
}
function SubtractNumbers ()
{
    let SubtractNumber1 = Number (document.querySelector("#subtract1").value)
    let SubtractNumber2 = Number (document.querySelector("#subtract2").value)

    document.querySelector ("#difference").value = subtract(SubtractNumber1, SubtractNumber2)
}
document.querySelector("#subtractNumbers").addEventListener("click", SubtractNumbers)

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;
const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector("#factor1").value);
    let factor2 = Number(document.querySelector("#factor2").value);
  
    document.querySelector("#product").value = multiply(factor1, factor2);
  };
  document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(number2, number1)
{
    return number1 / number2;
}
function DivideNumbers ()
{
    let divisor = Number (document.querySelector("#divisor").value)
    let dividend = Number (document.querySelector("#dividend").value)

    document.querySelector ("#quotient").value = divide(dividend, divisor)
}
document.querySelector("#divideNumbers").addEventListener("click", DivideNumbers);

/* Decision Structure */
const currentDate = new Date()
let currentyear;
currentYear = currentDate.getFullYear();
document.querySelector("#year").textContent = currentYear;
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
document.querySelector("#array").textContent = numbersArray;

/* Output Odds Only Array */

const odd = numbersArray.filter(number => number % 2 !== 0);
const oddNumbers = odd.join(', ');
document.querySelector('#odds').textContent = oddNumbers;

/* Output Evens Only Array */

const even = numbersArray.filter(number => number % 2 === 0);
const evenNumbers = even.join(', ');
document.querySelector('#evens').textContent = evenNumbers;

/* Output Sum of Org. Array */

const sum = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

document.querySelector('#sumOfArray').textContent = sum;

/* Output Multiplied by 2 Array */

const multipliedArray = numbersArray.map(number => number * 2);

const multiplied = multipliedArray.join(', ');

document.querySelector('#multiplied').textContent = multiplied;

/* Output Sum of Multiplied by 2 Array */

const sumOfMultiplied = multipliedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Assign the result to the HTML element with ID "sumOfMultiplied"
document.querySelector('#sumOfMultiplied').textContent = sumOfMultiplied;