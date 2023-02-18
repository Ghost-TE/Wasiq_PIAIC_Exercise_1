// Question 45
// Cars: Write a function that stores information about a car in a Object. The function 
// should always receive a manufacturer and a model name. It should then accept an 
// arbitrary number of keyword arguments. Call the function with the required information 
// and two other name-value pairs, such as a color or an optional feature. Print the Object 
// that’s returned to make sure all the information was stored correctly
var car_info = make_car("Audi", "R9", ['Color', 'Red'], ['Transmission', 'Automatic']);
console.log(car_info);
console.log(car_info.Manufacturer);
console.log(car_info.Model);
function make_car(Manufacturer, Model) {
    var arbitrary_options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        arbitrary_options[_i - 2] = arguments[_i];
    }
    var car_description = {
        'Manufacturer': Manufacturer,
        'Model': Model
    };
    arbitrary_options.forEach(function (arbitrary_option) {
        var key = arbitrary_options[0], value = arbitrary_options[1];
        car_description[key] = value;
    });
    return car_description;
}
