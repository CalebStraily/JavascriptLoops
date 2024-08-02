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