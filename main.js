/*If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that
includes at least three people you’d like to invite to dinner. Then use your list to print a message to
each person, inviting them to dinner*/
var myFriends = ["Abdulrehman", "Yasir", "Moiz", "Abdullah", "Muhammad", "Umar Ghani",];
/*for(let i = 0; i < myFriends.length; i++){

    console.log(`Mr. ${myFriends[i]}! You are invited to Dinner on Monday\n`);
}*/
myFriends.map(function (ib) {
    console.log("Mr. ".concat(ib, "! You are invited to Dinner on Monday\n"));
});
