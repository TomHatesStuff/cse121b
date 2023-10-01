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
document.querySelector("#subtractNumber").addEventListener("click", SubtractNumbers)

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
document.querySelector("#DivideNumber").addEventListener("click", DivideNumbers);

/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
