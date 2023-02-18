
// Question 24

// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If 
// you want to try more comparisons, write more tests. Have at least one True and one 
// False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or 
// equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

let comp_name = "Condition";

// String Equality and InEquality
console.log(comp_name === "Condition" ? true : false);
console.log(comp_name === "Conditional" ? true : false);

//Eqluality with lowercase
console.log(comp_name.toLowerCase() === "condition" ? true : false);
console.log(comp_name.toLowerCase() === "CONDITION" ? true : false);

// greater or less equlaity
let numb_1 = 10;
let numb_2 = 20;

console.log(numb_1 === numb_2 ? true : false);
console.log(numb_1 > numb_2 ? true : false);
console.log(numb_1 < numb_2 ? true : false);
console.log(numb_1 >= numb_2 ? true : false);
console.log(numb_1 <= numb_2 ? true : false);

// AND Operation
if(numb_1 < numb_2 && numb_2 > numb_1){
    console.log(numb_2+" is greater");
}

if(numb_1 > numb_2 && numb_2 < numb_1){
    console.log(numb_2+" is greater");
}

// OR operation

if(numb_1 < numb_2 || numb_2 > numb_1){
    console.log(numb_2+" is greater");
}

if(numb_1 > numb_2 || numb_2 < numb_1){
    console.log(numb_1+" is smaller");
}

var language_list : String [];
var languages = "German,Spanish,Chinese,Japenese,Arabic,Urdu,English";

language_list = languages.split(",");

// item detection in array
let to_be_matched = "Urdu"
language_list.forEach(element => {
    
    if(to_be_matched === element){
        console.log(to_be_matched+" is present in the languages list");
    }

});

// false item detection in array
let false_detection = "Korean";
language_list.forEach(element => {
    
    if(false_detection === element){
        console.log(false_detection+" is present in the languages list");
    }
    else{
        console.log(false_detection+" is not present in the languages list");
    }

});



