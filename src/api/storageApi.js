const storageApi = {
    KEYS: {
        images: "images"
    },

    getImages(){
        if(!localStorage.getItem(this.KEYS.images)){
            localStorage.setItem ("images", JSON.stringify([]));
            return false;
        }
        const images = JSON.parse(localStorage.getItem(this.KEYS.images));
        return images;
    },

    saveImages(image) {
        if(!!this.getImages()){
            const images = this.getImages();
            const newImages = [...images, image];
            localStorage.setItem (this.KEYS.images, JSON.stringify(newImages));
        }
    },

    removeImage(id){
        const images = this.getImages();
        const newImages = images.filter(image => image.id !== id);
        localStorage.setItem (this.KEYS.images, JSON.stringify(newImages));
    }
};

export default storageApi;