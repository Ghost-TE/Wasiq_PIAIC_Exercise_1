//Question 29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of 
// independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If 
// the fruit is in your array, the if block should print a statement, such as You really like bananas
var favourite_fruits;
favourite_fruits = ["Peach", "Apple", "Bannana", "Pomegranate", "Guava", "Pineapple", "Grapes", "Watermelon", "Kivi"];
for (var i = 0; i < favourite_fruits.length; i++) {
    if (favourite_fruits[i] === "Peach") {
        console.log("You really like Peaches!");
    }
    if (favourite_fruits[i] === "Apple") {
        console.log("You really like Apples!");
    }
    if (favourite_fruits[i] === "Guava") {
        console.log("You really like Guavas!");
    }
    if (favourite_fruits[i] === "Grapes") {
        console.log("You really like Grapes!");
    }
    if (favourite_fruits[i] === "Watermelon") {
        console.log("You really like Watermelons!");
    }
}
