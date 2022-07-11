"use strict";
class Page {
    constructor(title, url) {
        this.articles = [];
        this.title = title;
        this.url = url;
    }
    addArticle(newArticle) {
        this.articles.push(newArticle);
        return this.articles.length;
    }
    generatePage() {
        document.title = this.title;
        let url = document.createElement('h1');
        document.body.appendChild(url);
        url.innerText = this.url;
        for (const article of this.articles) {
            let article_p;
            let art = document.createElement('article');
            document.body.appendChild(art);
            let art_title = document.createElement('h2');
            art_title.innerText = article.title;
            art.appendChild(art_title);
            let short_intro = document.createElement('p');
            short_intro.innerHTML = `<strong>${article.short_intro}</strong>`;
            art.appendChild(short_intro);
            for (const content of article.main_content) {
                let para = document.createElement('p');
                para.innerText = content;
                art.appendChild(para);
            }
            if (article.constructor === ArticlePhoto.prototype.constructor) {
                article_p = article;
                let main_img = document.createElement('img');
                main_img.src = article_p.main_photo;
                art.appendChild(main_img);
            }
        }
    }
}
