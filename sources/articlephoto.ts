class ArticlePhoto extends Article implements IArticle {

    public main_photo : string;
    public photos : string[] = [];

    constructor(title :string, short_intro : string, main_photo : string, ...main_content : string[]) {
        super(title, short_intro, ...main_content);
        this.main_photo = main_photo;
    }

    public addPhoto(url_photo : string) : void{
        this.photos.push(url_photo);
    }

    public addPhotos(...urls_photos : string[]) : void{
        for (const url_photo of urls_photos) {
            this.photos.push(url_photo);
        }
    }
}