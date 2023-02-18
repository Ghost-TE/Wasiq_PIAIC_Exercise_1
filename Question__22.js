// Question 22
// Intentional Error: If you haven’t received an array index error in one of your programs 
// yet, try to make one happen. Change an index in one of your programs to produce an 
// index error. Make sure you correct the error before closing the program.
var language_list;
var languages = "German,Spanish,Chinese,Japenese,Arabic,Urdu,English";
language_list = languages.split(",");
for (var i = 0; i <= language_list.length; i++) {
    console.log(language_list[i]);
}
