class Article {

    public title : string;
    public short_intro : string;
    public main_content : string[] = [];

    constructor(title :string, short_intro: string, ...main_content : string[]) {
        this.title = title;
        this.short_intro = short_intro;
        for (const content_paragraph of main_content) {
            this.main_content.push(content_paragraph);
        }
    }
}