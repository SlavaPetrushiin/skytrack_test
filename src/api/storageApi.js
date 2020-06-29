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

    // saveImages(image) {
    //     debugger
    //     if(localStorage.getItem(this.KEYS.images)){
    //         const images = JSON.parse(localStorage.getItem(this.KEYS.images));
    //         const newImages = [...images, image];
    //         localStorage.setItem (this.KEYS.images, JSON.stringify(newImages));
    //     }
    // }
};

export default storageApi;