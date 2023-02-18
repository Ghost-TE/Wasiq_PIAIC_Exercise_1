
//Question 40
// 0. Album: Write a function called make_album() that builds a Object describing a music 
// album. The function should take in an artist name and an album title, and it should 
// return a Object containing these two pieces of information. Use the function to make 
// three dictionaries representing different albums. Print each return value to show that 
// Objects are storing the album information correctly. Add an optional parameter to 
// make_album() that allows you to store the number of tracks on an album. If the calling 
// line includes a value for the number of tracks, add that value to the album’s Object. 
// Make at least one new function call that includes the number of tracks on an album.


let Artist = make_album("Atif Aslam","Gold Songs",8);
console.log(Artist);
console.log(Artist.artist_name);
console.log(Artist.album_title);
console.log(Artist.number_of_tracks);

let Artist_1 = make_album("Bilal Saeed","New Songs",7);
console.log(Artist_1);
console.log(Artist_1.artist_name);
console.log(Artist_1.album_title);
console.log(Artist_1.number_of_tracks);

let Artist_2 = make_album("Arjit Singh","New and Old Songs",5);
console.log(Artist_2);
console.log(Artist_2.artist_name);
console.log(Artist_2.album_title)
console.log(Artist_2.number_of_tracks);

function make_album(artist : string, title : string, tracks :  number){
    return {
        artist_name : artist,
        album_title : title,
        number_of_tracks : tracks
    }
}

