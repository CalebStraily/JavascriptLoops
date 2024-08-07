/*
const favFruits = ["pineapple", "orange", "strawberry", "grapes"];

let fruit = "strawberry";

for (let i = 0; i < favFruits.length; i++)
{
    if (fruit == favFruits[i])
    {
        console.log("I'm in da Basket!")
    }
    else
    {
        console.log("Not in the string");
    }
}

for (let i = 0; i < 5; i++)
{
    console.log("Monday is an amazing day to start the week.");
}

let seasons = ["Fall", "Winter", "Spring", "Summer"];

for (let i = 0; i < seasons.length; i++)
{
    //Display all season on the websites console
    console.log(`Current iterated season: ${seasons[i]}`);
}

*/

//EXERCISES

//EX. 1
//List of Favorite Movies
//TODO Define an array of favorite movies
//Output each movie individually

/*

let favoriteMovies = ["Cory in the House: All Star Edition", "Night at the Museum", "Paul Blart: Mall Cop"];

for (let i = 0; i < favoriteMovies.length; i++)
{
    console.log(`Movie #${i+1}: ${favoriteMovies[i]}`);
}

//EX. 2
//Sum of Array Elements
//TODO Define an array of 5 numbers
//TODO Calculate sum of the numbers
//Output the result

let numbersArray = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbersArray.length; i++)
{
    sum += numbersArray[i];  
}
console.log(`Sum of numbers: ${sum}`);

//EX. 3
//Update Array Elements
//TODO Define an array of items
//let colors = ["red", "blue", "green", "yellow", "purple"];
//TODO Update
//green to cyan
//purple to orange
//Output the results

let colors = ["red", "blue", "green", "yellow", "purple"];

for (let i = 0; i < colors.length; i++)
{
    switch(colors[i])
    {
        case "green":
            colors[i] = "cyan";
            break;
        case "purple":
            colors[i] = "orange";
            break;
        default:
            break;
    }
}

console.log(colors);

//EX. 4
//Grade Categorizer
//TODO Define a array of 5 grade numbers
//TODO Categorize each grade
//output each result

let gradeNumbers = [54, 96, 82, 73, 101, "bruh"];

for (let i = 0; i < gradeNumbers.length; i++)
{
    switch(true)
    {
        case (gradeNumbers[i] <= 100 && gradeNumbers[i] >= 93):
            console.log(`${gradeNumbers[i]} is an A.`);
            break;
        case (gradeNumbers[i] <= 92 && gradeNumbers[i] >= 84):
            console.log(`${gradeNumbers[i]} is a B.`);
            break;
        case (gradeNumbers[i] <= 83 && gradeNumbers[i] >= 74):
            console.log(`${gradeNumbers[i]} is a C.`);
            break;
        case (gradeNumbers[i] <= 73 && gradeNumbers[i] >= 64):
            console.log(`${gradeNumbers[i]} is a D.`);
            break;
        case (gradeNumbers[i] <= 63 && gradeNumbers[i] >= 0):
            console.log(`${gradeNumbers[i]} is an F.`);
            break;
        //defaults to this when the value at index i is not within 0-100 or the desired data type
        default:
            console.log(`${gradeNumbers[i]} is not a valid score.`);
            break;
    }
}

//EX. 5
//Day of the Week Checker
//TODO Define an array of days of the week
//TODO Define a variable for the day to check
//TODO Check if the day is a weekday or weekend
//output the result

let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let currentDay = "Friday";
let isWeekday = false;
let isWeekend = false;

for (let i = 0; i < daysOfWeek.length; i++)
{
    switch(true)
    {
        case (currentDay == "Monday" || currentDay == "Tuesday" || currentDay == "Wednesday" || currentDay == "Thursday" || currentDay == "Friday"):
            isWeekday = true;
            break;
        case (currentDay == "Saturday" || currentDay == "Sunday"):
            isWeekend = true;
            break;
    }
}

if (isWeekday == true)
{
    console.log(`${currentDay} is a weekday.`);
}
else if (isWeekend == true)
{
    console.log(`${currentDay} is a weekend.`);
}

//EX. 6
//Temperature Checker
//TODO Define a array of 5 temperature numbers
//TODO Categorize the temperatures in 3 types (HOT, COLD, just right)
//output the result

let temperatureNumbers = [31, 65, 78, 89, 101];

for (let i = 0; i < temperatureNumbers.length; i++)
{
    switch(true)
    {
        case (temperatureNumbers[i] >= 80):
            console.log(`${temperatureNumbers[i]} is a HOT temperature.`);
            break;
        case (temperatureNumbers[i] <= 79 && temperatureNumbers[i] >= 55):
            console.log(`${temperatureNumbers[i]} is a good temperature.`);
            break;
        case (temperatureNumbers[i] <= 54):
            console.log(`${temperatureNumbers[i]} is a COLD temperature.`);
            break;
        default:
            console.log(`${temperatureNumbers[i]} is not a valid temperature.`);
            break;
    }
}

//EX. 7
//Number Sign Checker
//TODO Define a array of 5 numbers
//TODO Check the sign of the number
//output the result

let numbers = [434, -84, 0, -32, -1];

for (let i = 0; i < numbers.length; i++)
{
    switch(true)
    {
        case (numbers[i] < 0):
            console.log(`${numbers[i]} is a negative number.`);
            break;
        case (numbers[i] > 0):
            console.log(`${numbers[i]} is a positive number.`);
            break;
        case (numbers[i] == 0):
            console.log(`${numbers[i]} is neither negative nor positive (is 0).`);
            break;
        default:
            console.log(`${numbers[i]} is not a valid number.`);
    }
}

//FOR
for ( let i = 0; i < 5; i++)
{
    console.log(`(for) i = ${i}`);
}

//WHILE
while (i < 5)
{
    console.log(`(while) i = ${i}`);
    i++;
}

//DO WHILE
let j = 0;
do
{
    input = prompt("enter password: ");
} while (input != "123");
console.log("access granted");

//FOR EACH
const numbahs = [1,2,3,4,5];

numbahs.forEach((x) => 
{
    if (x === 3)
    {
        console.log(x);
    }
});

*/

/*
for (let i = 1; i <= 100; i++)
{
    switch(true)
    {
        case (i % 3 == 0 && i % 5 == 0):
            console.log("FizzBuzz");
            break;
        case (i % 3 == 0):
            console.log("Fizz");
            break;
        case (i % 5 == 0):
            console.log("Buzz");
            break;
        default:
            console.log(i);
            break;
    }
}

for (let i = 1; i <= 100; i++)
{
    //Multiples of 3 and 5
    if (i % 3 == 0 && i % 5 == 0)
    {
        console.log("FizzBuzz");
    }
    //Multiples of 3
    else if (i % 3 == 0) 
    {
        console.log("Fizz");
    }
    //Multiples of 5
    else if (i % 5 == 0)
    {
        console.log("Buzz");
    }
    else
    {
        console.log(i);
    }
}

*/

//For Loops Problems TWO

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("Problem One Console Output: ");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

/*
!Multiples Checker
? Create a program that checks if the elements in an array of numbers are multiples of a specific number and displays a message accordingly.
TODO Define an array containing a list of numbers.
TODO Define a variable for the specific number to check multiples of.
Output Results: Use console.log to display the results.
*/

let numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let multiplesCheck = 2;

for (let i = 0; i < numbersList.length; i++)
{
    if (numbersList[i] % multiplesCheck == 0)
    {
        console.log(`${numbersList[i]} is a multiple of ${multiplesCheck}`);
    }
    else
    {
        console.log(`${numbersList[i]} is NOT a multiple of ${multiplesCheck}`);
    }
}

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("Problem Two Console Output: ");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

/*
Age Group Categorizer
Create a program that categorizes the ages in an array as 'child', 'teen', 'adult', or 'senior' based on their values.
TODO Define an array containing a list of ages.
Output Results: Use console.log to display the age categories.
*/

let ageArray = [5, 15, 18, 50, 83, -2];

for (let i = 0; i < ageArray.length; i++)
{
    switch(true)
    {
        case (ageArray[i] >= 0 && ageArray[i] <= 12):
            console.log(`${ageArray[i]} year(s) is the age of a child.`);
            break;
        case (ageArray[i] >= 13 && ageArray[i] <= 19):
            console.log(`${ageArray[i]} years is the age of a teen.`);
            break;
        case (ageArray[i] >= 20 && ageArray[i] <= 64):
            console.log(`${ageArray[i]} years is the age of an adult.`);
            break;
        case (ageArray[i] >= 65):
            console.log(`${ageArray[i]} years is the age of a senior.`);
            break;
        default:
            console.log(`${ageArray[i]} is not a valid age value.`);
            break;
    }
}

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("Problem Three Console Output: ");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

/*
! Palindrome Checker
?Create a program that checks if the elements in an array of strings are palindromes and displays a message accordingly.
TODO Define an array containing a list of strings.
Output Results: Use console.log to display the results.
*/

let palindromeArray = ["Taco Cat", "Mom", "Dad", "Caleb", "Mississippi", "Bob"];

for (let i = 0; i < palindromeArray.length; i++)
{
    //stores the value at the current index of stringArray to its own array
    let string = palindromeArray[i].split(" ").join("");
    let reversedString = "";

    //reverses the characters of the value stored in string
    for (let j = string.length - 1; j >= 0; j--)
    {
        reversedString += string[j];
    }

    //compares the original string to its reversed counterpart to see if it equals each other
    if (string.toUpperCase() == reversedString.toUpperCase())
    {
        console.log(`${palindromeArray[i]} is a palindorome.`);
    }
    else
    {
        console.log(`${palindromeArray[i]} is NOT a palindorome.`);
    }
}

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("Problem Four Console Output: ");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

/*
!Prime Number Checker
?Create a program that checks if the elements in an array of numbers are prime and displays a message accordingly.
TODO Define an array containing a list of numbers.
Output Results: Use console.log to display the results.
*/

let numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

for (let i = 0; i < numbersArray.length; i++)
{
    let divisibleByOne = false;
    let divisibleByItself = false;
    let divisibleByOther = false;

    //repeats until j equals value currently at numbersArray[i]
    for (let j = 1; j <= numbersArray[i]; j++)
    {
        //only runs when remainder of the current numbersArray[i] value divided by j is equal to 0
        if (numbersArray[i] % j == 0)
        {
            //sets boolean variables to true if numbersArray[i] is divisible by 1, itself, or any other number
            switch (true)
            {
                case (j == 1):
                    divisibleByOne = true;
                    break;
                case (j == numbersArray[i]):
                    divisibleByItself = true;
                    break;
                default:
                    divisibleByOther = true;
                    break;
            }
        }
    }

    //compares the boolean variables values and determines if the current value at numbersArray[i] is a prime number or not
    switch(true)
    {
        case (divisibleByOne == true && divisibleByItself == true && divisibleByOther == false):
            console.log(`${numbersArray[i]} is a prime number.`);
            break;
        case (divisibleByOther == true || numbersArray[i] == 0 || numbersArray[i] == 1):
            console.log(`${numbersArray[i]} is NOT a prime number.`);
            break;
        default:
            console.log("Something went wrong with calculations.");
            break;
    }
}

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("Problem Five Console Output: ");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

/*
!Uppercase Checker
?Create a program that checks if the elements in an array of strings are in uppercase and displays a message accordingly.
TODO Define an array containing a list of strings.
Output Results: Use console.log to display the results.
*/

let stringArray = ["BRUH", "Hello", "goodbye", "see you later", "123"];

for (let i = 0; i < stringArray.length; i++)
{
    if (stringArray[i] == stringArray[i].toUpperCase())
    {
        console.log(`${stringArray[i]} is uppercase.`);
    }
    else
    {
        console.log(`${stringArray[i]} is NOT uppercase.`);
    }
}

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

//NESTED LOOPS
//Global and local scope

//Global = This variable is accessible from any point in this file.
let global = "Hello!";

//OUTER LOOP RUNS 10 TIMES
for (let i = 1; i <= 10; i++)
{
    let myName = "Caleb Straily";
    console.log(myName);
    //INNER LOOP IS GOING TO RUN 50 TIMES
    for (let j=1; j <= 5; j++)
    {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

//outputs an exception because it is out of the scope it was instantiated in
//console.log(myName);

let firstWord = "Hello";

{
    let secondWord = " World!";
    console.log(firstWord + secondWord);
}