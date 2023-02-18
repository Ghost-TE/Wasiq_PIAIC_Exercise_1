
// Question 17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time 
// for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that 
// you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time 
// you pop a name from your list, print a message to that person letting them know you’re sorry 
// you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still 
// invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make 
// sure you actually have an empty list at the end of your program.



// Question 14

var guests : String [];
guests = ["Abdul Sattar Edhi","Imran khan","Zia Mohyudin"];

guests.forEach(element => {
    console.log("Dear Mr."+element+",We request your pleasure to join us for dinner.");
});

// Question 15

var new_guest = "Elon Musk";
console.log("Mr. "+guests[0]+" won't be ale to join for us dinner. Elon Musk will join us instead");
console.log("New invitations are: ");

guests = [new_guest,"Imran khan","Zia Mohyudin"];

guests.forEach(element => {
    console.log("Dear Mr."+element+",We request your pleasure to join us for dinner.");
});

// Question 16

console.log("Gentlemen, It seems we have more room on the table. So three more guests will be accompanying us");

guests = [new_guest,"Cristiano Ronaldo","Imran khan","Zia Mohyudin"];
guests.unshift("Bill Gates")
guests.push("Jackie Chan");

guests.forEach(element => {
    console.log("Dear Mr."+element+",We request your pleasure to join us for dinner.");
});

// Question 17
console.log("Sorry Gentlemen, due to lack of room on table only two guests can join us");
for(var i=0; i = guests.length-2; i++){
    console.log(guests.shift()+", Sorry but you are not invited!");
}



guests.forEach(element => {
    console.log("Mr. "+element+", You're still invited.");
    
});

guests.shift();
guests.pop();

console.log(guests);







   