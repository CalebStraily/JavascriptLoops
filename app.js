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

let gradeNumbers = [54, 96, 82, 73, 101];

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
    }
}

//EX. 7
//Number Sign Checker
//TODO Define a array of 5 numbers
//TODO Check the sign of the number
//output the result

let numbers = [434, -84, 0, -32, -1]

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
    }
}