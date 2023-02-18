//Question 43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function 
// make_great() with a copy of the array of magicians’ names. Because the original array 
// will be unchanged, return the new array and store it in a separate array. Call 
// show_magicians() with each array to show that you have one array of the original 
// names and one array with the Great added to each magician’s name
var magicians;
magicians = ["Dynamo", "Haryy Houdini", "Penn", "Teller"];
var unchanged_magicians;
unchanged_magicians = [];
show_magicians.apply(void 0, magicians);
function show_magicians() {
    var magics = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        magics[_i] = arguments[_i];
    }
    magics.forEach(function (element) {
        console.log(element);
    });
}
make_great.apply(void 0, magicians);
function make_great() {
    var magician_array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        magician_array[_i] = arguments[_i];
    }
    for (var i = 0; i < magician_array.length; i++) {
        unchanged_magicians[i] = magician_array[i];
        magicians[i] = 'The Great ' + magician_array[i];
        console.log(magicians[i]);
    }
}
show_magicians.apply(void 0, unchanged_magicians);
show_magicians.apply(void 0, magicians);
