var guest_list = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];
guest_list.forEach(function (guest_list) {
    console.log("Dear ".concat(guest_list, ", would you like to join me for dinner?"));
});
var not_coming = "Albert Einstein";
var new_guest = "Fahad";
guest_list[0] = new_guest;
guest_list.forEach(function (guest_list) {
    console.log("Dear ".concat(guest_list, ", would you like to join me for dinner?"));
});
console.log("Mr ".concat(not_coming, ", is not coming for dinner tonight."));
