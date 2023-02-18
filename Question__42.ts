
//Question 42
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function 
// called make_great() that modifies the array of magicians by adding the phrase the Great 
// to each magician’s name. Call show_magicians() to see that the list has actually been 
// modified
let magicians : String [];
magicians = ["Dynamo","Haryy Houdini","Penn","Teller"];

let unchanged_magicians : String [];
unchanged_magicians = [];


show_magicians(...magicians);

function show_magicians(...magics){

    magics.forEach(element => {
        console.log(element);
    });
}
make_great(...magicians);

function make_great(...magician_array){
    
     
    for(var i = 0; i<magician_array.length; i++){
        unchanged_magicians[i] = magician_array[i];
        magicians[i] = 'The Great '+ magician_array[i]
        console.log(magicians[i]);
    }
}

   