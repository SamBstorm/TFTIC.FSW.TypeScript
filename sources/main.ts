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
/*
let user : User = new User("Samuel", undefined, 'M');

let login : string;
let input : string | null;
do {
    input = prompt("Veuillez indiquer votre login :")
} while (input === null);
login = input;

let pwd : string;
do {
    input = prompt("Veuillez indiquer votre mot de passe :")
} while (input === null);
pwd = input;

if(user.check_login(login, pwd)) {
    console.log(`Bienvenu ${user.title_gender} ${user.login}!`);
    do {
        input = prompt('Veuillez introduire votre nouveau mot de passe :')
        console.log(input);
    } while (input === null || input === undefined);
    user.password = input;
    
    console.log(user.password);
}
else console.warn(`Mauvaises informations encodées...`);
*/
window.onload = () => {
    let index: Page = new Page('Le typescript selon Microsoft', 'https://google.be/');
    index.addArticle(new Article('Les variables sont typées!', 'Une variable typescript obtient un ou plusieurs types fix', 'Paragraph 1 lorem ipsum', 'Paragraph 2 lorem ipsum', 'Paragraph 3 lorem ipsum'));
    index.addArticle(new Article('Les type Tableau', 'Les variables n\'ont qu\'une seule valeur, sauf si c\'est un tableau', 'Paragraph 1 lorem ipsum', 'Paragraph 2 lorem ipsum', 'Paragraph 3 lorem ipsum', 'Paragraph 4 lorem ipsum'));

    index.generatePage();
}