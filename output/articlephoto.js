"use strict";
class ArticlePhoto extends Article {
    constructor(title, short_intro, main_photo, ...main_content) {
        super(title, short_intro, ...main_content);
        this.photos = [];
        this.main_photo = main_photo;
    }
    addPhoto(url_photo) {
        this.photos.push(url_photo);
    }
    addPhotos(...urls_photos) {
        for (const url_photo of urls_photos) {
            this.photos.push(url_photo);
        }
    }
}
