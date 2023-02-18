
// Question 3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in 
// lowercase, uppercase, and titlecase

var person_name = "wasiq";
console.log(person_name.toLowerCase());
console.log(person_name.toUpperCase());
var titlecase_person_name = person_name.charAt(0).toUpperCase() + person_name.substring(1).toLowerCase()
console.log(titlecase_person_name);

