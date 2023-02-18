
// Question 44
// Sandwiches: Write a function that accepts a array of items a person wants on a 
// sandwich. The function should have one parameter that collects as many items as the 
// function call provides, and it should print a summary of the sandwich that is being 
// ordered. Call the function three times, using a different number of arguments each 
// time
var sandwich_items : String [];
sandwich_items = ["bread","Lettuce","Mayo","Patty"];

var sandwich_items_1 : String [];
sandwich_items_1 = ["bread","Lettuce","Ketchup","Beef"];

var sandwich_items_2 : String [];
sandwich_items_2 = ["bread","Lettuce","Red Onions","Chilli Garlic","Patty"];

sandwiches(...sandwich_items);
sandwiches(...sandwich_items_1);
sandwiches(...sandwich_items_2);

function sandwiches(...sandwich_items){
    for (var i = 0; i<sandwich_items.length; i++){
        console.log(sandwich_items[i]);
    }

    console.log("---------------------")
}





   