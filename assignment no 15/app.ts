let guest_list: string[] = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];

guest_list.forEach(guest_list => {
    console.log(`Dear ${guest_list}, would you like to join me for dinner?`);
});

let not_coming: string = `Albert Einstein`;
let new_guest: string = `Fahad`;
guest_list[0] = new_guest;
guest_list.forEach(guest_list => {
    console.log(`Dear ${guest_list}, would you like to join me for dinner?`);
});

console.log(`Mr ${not_coming}, is not coming for dinner tonight.`)