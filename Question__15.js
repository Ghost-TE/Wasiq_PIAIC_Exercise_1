// Question 15 (continued from Question 14)
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so 
// you need to send out a new set of invitations. You’ll have to think of someone else to 
// invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program 
// stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new 
// person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list
var guests;
guests = ["Abdul Sattar Edhi", "Imran khan", "Zia Mohyudin"];
guests.forEach(function (element) {
    console.log("Dear Mr." + element + ",We request your pleasure to join us for dinner.");
});
var new_guest = "Elon Musk";
console.log("Mr. " + guests[0] + " won't be ale to join for us dinner. Elon Musk will join us instead");
console.log("New invitations are: ");
guests = [new_guest, "Imran khan", "Zia Mohyudin"];
guests.forEach(function (element) {
    console.log("Dear Mr." + element + ",We request your pleasure to join us for dinner.");
});
