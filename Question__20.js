// Question 20
// Think of something you could store in a array. For example, you could make a list of 
// mountains, rivers, countries, cities, languages, or anything else you’d like. Write a 
// program that creates a list containing these items
console.log("List of Languages");
var language_list;
var languages = "German,Spanish,Chinese,Japenese,Arabic,Urdu,English";
language_list = languages.split(",");
for (var i = 0; i < language_list.length; i++) {
    console.log(language_list[i]);
}
