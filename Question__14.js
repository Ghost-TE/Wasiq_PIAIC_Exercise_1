// Question 14
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you 
// invite? Make a list that includes at least three people you’d like to invite to dinner. Then 
// use your list to print a message to each person, inviting them to dinner.
var guests;
guests = ["Abdul Sattar Edhi", "Imran khan", "Zia Mohyudin"];
guests.forEach(function (element) {
    console.log("Dear Mr." + element + ",We request your pleasure to join us for dinner.");
});
