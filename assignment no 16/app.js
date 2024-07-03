var friend = ["Adil", "Rashid", "Asif"];
console.log("Great news! i got the jackpot!");
// Adding more friend
friend.unshift("Farah");
friend.splice(friend.length / 2, 0, "Fahad");
friend.push("Nick");
friend.forEach(function (friend) {
    console.log("Hey ".concat(friend, ", i will give you that jackpot"));
});
