class Page{

    public url : string;
    public title : string;
    public articles : Article[] = [];
    
    constructor(title : string, url : string){
        this.title = title;
        this.url = url;
    }

    public addArticle(newArticle : Article): number{
        this.articles.push(newArticle);
        return this.articles.length;
    }

    public generatePage():void{
        document.title = this.title;
        let url : HTMLHeadingElement = document.createElement('h1');
        document.body.appendChild(url);
        url.innerText = this.url;
        for (const article of this.articles) {
            let art : HTMLElement = document.createElement('article');
            document.body.appendChild(art);
            let art_title: HTMLHeadingElement = document.createElement('h2');
            art_title.innerText = article.title;
            art.appendChild(art_title);
            let short_intro : HTMLParagraphElement = document.createElement('p');
            short_intro.innerHTML = `<strong>${article.short_intro}</strong>`;
            art.appendChild(short_intro);
            for (const content of article.main_content) {
                let para : HTMLParagraphElement = document.createElement('p');
                para.innerText = content;
                art.appendChild(para);
            }
        }
    }
}