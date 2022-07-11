"use strict";
/*
let message : string | number | undefined;
message = `Hello world!`;
message = 42;
message = undefined;

console.log(message);

const ask_number = function() : number{
    let result : number;
    let input : string | null ;
    do {
        input = prompt(`Veuillez introduire un chiffre :`);
    } while (input === null || isNaN(parseInt(input)));
    result = parseInt(input);
    return result;
}*/
let user = new User("Samuel", undefined, 'M');
let login;
let input;
do {
    input = prompt("Veuillez indiquer votre login :");
} while (input === null);
login = input;
let pwd;
do {
    input = prompt("Veuillez indiquer votre mot de passe :");
} while (input === null);
pwd = input;
if (user.check_login(login, pwd)) {
    console.log(`Bienvenu ${user.title_gender} ${user.login}!`);
    do {
        input = prompt('Veuillez introduire votre nouveau mot de passe :');
        console.log(input);
    } while (input === null || input === undefined);
    user.password = input;
    console.log(user.password);
}
else
    console.warn(`Mauvaises informations encodées...`);
