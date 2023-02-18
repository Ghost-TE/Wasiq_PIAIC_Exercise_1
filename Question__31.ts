//Question 31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let user_names : String [];
user_names = ["Admin","John","Kevin","Edward","Sheldon"];
if(user_names.length !== 0){
    console.log("List is not empty");
}

for(var i = 0; i=user_names.length; i++){
   
        user_names.shift();
        if(user_names.length === 0){
            console.log("We need to find some users!");
        
}
}

