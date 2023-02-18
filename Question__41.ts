
//Question 41
// Magicians: Make a array of magician’s names. Pass the array to a function called 
// show_magicians(), which prints the name of each magician in the array

let magicians : String [];
magicians = ["Dynamo","Haryy Houdini","Penn","Teller"];

show_magicians(...magicians);

function show_magicians(...magics){

    magics.forEach(element => {
        console.log(element);
    });
}



