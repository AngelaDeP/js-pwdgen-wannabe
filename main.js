// Regole prompt

let name = prompt('Inserisci il tuo nome');
let surname = prompt('Inserisci il tuo cognome');
let favoriteColor = prompt('Inserisci il tuo colore preferito')


// Regola inserimento dati

document.getElementById('gen-password').innerHTML = "La tua password è " + name + surname + favoriteColor + "21";