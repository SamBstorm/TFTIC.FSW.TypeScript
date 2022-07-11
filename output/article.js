"use strict";
class Article {
    constructor(title, short_intro, ...main_content) {
        this.main_content = [];
        this.title = title;
        this.short_intro = short_intro;
        for (const content_paragraph of main_content) {
            this.main_content.push(content_paragraph);
        }
    }
}
