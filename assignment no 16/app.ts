let friend: string[] = ["Adil", "Rashid", "Asif"];
console.log("Great news! i got the jackpot!");

// Adding more friend
friend.unshift("Farah");
friend.splice(friend.length / 2, 0, "Fahad");
friend.push("Nick");

friend.forEach(friend => {
    console.log(`Hey ${friend}, i will give you that jackpot`);
});