let userName
let userSurname
let userFavoriteColor

userName= prompt("Inserisci il tuo nome");
userSurname= prompt("Inserisci il tuo cognome");
userFavoriteColor = prompt("Inserisci il tuo colore preferito");

document.getElementById("passwordSicurissima").innerHTML = userName + userSurname + userFavoriteColor + 21;
