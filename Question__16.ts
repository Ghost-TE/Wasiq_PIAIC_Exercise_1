
// Question 16 (from 15 and 14)
// More Guests: You just found a bigger dinner table, so now more space is available. Think 
// of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program 
// informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the 
// end of your list. • Print a new set of invitation messages, one for each person in your list


var guests : String [];
guests = ["Abdul Sattar Edhi","Imran khan","Zia Mohyudin"];

guests.forEach(element => {
    console.log("Dear Mr."+element+",We request your pleasure to join us for dinner.");
});



var new_guest = "Elon Musk";
console.log("Mr. "+guests[0]+" won't be ale to join for us dinner. Elon Musk will join us instead");
console.log("New invitations are: ");

guests = [new_guest,"Imran khan","Zia Mohyudin"];

guests.forEach(element => {
    console.log("Dear Mr."+element+",We request your pleasure to join us for dinner.");
});



console.log("Gentlemen, It seems we have more room on the table. So three more guests will be accompanying us");

guests = [new_guest,"Cristiano Ronaldo","Imran khan","Zia Mohyudin"];
guests.unshift("Bill Gates")
guests.push("Jackie Chan");

guests.forEach(element => {
    console.log("Dear Mr."+element+",We request your pleasure to join us for dinner.");
});



   