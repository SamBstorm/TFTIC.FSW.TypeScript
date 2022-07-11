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
    index.addArticle(new ArticlePhoto('L\'héritage des class', 'Les class peuvent avoir une dérivée, que l\'on appelle un héritage.', 'data:image/jpeg;base64,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', 'Paragraph 1 lorem ipsum', 'Paragraph 2 lorem ipsum', 'Paragraph 3 lorem ipsum', 'Paragraph 4 lorem ipsum'));

    let json_result : string = `{"title" : "L'interface, le foure-tout!", "short_intro":"Encore un chapitre vite fait...", "main_content":["Paragraph 1 lorem ipsum","Paragraph 2 lorem ipsum","Paragraph 3 lorem ipsum","Paragraph 4 lorem ipsum"]}`;
    let json_object : Object = JSON.parse(json_result);
    let json_article : IArticle = json_object as IArticle;
    index.addArticle(json_article);

    json_article = {title : 'Le ts c\'est facile!', short_intro:'Voici un dernier exemple', main_content:[]};
    index.addArticle(json_article);

    index.generatePage();
}


let dictionnaire : Map<string,string> = new Map();
dictionnaire.set("BE55", "Keanu Reeves");
dictionnaire.set("BE33", "Bruce Willis");
dictionnaire.get("BE55");
dictionnaire.set("BE55","Mario Cotillard");
