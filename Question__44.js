// Question 44
// Sandwiches: Write a function that accepts a array of items a person wants on a 
// sandwich. The function should have one parameter that collects as many items as the 
// function call provides, and it should print a summary of the sandwich that is being 
// ordered. Call the function three times, using a different number of arguments each 
// time
var sandwich_items;
sandwich_items = ["bread", "Lettuce", "Mayo", "Patty"];
var sandwich_items_1;
sandwich_items_1 = ["bread", "Lettuce", "Ketchup", "Beef"];
var sandwich_items_2;
sandwich_items_2 = ["bread", "Lettuce", "Red Onions", "Chilli Garlic", "Patty"];
sandwiches.apply(void 0, sandwich_items);
sandwiches.apply(void 0, sandwich_items_1);
sandwiches.apply(void 0, sandwich_items_2);
function sandwiches() {
    var sandwich_items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sandwich_items[_i] = arguments[_i];
    }
    for (var i = 0; i < sandwich_items.length; i++) {
        console.log(sandwich_items[i]);
    }
    console.log("---------------------");
}
