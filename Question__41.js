//Question 41
// Magicians: Make a array of magician’s names. Pass the array to a function called 
// show_magicians(), which prints the name of each magician in the array
var magicians;
magicians = ["Dynamo", "Haryy Houdini", "Penn", "Teller"];
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
