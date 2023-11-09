
let firstName=prompt(`Dimmi il tuo nome`);
console.log(firstName);

let surname=prompt(`Dimmi il tuo cognome`);
console.log(surname);

let favouriteColor=prompt(`Dimmi il tuo colore preferito`);
console.log(favouriteColor);
let sum= firstName + surname + favouriteColor;

document.getElementById(`dati-utente`).innerHTML = `La password è :`